import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  image?: string;
  schema?: Record<string, unknown>;
}

const SEOHead = ({ title, description, canonical, type = "website", image, schema }: SEOHeadProps) => {
  useEffect(() => {
    document.title = `${title} | GearHub`;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", type, "property");
    if (image) setMeta("og:image", image, "property");

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    } else {
      link?.remove();
    }

    // JSON-LD
    const existingScript = document.querySelector('script[data-seo-schema]');
    existingScript?.remove();
    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-schema", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      document.querySelector('script[data-seo-schema]')?.remove();
      document.querySelector('link[rel="canonical"]')?.remove();
    };
  }, [title, description, canonical, type, image, schema]);

  return null;
};

export default SEOHead;
