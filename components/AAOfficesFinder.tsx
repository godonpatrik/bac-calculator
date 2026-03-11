"use client";
import { useState, useEffect } from "react";

interface AAOffice {
  country: string;
  name: string;
  address?: string;
  phone?: string;
  helpline?: string;
  website?: string;
}

export default function AAOfficesFinder() {
  const [countries, setCountries] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [offices, setOffices] = useState<AAOffice[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Fetch all countries on component mount
  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch("/api/aa-offices");
        if (!response.ok) throw new Error("Failed to fetch countries");
        
        const data = await response.json();
        setCountries(data.countries || []);
      } catch (err) {
        console.error("Error fetching countries:", err);
        setError("Failed to load countries list");
      }
    }

    fetchCountries();
  }, []);

  // Fetch offices when country is selected
  useEffect(() => {
    if (!selectedCountry) {
      setOffices([]);
      return;
    }

    async function fetchOffices() {
      setLoading(true);
      setError("");
      
      try {
        const response = await fetch(
          `/api/aa-offices?country=${encodeURIComponent(selectedCountry)}`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch office information");
        }
        
        const data = await response.json();
        
        console.log("Received office data:", data); // Debug log
        
        setOffices(data.offices || []);
        
        if (!data.offices || data.offices.length === 0) {
          setError("No office information available for this country");
        }
      } catch (err) {
        console.error("Error fetching offices:", err);
        setError("Failed to load office information. Please try again.");
        setOffices([]);
      } finally {
        setLoading(false);
      }
    }

    fetchOffices();
  }, [selectedCountry]);

  return (
    <section className="bg-gray-800 rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold text-white mb-3">
        Find AA Offices and Contacts Worldwide
      </h2>
      <p className="text-gray-300 text-sm mb-4">
        Find Alcoholics Anonymous General Service Offices and contact information
        in your country. Select your country below to get local contact details.
      </p>

      {/* Country Dropdown */}
      <div className="mb-6">
        <label
          htmlFor="country-select"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Select Country
        </label>
        <select
          id="country-select"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="w-full md:w-96 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">-- Choose a country --</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          <p className="text-gray-400 mt-3">Loading office information...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 text-red-300">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Office Information */}
      {!loading && !error && offices.length > 0 && (
        <div className="space-y-4">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-gray-700/50 border border-gray-600 rounded-lg p-5"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {office.name}
              </h3>
              
              <div className="space-y-2 text-sm">
                {office.address && (
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-300">{office.address}</span>
                  </div>
                )}

                {office.phone && (
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href={`tel:${office.phone}`}
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      {office.phone}
                    </a>
                  </div>
                )}

                {office.helpline && (
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-green-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-gray-400 mr-1">Helpline:</span>
                    <a
                      href={`tel:${office.helpline}`}
                      className="text-green-400 hover:text-green-300 underline"
                    >
                      {office.helpline}
                    </a>
                  </div>
                )}

                {office.website && (
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    <a
                      href={office.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      Visit Website →
                    </a>
                  </div>
                )}


              </div>
            </div>
          ))}

          <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4 mt-4">
            <p className="text-sm text-blue-200">
              <strong>Note:</strong> This information is provided as a resource.
              Contact details may change. For the most up-to-date information about
              local AA meetings and services, please visit the official website or
              contact the office directly.
            </p>
          </div>
        </div>
      )}

      {/* No Selection State */}
      {!loading && !error && !selectedCountry && (
        <div className="text-center py-8 bg-gray-700/30 rounded-lg border border-gray-600">
          <svg
            className="w-16 h-16 mx-auto text-gray-500 mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-gray-400">
            Select a country above to view AA office contact information
          </p>
        </div>
      )}
    </section>
  );
}
