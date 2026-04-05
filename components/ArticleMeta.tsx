import Link from "next/link";

interface ArticleMetaProps {
  /** Page slug without leading slash, e.g. "alcohol-metabolism" */
  slug: string;
  /** Article headline used for schema.org Article */
  title: string;
  /** One-sentence article description used for schema.org Article */
  description: string;
  /** ISO date string (YYYY-MM-DD) the article was first published */
  datePublished: string;
  /** ISO date string (YYYY-MM-DD) the article was last reviewed/updated */
  dateModified: string;
}

/**
 * Renders an editorial byline (author + publication date + last reviewed
 * date) and injects schema.org Article JSON-LD for the page. Used on every
 * long-form content article to provide E-E-A-T signals (Experience,
 * Expertise, Authoritativeness, Trustworthiness).
 */
export default function ArticleMeta({
  slug,
  title,
  description,
  datePublished,
  dateModified,
}: ArticleMetaProps) {
  const url = `https://alcoholtrackr.com/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "BAC Calculator Editorial Team",
      url: "https://alcoholtrackr.com/editorial-policy",
    },
    publisher: {
      "@type": "Organization",
      name: "BAC Calculator",
      url: "https://alcoholtrackr.com",
      logo: {
        "@type": "ImageObject",
        url: "https://alcoholtrackr.com/logo.png",
      },
    },
  };

  const formatDate = (iso: string) =>
    new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400 border-b border-gray-800 pb-4">
        <span>
          By{" "}
          <Link
            href="/editorial-policy"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            BAC Calculator Editorial Team
          </Link>
        </span>
        <span aria-hidden="true" className="text-gray-600">·</span>
        <span>
          Published{" "}
          <time dateTime={datePublished}>{formatDate(datePublished)}</time>
        </span>
        <span aria-hidden="true" className="text-gray-600">·</span>
        <span>
          Last reviewed{" "}
          <time dateTime={dateModified}>{formatDate(dateModified)}</time>
        </span>
      </div>
    </>
  );
}
