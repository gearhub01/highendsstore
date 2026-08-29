import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useConsent } from "@/hooks/use-consent";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const CookieConsent = () => {
  const { isBannerOpen, consent, hasChoice, acceptAll, rejectAll, savePreferences, closeBanner } = useConsent();
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [affiliate, setAffiliate] = useState(false);

  useEffect(() => {
    if (isBannerOpen) {
      setDetails(false);
      // aucune case pré-cochée : on ne reprend l'état existant que si un choix a déjà été fait
      setAnalytics(hasChoice ? consent.analytics : false);
      setAffiliate(hasChoice ? consent.affiliate : false);
    }
  }, [isBannerOpen, hasChoice, consent.analytics, consent.affiliate]);

  if (!isBannerOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Gestion des cookies"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-background/95 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-5">
        <h2 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
          Vos préférences cookies
        </h2>
        <p className="mt-2 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          Nous utilisons des cookies pour mesurer l'audience du site et pour le suivi des liens d'affiliation. Vous
          pouvez accepter, refuser ou choisir par catégorie. Votre choix est conservé 6 mois maximum.{" "}
          <Link to="/politique-confidentialite" className="underline hover:text-primary">
            Politique de confidentialité
          </Link>
        </p>

        {details && (
          <div className="mt-4 space-y-3 rounded-lg border border-border p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-foreground">Nécessaires</p>
                <p className="text-xs text-muted-foreground">
                  Indispensables au fonctionnement du site (préférences de langue, thème, consentement). Toujours actifs.
                </p>
              </div>
              <Switch checked disabled aria-label="Cookies nécessaires (toujours actifs)" />
            </div>
            <div className="flex items-start justify-between gap-4 border-t border-border pt-3">
              <div>
                <p className="text-sm font-medium text-foreground">Mesure d'audience</p>
                <p className="text-xs text-muted-foreground">Google Analytics 4 : statistiques de visite anonymisées.</p>
              </div>
              <Switch checked={analytics} onCheckedChange={setAnalytics} aria-label="Mesure d'audience" />
            </div>
            <div className="flex items-start justify-between gap-4 border-t border-border pt-3">
              <div>
                <p className="text-sm font-medium text-foreground">Affiliation</p>
                <p className="text-xs text-muted-foreground">
                  Cookies Amazon permettant d'attribuer un achat effectué via nos liens partenaires.
                </p>
              </div>
              <Switch checked={affiliate} onCheckedChange={setAffiliate} aria-label="Cookies d'affiliation" />
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
          <Button onClick={acceptAll} className="w-full sm:w-auto sm:min-w-[160px]">
            Tout accepter
          </Button>
          <Button onClick={rejectAll} className="w-full sm:w-auto sm:min-w-[160px]">
            Tout refuser
          </Button>
          {details ? (
            <Button
              variant="outline"
              onClick={() => savePreferences({ analytics, affiliate })}
              className="w-full sm:w-auto sm:min-w-[160px]"
            >
              Enregistrer mes choix
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setDetails(true)} className="w-full sm:w-auto sm:min-w-[160px]">
              Personnaliser
            </Button>
          )}
          {hasChoice && (
            <Button variant="ghost" onClick={closeBanner} className="w-full sm:ml-auto sm:w-auto">
              Fermer
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
