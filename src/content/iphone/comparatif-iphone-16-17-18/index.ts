import type { ArticleEntry } from "../types";
import { article as fr } from "./fr";

// La traduction anglaise antérieure au keynote est volontairement désactivée :
// les autres langues reçoivent la version française officielle à jour.
export const entry: ArticleEntry = { slug: fr.slug, fr };

export default entry;
