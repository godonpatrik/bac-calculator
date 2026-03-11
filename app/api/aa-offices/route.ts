import { NextResponse } from "next/server";
import { parse } from "node-html-parser";

export interface AAOffice {
  country: string;
  name: string;
  address?: string;
  phone?: string;
  helpline?: string;
  website?: string;
}

// Country codes for AA.org website
// Based on ISO 3166-1 alpha-2 country codes
const countryCodeMap: Record<string, string> = {
  "United States": "US",
  "United Kingdom": "GB",
  "Canada": "CA",
  "Australia": "AU",
  "Germany": "DE",
  "France": "FR",
  "Italy": "IT",
  "Spain": "ES",
  "Netherlands": "NL",
  "Belgium": "BE",
  "Switzerland": "CH",
  "Austria": "AT",
  "Sweden": "SE",
  "Norway": "NO",
  "Denmark": "DK",
  "Finland": "FI",
  "Poland": "PL",
  "Czech Republic": "CZ",
  "Hungary": "HU",
  "Portugal": "PT",
  "Greece": "GR",
  "Ireland": "IE",
  "New Zealand": "NZ",
  "Japan": "JP",
  "South Korea": "KR",
  "China": "CN",
  "India": "IN",
  "Brazil": "BR",
  "Mexico": "MX",
  "Argentina": "AR",
  "Chile": "CL",
  "Colombia": "CO",
  "Peru": "PE",
  "Venezuela": "VE",
  "Ecuador": "EC",
  "Uruguay": "UY",
  "Paraguay": "PY",
  "Bolivia": "BO",
  "Costa Rica": "CR",
  "Panama": "PA",
  "Guatemala": "GT",
  "Honduras": "HN",
  "El Salvador": "SV",
  "Nicaragua": "NI",
  "Cuba": "CU",
  "Dominican Republic": "DO",
  "Puerto Rico": "PR",
  "Jamaica": "JM",
  "Haiti": "HT",
  "Trinidad and Tobago": "TT",
  "Barbados": "BB",
  "Bahamas": "BS",
  "Belize": "BZ",
  "Guyana": "GY",
  "South Africa": "ZA",
  "Kenya": "KE",
  "Nigeria": "NG",
  "Ghana": "GH",
  "Egypt": "EG",
  "Morocco": "MA",
  "Tunisia": "TN",
  "Algeria": "DZ",
  "Uganda": "UG",
  "Zimbabwe": "ZW",
  "Israel": "IL",
  "Turkey": "TR",
  "Saudi Arabia": "SA",
  "United Arab Emirates": "AE",
  "Lebanon": "LB",
  "Kuwait": "KW",
  "Oman": "OM",
  "Iran": "IR",
  "Singapore": "SG",
  "Malaysia": "MY",
  "Thailand": "TH",
  "Philippines": "PH",
  "Indonesia": "ID",
  "Vietnam": "VN",
  "Cambodia": "KH",
  "Laos": "LA",
  "Sri Lanka": "LK",
  "Nepal": "NP",
  "Pakistan": "PK",
  "Bangladesh": "BD",
  "Myanmar": "MM",
  "Mongolia": "MN",
  "Hong Kong": "HK",
  "Taiwan": "TW",
  "Russia": "RU",
  "Ukraine": "UA",
  "Belarus": "BY",
  "Kazakhstan": "KZ",
  "Uzbekistan": "UZ",
  "Lithuania": "LT",
  "Latvia": "LV",
  "Estonia": "EE",
  "Romania": "RO",
  "Bulgaria": "BG",
  "Slovakia": "SK",
  "Slovenia": "SI",
  "Croatia": "HR",
  "Serbia": "RS",
  "Iceland": "IS",
  "Malta": "MT",
  "Cyprus": "CY",
  "Luxembourg": "LU",
  "Liechtenstein": "LI",
  "Monaco": "MC",
  "Andorra": "AD",
  "Papua New Guinea": "PG",
  "Fiji": "FJ",
  "Guam": "GU",
  "French Polynesia": "PF",
  "Maldives": "MV",
  "Bermuda": "BM",
  "Cayman Islands": "KY",
  "Turks and Caicos Islands": "TC",
};

async function scrapeAAOffices(countryCode: string): Promise<AAOffice[]> {
  const countryName =
    Object.keys(countryCodeMap).find(
      (key) => countryCodeMap[key] === countryCode
    ) || countryCode;

  const url = `https://www.aa.org/find-aa/world?cc=${countryCode}`;
  const response = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch AA data: ${response.status}`);
  }

  const html = await response.text();
  const root = parse(html);

  // Each office is a div.location-item
  const items = root.querySelectorAll(".location-item");

  const offices: AAOffice[] = items.map((item) => {
    const name = item.querySelector(".location-name")?.text?.trim() || "";

    // Build address from structured address parts
    const locality = item.querySelector(".locality")?.text?.trim();
    const adminArea = item.querySelector(".administrative-area")?.text?.trim();
    const postalCode = item.querySelector(".postal-code")?.text?.trim();
    const addr1 = item.querySelector(".address-line1")?.text?.trim();
    const addr2 = item.querySelector(".address-line2")?.text?.trim();

    const addressParts: string[] = [];
    if (addr1) addressParts.push(addr1);
    if (addr2) addressParts.push(addr2);
    const cityParts: string[] = [];
    if (locality) cityParts.push(locality);
    if (adminArea) cityParts.push(adminArea);
    if (postalCode) cityParts.push(postalCode);
    if (cityParts.length) addressParts.push(cityParts.join(", "));
    const address = addressParts.length ? addressParts.join(", ") : undefined;

    // Website: first <a> inside a non-address <p>
    const contactLink = item.querySelector("p:not(.address) a");
    const website = contactLink?.getAttribute("href") || undefined;

    // Phone numbers: extract from <span>Label:</span>NUMBER patterns in the
    // contact <p>.  The HTML looks like:
    //   <span>Phone:</span>(212) 870-3400<br><span>Helpline:</span>...
    const contactP = item.querySelector("p:not(.address)");
    let phone: string | undefined;
    let helpline: string | undefined;

    if (contactP) {
      const contactHtml = contactP.innerHTML;
      // Match patterns like <span>Phone:</span>(212) 870-3400
      const phonePatterns = contactHtml.matchAll(
        /<span>([^<]+?):<\/span>\s*([^<]+)/g
      );
      for (const m of phonePatterns) {
        const label = m[1].trim().toLowerCase();
        const value = m[2].trim();
        if (
          label === "phone" ||
          label === "answering service" ||
          label === "tdd" ||
          label === "tty"
        ) {
          // Append additional phone numbers
          phone = phone ? `${phone} / ${value}` : value;
        } else if (
          label.includes("helpline") ||
          label.includes("sp/fr")
        ) {
          helpline = helpline ? `${helpline} / ${value}` : value;
        } else {
          // Any other label — treat as phone
          phone = phone ? `${phone} / ${value}` : value;
        }
      }
    }

    return { country: countryName, name, address, phone, helpline, website };
  });

  return offices.filter((o) => o.name);
}

// GET endpoint to fetch all countries or scrape data for a specific country
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const country = searchParams.get("country");

    if (country) {
      const countryCode = countryCodeMap[country];

      if (!countryCode) {
        return NextResponse.json(
          { error: "Country not found or not supported" },
          { status: 404 }
        );
      }

      const offices = await scrapeAAOffices(countryCode);

      return NextResponse.json({ offices });
    }

    // Return all available countries for the dropdown
    const countries = Object.keys(countryCodeMap).sort();

    return NextResponse.json({ countries });
  } catch (error) {
    console.error("Error in AA offices API:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
