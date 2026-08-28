import { Helmet } from "react-helmet-async";

/**
 * URL canonique de production — TOUJOURS en dur.
 * Ne jamais utiliser window.location.origin / href pour le canonical ou og:url :
 * les URLs de prévisualisation se déclareraient canoniques et concurrenceraient
 * le domaine de production.
 */
export const SITE_URL = "https://www.highends.store";
const SITE_NAME = "GearHub";

interface SEOHeadProps {
  title: string;
  description: string;
  /** Chemin de la page, commence par "/" (ex. "/blog"). */
  canonicalPath?: string;
  /** Alias historique de canonicalPath (compatibilité avec les pages existantes). */
  canonical?: string;
  type?: "website" | "article";
  /** URL d'image (absolue ou chemin relatif au site). */
  ogImage?: string;
  /** Alias historique de ogImage. */
  image?: string;
  noindex?: boolean;
  /** JSON-LD optionnel (un objet ou une liste d'objets). */
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

const toAbsolute = (value?: string) => {
  if (!value) return undefined;
  return value.startsWith("http") ? value : `${SITE_URL}${value.startsWith("/") ? "" : "/"}${value}`;
};

const SEOHead = ({
  title,
  description,
  canonicalPath,
  canonical,
  type = "website",
  ogImage,
  image,
  noindex = false,
  schema,
}: SEOHeadProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const path = canonicalPath ?? canonical;
  const url = toAbsolute(path);
  const imageUrl = toAbsolute(ogImage ?? image);

  // Les URLs de prévisualisation ne doivent pas être indexées.
  const isPreviewHost =
    typeof window !== "undefined" && window.location.hostname !== "www.highends.store";

  const schemaList = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={url} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="fr_FR" />
      {url && <meta property="og:url" content={url} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {isPreviewHost ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : null}

      {schemaList.map((entry, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
