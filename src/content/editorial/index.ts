import polling from "./polling-rate-2026.html?raw";
import souris from "./meilleure-souris-gaming-fps.html?raw";
import hz from "./144hz-vs-240hz.html?raw";
import lube from "./lubrifier-switches.html?raw";
import claviers from "./claviers-gaming-comparatif.html?raw";
import ces from "./ces-2026-neuf-mois-apres.html?raw";

/** Articles éditoriaux fournis en HTML (source unique : les fichiers .html du dossier). */
export interface EditorialArticle {
  path: string;
  section: { label: string; href: string };
  seoTitle: string;
  seoDescription: string;
  date: string;
  raw: string;
}

export const EDITORIAL_ARTICLES: EditorialArticle[] = [
  {
    path: "/blog/ces-2026-neuf-mois-apres",
    section: { label: "Blog", href: "/blog" },
    seoTitle: "CES 2026, neuf mois après : qu'est-ce qui est sorti ?",
    seoDescription: "Le bilan que personne ne fait : sur toutes les annonces de janvier, ce qui est livré, ce qui n'existe qu'ailleurs, et ce qui reste un prototype.",
    date: "2026-09-24",
    raw: ces,
  },
  {
    path: "/blog/polling-rate-2026",
    section: { label: "Blog", href: "/blog" },
    seoTitle: "Polling rate 2026 : le 8000 Hz sert-il à quelque chose ?",
    seoDescription:
      "1000 à 8000 Hz, c'est 0,875 ms gagnée sur un temps de réaction de 200 ms. Ce que le chiffre cache, et le vrai seuil utile.",
    date: "2026-09-24",
    raw: polling,
  },
  {
    path: "/guides/meilleure-souris-gaming-fps",
    section: { label: "Guides", href: "/guides" },
    seoTitle: "Meilleure souris gaming FPS 2026 : le guide",
    seoDescription:
      "Ce que jouent réellement 940 pros de CS2, et pourquoi la souris la plus utilisée du circuit n'est pas la plus légère.",
    date: "2026-09-24",
    raw: souris,
  },
  {
    path: "/comparaison/144hz-vs-240hz",
    section: { label: "Guides", href: "/guides" },
    seoTitle: "144Hz vs 240Hz : la différence vaut-elle le prix ?",
    seoDescription:
      "2,8 ms d'écart, soit 1 % de votre temps de réaction. Les chiffres réels, les études NVIDIA, et le piège du framerate.",
    date: "2026-09-24",
    raw: hz,
  },
  {
    path: "/blog/lubrifier-switches",
    section: { label: "Blog", href: "/blog" },
    seoTitle: "Lubrifier ses switches : tutoriel complet et pièges",
    seoDescription:
      "Matériel, lubrifiant, pas à pas et les trois cas où il ne faut surtout pas lubrifier ses switches. Le tutoriel honnête.",
    date: "2026-09-24",
    raw: lube,
  },
  {
    path: "/comparaison/gaming-keyboards",
    section: { label: "Guides", href: "/guides" },
    seoTitle: "SteelSeries vs Logitech vs Corsair : comparatif AZERTY",
    seoDescription:
      "Apex Pro TKL Gen 3, G Pro X TKL Rapid, K70 Pro TKL : trois claviers magnétiques AZERTY comparés. Sonorité, logiciel et le bon choix selon votre usage.",
    date: "2026-09-24",
    raw: claviers,
  },
];

/** Découpe le HTML : titre, corps nettoyé, JSON-LD. */
export function parseEditorial(raw: string) {
  const schemas: Record<string, unknown>[] = [];
  let body = raw.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, (_, json) => {
    try { schemas.push(JSON.parse(json)); } catch { /* ignore */ }
    return "";
  });
  body = body.replace(/<!--[\s\S]*?-->/g, "");
  const h1 = body.match(/<h1>([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g, "") ?? "";
  body = body.replace(/<h1>[\s\S]*?<\/h1>/, "");
  body = body.replace(
    /<a href="(https?:\/\/[^"]+)"/g,
    '<a href="$1" target="_blank" rel="sponsored nofollow noopener noreferrer"',
  );
  return { title: h1, html: body.trim(), schemas };
}
