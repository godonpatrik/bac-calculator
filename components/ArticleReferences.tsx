export interface Reference {
  /** Citation text in plain prose — author(s), year, title, journal, etc. */
  citation: string;
  /** Link to the primary source (DOI, PubMed, government URL). */
  url: string;
  /** Short label shown next to the link, e.g. "DOI", "PubMed", "NIAAA". */
  label?: string;
}

interface ArticleReferencesProps {
  references: Reference[];
}

/**
 * Displays a "References" section at the bottom of a content article. Every
 * long-form article should cite the peer-reviewed papers, government
 * guidance, or authoritative sources that back its claims.
 */
export default function ArticleReferences({
  references,
}: ArticleReferencesProps) {
  return (
    <section className="bg-gray-800 rounded-lg p-6 mt-8">
      <h2 className="text-xl font-semibold text-white mb-3">References</h2>
      <ol className="list-decimal list-inside ml-1 space-y-3 text-xs text-gray-400 leading-relaxed">
        {references.map((ref, i) => (
          <li key={i}>
            <span>{ref.citation} </span>
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              {ref.label ?? "Source"}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
