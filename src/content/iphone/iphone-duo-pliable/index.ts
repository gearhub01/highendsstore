import type { ArticleEntry } from "../types";
import { article as fr } from "./fr";
// Pas encore de version anglaise : la page servira le français avec un bandeau.
// Pour en ajouter une : créer `en.ts` puis l'importer et la déclarer ci-dessous.

export const entry: ArticleEntry = { slug: fr.slug, fr };

export default entry;
