import { SITE, SITE_URL } from "@/lib/site";

// schema.org Person + WebSite data so search engines can show a rich result for the portfolio.
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Pham Thi My Duyen",
        alternateName: "Mely",
        jobTitle: "Meta Ads Consultant",
        description: SITE.description,
        url: `${SITE_URL}/`,
        image: `${SITE_URL}/images/mely-in-front-of-the-sultan-abdul-samad-.jpg`,
        email: `mailto:${SITE.email}`,
        sameAs: [SITE.linkedin, "https://blogs.mely.io.vn/"],
        address: { "@type": "PostalAddress", addressLocality: "Ho Chi Minh City", addressCountry: "VN" },
        alumniOf: { "@type": "CollegeOrUniversity", name: "FPT University" },
        knowsLanguage: ["vi", "en"],
        knowsAbout: ["Meta Ads", "Performance marketing", "Ad creative", "SEO", "Email marketing", "Data analysis"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Mely Marketing Portfolio",
        inLanguage: "en",
        author: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
