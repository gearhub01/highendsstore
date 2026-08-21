// Généré avant `vite dev` et `vite build` (hooks predev/prebuild) → public/sitemap.xml.
// Les pages de la collection iPhone 18 Pro n'y figurent que si la collection
// est active (voir src/config/iphone-collection.ts).

import { writeFileSync } from "fs"
import { resolve } from "path"
import {
  COLLECTION_ARTICLES,
  IPHONE_BASE_PATH,
  isCollectionVisible,
} from "../src/config/iphone-collection"

const BASE_URL = "https://highendsstore.lovable.app"

interface SitemapEntry {
  path: string
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: string
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/guides", changefreq: "weekly", priority: "0.9" },
  { path: "/guides/best-gaming-keyboards", changefreq: "monthly", priority: "0.8" },
  { path: "/comparaison/gaming-keyboards", changefreq: "monthly", priority: "0.8" },
  { path: "/reviews", changefreq: "weekly", priority: "0.8" },
  { path: "/reviews/wooting-80he", changefreq: "monthly", priority: "0.7" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/mentions-legales", changefreq: "yearly", priority: "0.3" },
]

// Collection temporaire : masquée d'un coup via le flag de config.
if (isCollectionVisible()) {
  entries.push({ path: IPHONE_BASE_PATH, changefreq: "daily", priority: "0.9" })
  for (const article of COLLECTION_ARTICLES) {
    entries.push({
      path: `${IPHONE_BASE_PATH}/${article.slug}`,
      changefreq: "weekly",
      priority: "0.7",
    })
  }
}

function generateSitemap(list: SitemapEntry[]) {
  const urls = list.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
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

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries))
console.log(`sitemap.xml written (${entries.length} entries)`)
