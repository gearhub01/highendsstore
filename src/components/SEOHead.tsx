import { useEffect } from "react";

export const SITE_URL = "https://highendsstore.lovable.app";

interface SEOHeadProps {
  title: string;
  description: string;
  /** Path (e.g. "/blog") or absolute URL. Used for canonical + og:url. */
  canonical?: string;
  type?: "website" | "article";
  image?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

const toAbsolute = (value?: string) => {
  if (!value) return undefined;
  return value.startsWith("http") ? value : `${SITE_URL}${value.startsWith("/") ? "" : "/"}${value}`;
};

const SEOHead = ({ title, description, canonical, type = "website", image, schema }: SEOHeadProps) => {
  useEffect(() => {
    const fullTitle = `${title} | GearHub`;
    document.title = fullTitle;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const url = toAbsolute(canonical);
    const imageUrl = toAbsolute(image);

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", type, "property");
    if (url) setMeta("og:url", url, "property");
    if (imageUrl) setMeta("og:image", imageUrl, "property");

    setMeta("twitter:card", imageUrl ? "summary_large_image" : "summary");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    if (imageUrl) setMeta("twitter:image", imageUrl);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (url) {
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = url;
    } else {
      link?.remove();
    }

    // JSON-LD
    document.querySelectorAll("script[data-seo-schema]").forEach((s) => s.remove());
    if (schema) {
      const list = Array.isArray(schema) ? schema : [schema];
      list.forEach((entry) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-schema", "true");
        script.textContent = JSON.stringify(entry);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll("script[data-seo-schema]").forEach((s) => s.remove());
      document.querySelector('link[rel="canonical"]')?.remove();
    };
  }, [title, description, canonical, type, image, schema]);

  return null;
};

export default SEOHead;
