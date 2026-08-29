/**
 * Assemble les locales disponibles pour cet article.
 * Supprime la ligne `en` tant que la traduction anglaise n'existe pas.
 */
import type { ArticleEntry } from "../types";
import { article as fr } from "./fr";
import { article as en } from "./en";

export const entry: ArticleEntry = { slug: fr.slug, fr, en };

export default entry;
