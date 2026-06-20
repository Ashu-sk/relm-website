import { SITE_URL } from "@/lib/faqData";

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Rarelm",
      legalName: "MAVRIST TECH PVT LTD",
      url: SITE_URL,
      logo: `${SITE_URL}/relm-logo.png`,
      slogan: "Real Is Rare",
      description:
        "Rarelm is an AI-verified social platform where every account belongs to a verified real human.",
      foundingDate: "2024-03",
      founder: { "@type": "Person", name: "Ashutosh Kesharwani" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.linkedin.com/company/rarelm",
        "https://www.instagram.com/rarelmofficial",
        "https://www.facebook.com/profile.php?id=61582837805080",
        "https://x.com/relm978149",
        "https://www.f6s.com/rarelm",
        "https://rarelm.blogspot.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Rarelm",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};
