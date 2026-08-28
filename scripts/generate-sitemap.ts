// Généré avant `vite dev` et `vite build` (hooks predev/prebuild) → public/sitemap.xml.
// Les pages de la collection iPhone 18 Pro n'y figurent que si la collection
// est active (voir src/config/iphone-collection.ts).
// Les articles de blog sont récupérés en base au moment du build (uniquement
// ceux dont published = true). Si la base n'est pas joignable, aucune URL
// /blog/<slug> n'est écrite : on n'invente jamais de slug.

import { writeFileSync, readFileSync, existsSync } from "fs"
import { resolve } from "path"
import {
  COLLECTION_ARTICLES,
  IPHONE_BASE_PATH,
  isCollectionVisible,
} from "../src/config/iphone-collection"
import { STATIC_PAGES } from "../src/content/static-pages"

const SITE_URL = "https://www.highends.store"

/** Slugs de test / démo exclus dans tous les cas. */
const EXCLUDED_SLUG_PATTERNS = [/test/i, /demo/i]
/** Aucune route d'administration ni catch-all dans le sitemap. */
const EXCLUDED_PATH_PATTERNS = [/^\/admin(\/|$)/, /\*/, /:/]

interface SitemapEntry {
  path: string
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: string
  /** Date de dernière modification réelle de la page (AAAA-MM-JJ). */
  lastmod?: string
}

/** Pages de contenu statiques : toujours présentes. */
const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  // Listings : /guides et /reviews listent toujours les pages statiques.
  { path: "/guides", changefreq: "weekly", priority: "0.9" },
  { path: "/reviews", changefreq: "weekly", priority: "0.8" },
  ...STATIC_PAGES.map((p) => ({
    path: p.href,
    changefreq: "monthly" as const,
    priority: p.category === "review" ? "0.7" : "0.8",
    lastmod: p.updatedAt,
  })),
  { path: "/mentions-legales", changefreq: "yearly", priority: "0.3" },
]


// Collection temporaire : masquée d'un coup via le flag de config.
if (isCollectionVisible()) {
  entries.push({ path: IPHONE_BASE_PATH, changefreq: "daily", priority: "0.9" })
  for (const article of COLLECTION_ARTICLES) {
    entries.push({
      path: `${IPHONE_BASE_PATH}/${article.slug}`,
      changefreq: "weekly",
      priority: "0.8",
      lastmod: toDate(article.updatedAt),
    })
  }
}

function toDate(value?: string | null) {
  if (!value) return undefined
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10)
}

function readEnv(name: string) {
  if (process.env[name]) return process.env[name]
  const envPath = resolve(".env")
  if (!existsSync(envPath)) return undefined
  const line = readFileSync(envPath, "utf8")
    .split("\n")
    .find((l) => l.trim().startsWith(`${name}=`))
  return line?.slice(line.indexOf("=") + 1).trim().replace(/^["']|["']$/g, "")
}

/** Articles de blog publiés, lus en base au moment du build. */
async function fetchPublishedArticles(): Promise<SitemapEntry[]> {
  const url = readEnv("VITE_SUPABASE_URL")
  const key = readEnv("VITE_SUPABASE_PUBLISHABLE_KEY")
  if (!url || !key) {
    console.warn("sitemap: backend non configuré → aucune URL /blog/<slug> générée")
    return []
  }
  try {
    const res = await fetch(
      `${url}/rest/v1/articles?select=slug,updated_at,date&published=eq.true`,
      { headers: { apikey: key, Authorization: `Bearer ${key}` } },
    )
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const rows = (await res.json()) as { slug: string; updated_at?: string; date?: string }[]
    return rows
      .filter((r) => r.slug && !EXCLUDED_SLUG_PATTERNS.some((p) => p.test(r.slug)))
      .map((r) => ({
        path: `/blog/${r.slug}`,
        changefreq: "monthly" as const,
        priority: "0.7",
        lastmod: toDate(r.updated_at ?? r.date),
      }))
  } catch (err) {
    console.warn(`sitemap: base injoignable (${(err as Error).message}) → aucune URL /blog/<slug>`)
    return []
  }
}

function generateSitemap(list: SitemapEntry[]) {
  const urls = list.map((e) =>
    [
      `  <url>`,
      `    <loc>${SITE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  )

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n")
}

const blogEntries = await fetchPublishedArticles()

// /guides et /reviews listent désormais toujours les pages statiques : elles
// sont incluses en dur plus haut. Seul /blog reste conditionnel (rien à lister).
const listingEntries: SitemapEntry[] = []
if (blogEntries.length > 0) {
  listingEntries.push({ path: "/blog", changefreq: "weekly", priority: "0.8" })
}

const deduped = new Map<string, SitemapEntry>()
for (const entry of [...entries, ...listingEntries, ...blogEntries]) {
  // Une URL peut être déclarée deux fois (ex. un comparatif iPhone présent à la
  // fois dans STATIC_PAGES et dans COLLECTION_ARTICLES) : on ne l'écrit qu'une fois.
  if (!deduped.has(entry.path)) deduped.set(entry.path, entry)
}

const all = [...deduped.values()].filter(
  (e) => !EXCLUDED_PATH_PATTERNS.some((p) => p.test(e.path)),
)


writeFileSync(resolve("public/sitemap.xml"), generateSitemap(all))
console.log(`sitemap.xml written (${all.length} entries)`)
