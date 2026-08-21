import { supabase } from "@/integrations/supabase/client";

/**
 * Suivi analytics des clics sur les boutons d'affiliation (PriceCTA).
 *
 * Chaque clic est enregistré dans la table `cta_clicks` avec :
 * - l'article concerné (article_slug)
 * - la section de l'article (section_id) ou "hub-card" depuis la page hub
 * - le modèle iPhone (pro / pro_max)
 *
 * L'envoi est volontairement "fire and forget" : il ne bloque jamais
 * l'ouverture du lien Amazon, et une erreur réseau est silencieuse.
 */
export interface CtaClickEvent {
  articleSlug: string;
  sectionId?: string;
  model: "pro" | "pro_max";
  productName?: string;
  destinationUrl?: string;
  /** Où se trouve le bouton : carte du hub, en-tête ou corps d'article. */
  placement?: "hub-card" | "article-section" | "hub-header";
  collection?: string;
}

export function trackCtaClick(event: CtaClickEvent) {
  try {
    void supabase
      .from("cta_clicks")
      .insert({
        collection: event.collection ?? "iphone-18-pro",
        article_slug: event.articleSlug,
        section_id: event.sectionId ?? null,
        model: event.model,
        product_name: event.productName ?? null,
        destination_url: event.destinationUrl ?? null,
        placement: event.placement ?? "article-section",
      })
      .then(({ error }) => {
        if (error) console.warn("[analytics] cta_click non enregistré", error.message);
      });
  } catch {
    // Analytics ne doit jamais casser la navigation.
  }
}
