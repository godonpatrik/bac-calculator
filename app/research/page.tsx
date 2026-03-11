import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Research — BAC Calculator | Scientific Papers on Blood Alcohol Content",
  description:
    "Explore peer-reviewed scientific research on blood alcohol content (BAC), alcohol metabolism, the Widmark formula, and the physiological effects of alcohol. Each paper includes an editorial summary and links to the original publication.",
  alternates: {
    canonical: "https://alcoholtrackr.com/research",
  },
  openGraph: {
    title:
      "Research — BAC Calculator | Scientific Papers on Blood Alcohol Content",
    description:
      "Explore peer-reviewed scientific research on blood alcohol content (BAC), alcohol metabolism, the Widmark formula, and the physiological effects of alcohol on the human body.",
    url: "https://alcoholtrackr.com/research",
    siteName: "BAC Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Research — BAC Calculator | Scientific Papers on Blood Alcohol Content",
    description:
      "Explore peer-reviewed scientific research on blood alcohol content (BAC), alcohol metabolism, the Widmark formula, and the physiological effects of alcohol on the human body.",
  },
};

interface Paper {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  pmid?: string;
  url: string;
  overview: string;
  category: string;
}

const papers: Paper[] = [
  {
    id: "widmark-1932",
    title:
      "Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung (The Theoretical Foundations and Practical Applicability of Forensic Alcohol Determination)",
    authors: "Widmark, E. M. P.",
    journal: "Urban & Schwarzenberg, Berlin",
    year: 1932,
    url: "https://scholar.google.com/scholar?q=Widmark+theoretischen+Grundlagen+Alkoholbestimmung+1932",
    overview:
      "This foundational monograph introduced the pharmacokinetic model for estimating blood alcohol concentration (BAC) based on the amount of alcohol consumed, body weight, and a gender-specific distribution ratio (now known as the Widmark factor). Widmark demonstrated that alcohol distributes through total body water and is eliminated from the bloodstream at a nearly constant rate (zero-order kinetics), approximately 0.015 g/dL per hour. The Widmark formula — BAC = (A / (r × W)) − (β × t) — where A is the mass of alcohol consumed, r is the Widmark factor (0.68 for men, 0.55 for women), W is body weight, β is the elimination rate, and t is time — became the standard model used worldwide in forensic toxicology and clinical practice for retrospective and prospective BAC estimation.",
    category: "Pharmacokinetics & Metabolism",
  },
  {
    id: "jones-2010",
    title:
      "Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework",
    authors: "Jones, A. W.",
    journal: "Forensic Science International",
    year: 2010,
    volume: "200",
    issue: "1–3",
    pages: "1–20",
    doi: "10.1016/j.forsciint.2010.02.021",
    pmid: "20304569",
    url: "https://doi.org/10.1016/j.forsciint.2010.02.021",
    overview:
      "This comprehensive review synthesized data from numerous controlled drinking studies to establish evidence-based elimination rates of ethanol from blood. The analysis covered studies involving thousands of subjects and confirmed that the mean elimination rate of ethanol is approximately 0.015 g/100 mL/h (range 0.010–0.025 g/100 mL/h), following predominantly zero-order kinetics at moderate-to-high BAC levels. The review discussed inter-individual variability attributable to genetic polymorphisms in alcohol dehydrogenase (ADH) and aldehyde dehydrogenase (ALDH), chronic alcohol use, liver function, and fed versus fasted states. The findings have direct applications in forensic casework for retrograde extrapolation of BAC to the time of an alleged offense.",
    category: "Pharmacokinetics & Metabolism",
  },
  {
    id: "cederbaum-2012",
    title: "Alcohol metabolism",
    authors: "Cederbaum, A. I.",
    journal: "Clinics in Liver Disease",
    year: 2012,
    volume: "16",
    issue: "4",
    pages: "667–685",
    doi: "10.1016/j.cld.2012.08.002",
    pmid: "23101976",
    url: "https://doi.org/10.1016/j.cld.2012.08.002",
    overview:
      "This review article provides a detailed examination of the biochemical pathways involved in alcohol metabolism in humans. The primary pathway involves alcohol dehydrogenase (ADH) in the liver cytosol, which oxidizes ethanol to acetaldehyde, followed by further oxidation to acetate by aldehyde dehydrogenase (ALDH) in the mitochondria. The microsomal ethanol-oxidizing system (MEOS), involving cytochrome P450 2E1 (CYP2E1), serves as a secondary pathway that becomes increasingly significant at higher blood alcohol levels and with chronic alcohol consumption. The article also discusses the role of catalase, the generation of reactive oxygen species (ROS) during alcohol oxidation, and how genetic polymorphisms in ADH and ALDH isoforms influence alcohol metabolism rates and susceptibility to alcohol-related organ damage.",
    category: "Pharmacokinetics & Metabolism",
  },
  {
    id: "frezza-1990",
    title:
      "High blood alcohol levels in women: the role of decreased gastric alcohol dehydrogenase activity and first-pass metabolism",
    authors:
      "Frezza, M., di Padova, C., Pozzato, G., Terpin, M., Baraona, E., & Lieber, C. S.",
    journal: "New England Journal of Medicine",
    year: 1990,
    volume: "322",
    issue: "2",
    pages: "95–99",
    doi: "10.1056/NEJM199001113220205",
    pmid: "2248624",
    url: "https://doi.org/10.1056/NEJM199001113220205",
    overview:
      "This landmark study investigated why women achieve higher blood alcohol concentrations than men after consuming equivalent amounts of alcohol relative to body weight. The researchers measured gastric alcohol dehydrogenase (ADH) activity and first-pass metabolism of ethanol in men and women, including both non-alcoholic and alcoholic subjects. Results showed that women had significantly lower gastric ADH activity than men, leading to reduced first-pass metabolism and greater bioavailability of ingested ethanol. In alcoholic women, gastric ADH activity was virtually absent, resulting in blood alcohol levels approaching those expected from intravenous administration. These findings provided a biochemical explanation for the well-known sex difference in alcohol vulnerability and have direct implications for BAC estimation models that use gender-specific distribution factors.",
    category: "Sex Differences",
  },
  {
    id: "mitchel-1985",
    title:
      "Alcohol-induced impairment of central nervous system function: behavioral skills involved in driving",
    authors: "Mitchell, M. C.",
    journal: "Journal of Studies on Alcohol, Supplement",
    year: 1985,
    volume: "10",
    pages: "109–116",
    doi: "10.15288/jsas.1985.s10.109",
    url: "https://doi.org/10.15288/jsas.1985.s10.109",
    overview:
      "This review examined the neuropharmacological mechanisms through which alcohol impairs the central nervous system functions critical for safe driving. The study detailed how ethanol acts as a central nervous system depressant by enhancing gamma-aminobutyric acid (GABA) receptor activity and inhibiting glutamate (NMDA) receptor function, leading to progressive impairment of cognitive and psychomotor skills. At BAC levels of 0.05–0.08%, measurable deficits were observed in divided attention, reaction time, eye-hand coordination, and visual tracking. The review highlighted that tolerance may mitigate some subjective effects but does not eliminate objective performance impairment, a critical distinction for understanding impaired driving risk in chronic drinkers.",
    category: "Impairment & Driving",
  },
  {
    id: "lieber-1994",
    title: "Alcohol and the liver: 1994 update",
    authors: "Lieber, C. S.",
    journal: "Gastroenterology",
    year: 1994,
    volume: "106",
    issue: "4",
    pages: "1085–1105",
    doi: "10.1016/0016-5085(94)90772-2",
    pmid: "8143977",
    url: "https://doi.org/10.1016/0016-5085(94)90772-2",
    overview:
      "This seminal review comprehensively examined the relationship between alcohol consumption and liver pathology. Lieber detailed the progression from fatty liver (steatosis) through alcoholic hepatitis to cirrhosis, emphasizing the central role of the microsomal ethanol-oxidizing system (MEOS) and CYP2E1 induction in chronic drinkers. The review described how chronic alcohol consumption upregulates CYP2E1 activity, increasing the rate of ethanol metabolism but also generating greater quantities of reactive oxygen species and toxic metabolites, including acetaldehyde. The paper discussed thresholds of alcohol intake associated with liver disease (generally above 40–80 g/day over extended periods) and how nutritional status, genetic factors, and hepatitis virus co-infection modulate susceptibility. These mechanisms are directly relevant to understanding why chronic drinkers may exhibit altered BAC elimination rates.",
    category: "Health Effects",
  },
  {
    id: "shield-2020",
    title:
      "National, regional, and global burdens of disease from 2000 to 2016 attributable to alcohol use: a comparative risk assessment study",
    authors:
      "Shield, K. D., Manthey, J., Rylett, M., Probst, C., Wettlaufer, A., Parry, C. D. H., & Rehm, J.",
    journal: "The Lancet Public Health",
    year: 2020,
    volume: "5",
    issue: "1",
    pages: "e51–e61",
    doi: "10.1016/S2468-2667(19)30231-2",
    pmid: "31910980",
    url: "https://doi.org/10.1016/S2468-2667(19)30231-2",
    overview:
      "This large-scale comparative risk assessment analyzed the global burden of disease attributable to alcohol consumption using data from the Global Burden of Disease Study. The study estimated that in 2016, alcohol use accounted for approximately 2.84 million deaths (5.3% of all deaths) and 99.2 million disability-adjusted life years (DALYs) worldwide. The leading causes of alcohol-attributable death were cardiovascular diseases, cancers (particularly of the digestive system), and injuries (including road traffic accidents). The study found that the burden was highest among males aged 15–49 years, for whom alcohol was the leading risk factor for premature death. The analysis underscored the importance of public health interventions including BAC-based drinking guidelines and limits for driving.",
    category: "Public Health",
  },
];

