import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

/**
 * URL canonique de production — TOUJOURS en dur.
 * Ne jamais utiliser window.location.origin / href pour le canonical ou og:url :
 * les URLs de prévisualisation se déclareraient canoniques et concurrenceraient
 * le domaine de production.
 */
export const SITE_URL = "https://www.highends.store";
const SITE_NAME = "GearHub";
const PRODUCTION_HOSTS = ["www.highends.store", "highends.store"];
/** Image de partage par défaut (1200 × 630, public/og-default.jpg). */
export const DEFAULT_OG_IMAGE = "/og-default.jpg";

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
  /** Dimensions de l'image de partage (utile si ogImage est fournie). */
  ogImageWidth?: number;
  ogImageHeight?: number;
  noindex?: boolean;
  /** Ajoute " | GearHub" au titre (défaut true). */
  appendSiteName?: boolean;
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
  ogImageWidth,
  ogImageHeight,
  noindex = false,
  appendSiteName = true,
  schema,
}: SEOHeadProps) => {
  const { pathname } = useLocation();
  const fullTitle = appendSiteName ? `${title} | ${SITE_NAME}` : title;
  // Garde-fou : sans chemin explicite, on retombe sur la route courante.
  const path = canonicalPath ?? canonical ?? pathname ?? "/";
  const url = toAbsolute(path);
  const resolvedImage = ogImage ?? image ?? DEFAULT_OG_IMAGE;
  const imageUrl = toAbsolute(resolvedImage);
  const isDefaultImage = resolvedImage === DEFAULT_OG_IMAGE;


  // Seuls les hôtes de production sont indexables ; tout autre hôte
  // (prévisualisation, staging, localhost…) reçoit noindex, nofollow.
  const isNonProductionHost =
    typeof window !== "undefined" &&
    !PRODUCTION_HOSTS.includes(window.location.hostname);

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
      {imageUrl && (isDefaultImage || ogImageWidth) && (
        <meta property="og:image:width" content={String(ogImageWidth ?? 1200)} />
      )}
      {imageUrl && (isDefaultImage || ogImageHeight) && (
        <meta property="og:image:height" content={String(ogImageHeight ?? 630)} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {isNonProductionHost ? (
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
