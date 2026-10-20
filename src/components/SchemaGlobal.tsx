import { Helmet } from "react-helmet-async";
import { SITE_URL } from "@/components/SEOHead";

/** JSON-LD global : Organization + WebSite, injecté une seule fois pour tout le site. */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Highends Store",
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.png`,
      email: "contact@highends.store",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "contact@highends.store",
        url: `${SITE_URL}/contact`,
        availableLanguage: ["French"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Highends Store",
      url: SITE_URL,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

const SchemaGlobal = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </Helmet>
);

export default SchemaGlobal;