const categories = [...new Set(papers.map((p) => p.category))];

function formatCitation(paper: Paper): string {
  let citation = `${paper.authors} (${paper.year}). ${paper.title}. *${paper.journal}*`;
  if (paper.volume) {
    citation += `, ${paper.volume}`;
    if (paper.issue) {
      citation += `(${paper.issue})`;
    }
  }
  if (paper.pages) {
    citation += `, ${paper.pages}`;
  }
  citation += ".";
  if (paper.doi) {
    citation += ` https://doi.org/${paper.doi}`;
  }
  return citation;
}

export default function ResearchPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link
        href="/"
        className="text-blue-400 hover:text-blue-300 text-sm mb-6 inline-block"
      >
        ← Back to Calculator
      </Link>

      <h1 className="text-3xl font-bold text-white mb-3">
        Scientific Research on Blood Alcohol Content
      </h1>
      <p className="text-gray-400 text-sm mb-8">
        A curated collection of peer-reviewed scientific papers on blood alcohol
        content, alcohol metabolism, impairment, and related topics. Each entry
        includes a link to the full publication.
      </p>

      {/* Category Quick Navigation */}
      <div className="bg-gray-800 rounded-lg p-4 mb-8">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Browse by Topic
        </h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="text-xs px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-full transition-colors"
            >
              {cat} ({papers.filter((p) => p.category === cat).length})
            </a>
          ))}
        </div>
      </div>

      {/* Papers by Category */}
      <div className="space-y-10">
        {categories.map((category) => (
          <section
            key={category}
            id={category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
          >
            <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              {category}
            </h2>
            <div className="space-y-6">
              {papers
                .filter((p) => p.category === category)
                .map((paper) => (
                  <article
                    key={paper.id}
                    className="bg-gray-800 rounded-lg p-6"
                  >
                    <h3 className="text-base font-semibold text-blue-400 mb-2 leading-snug">
                      {paper.title}
                    </h3>

                    <div className="text-xs text-gray-500 mb-3 space-y-0.5">
                      <p>
                        <span className="text-gray-400">{paper.authors}</span>
                      </p>
                      <p>
                        <em>{paper.journal}</em>
                        {paper.volume && `, ${paper.volume}`}
                        {paper.issue && `(${paper.issue})`}
                        {paper.pages && `, pp. ${paper.pages}`} ({paper.year})
                      </p>
                      {paper.doi && (
                        <p>
                          DOI:{" "}
                          <a
                            href={`https://doi.org/${paper.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            {paper.doi}
                          </a>
                        </p>
                      )}
                      {paper.pmid && (
                        <p>
                          PMID:{" "}
                          <a
                            href={`https://pubmed.ncbi.nlm.nih.gov/${paper.pmid}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            {paper.pmid}
                          </a>
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        Overview
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {paper.overview}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-3 border-t border-gray-700">
                      <a
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        Read Full Paper
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                      <span className="text-xs text-gray-500 hidden sm:inline">
                        Opens in a new tab
                      </span>
                    </div>

                    {/* APA-style citation */}
                    <details className="mt-4">
                      <summary className="text-xs text-gray-500 hover:text-gray-400 cursor-pointer transition-colors">
                        Cite this paper (APA)
                      </summary>
                      <div className="mt-2 bg-gray-900 rounded p-3 text-xs text-gray-400 font-mono leading-relaxed break-words select-all">
                        {formatCitation(paper)}
                      </div>
                    </details>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </div>

      {/* Disclaimer */}
      <section className="bg-gray-800 rounded-lg p-6 mt-10">
        <h2 className="text-xl font-semibold text-white mb-3">
          About This Collection
        </h2>
        <div className="text-gray-300 text-sm space-y-2">
          <p>
            The overviews presented on this page are summaries of peer-reviewed
            scientific research. We have compiled these references to help users
            understand the science behind blood alcohol content estimation. All
            papers are linked to their original sources — we encourage you to
            read the full publications for complete details.
          </p>
          <p>
            This collection is for educational purposes only and does not
            constitute medical or legal advice. If you have concerns about
            alcohol use, please consult a healthcare professional.
          </p>
          <div className="flex flex-wrap gap-3 mt-3">
            <Link
              href="/about"
              className="inline-block px-4 py-2 border border-gray-600 hover:bg-gray-700 text-gray-300 text-sm font-medium rounded-lg transition-colors"
            >
              About BAC Calculator
            </Link>
            <Link
              href="/faq"
              className="inline-block px-4 py-2 border border-gray-600 hover:bg-gray-700 text-gray-300 text-sm font-medium rounded-lg transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
