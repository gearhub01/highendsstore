import type { ArticleEntry } from "../types";
import { article as fr } from "./fr";
import { article as en } from "./en";

export const entry: ArticleEntry = { slug: fr.slug, fr, en };

export default entry;
