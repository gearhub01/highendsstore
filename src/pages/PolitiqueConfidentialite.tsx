import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BackToTop from "@/components/BackToTop";

const PolitiqueConfidentialite = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Politique de confidentialité — GearHub"
      description="Politique de confidentialité de GearHub : données collectées, finalités, bases légales, durées de conservation, droits RGPD et gestion des cookies."
      type="website"
      canonicalPath="/politique-confidentialite"
      appendSiteName={false}
    />
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <article className="prose prose-invert max-w-3xl mx-auto">
          <h1 className="text-3xl font-display font-bold mb-8 text-foreground">
            Politique de <span className="gradient-neon-text">Confidentialité</span>
          </h1>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">1. Responsable de traitement</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Le responsable du traitement des données collectées sur ce site est :
            </p>
            <ul className="text-muted-foreground text-sm leading-relaxed list-disc pl-5 space-y-1">
              <li>Éditeur : <strong className="text-foreground">[À COMPLÉTER : nom de l'éditeur]</strong></li>
              <li>Adresse : <strong className="text-foreground">[À COMPLÉTER : adresse]</strong></li>
              <li>SIRET : <strong className="text-foreground">[À COMPLÉTER : numéro SIRET]</strong></li>
              <li>E-mail de contact : <strong className="text-foreground">[À COMPLÉTER : e-mail de contact]</strong></li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">2. Données collectées</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              <strong className="text-foreground">Mesure d'audience.</strong> Ce site utilise Google Analytics 4 pour analyser la fréquentation : pages consultées, durée de visite, type d'appareil, provenance du trafic. Ces données sont collectées sous forme pseudonymisée.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              <strong className="text-foreground">Cookies d'affiliation.</strong> Lorsque vous cliquez sur un lien partenaire (notamment Amazon), ce partenaire peut déposer un cookie sur votre navigateur afin d'attribuer l'achat au site. GearHub ne dépose pas lui-même ce cookie et n'a pas accès à vos données d'achat chez le partenaire.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Formulaire de contact.</strong> [À COMPLÉTER : données du formulaire de contact, s'il existe — sinon supprimer ce paragraphe]
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">3. Finalités des traitements</h2>
            <ul className="text-muted-foreground text-sm leading-relaxed list-disc pl-5 space-y-1">
              <li>Mesurer l'audience et améliorer les contenus du site ;</li>
              <li>Attribuer les commissions d'affiliation lorsque vous achetez via un lien partenaire ;</li>
              <li>Répondre à vos demandes de contact.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">4. Base légale</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              La mesure d'audience et le dépôt de cookies d'affiliation reposent sur votre <strong className="text-foreground">consentement</strong>, que vous pouvez retirer à tout moment (voir section 10). Les traitements liés au formulaire de contact reposent sur votre demande précontractuelle.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">5. Durées de conservation</h2>
            <ul className="text-muted-foreground text-sm leading-relaxed list-disc pl-5 space-y-1">
              <li>Données de mesure d'audience (Google Analytics 4) : <strong className="text-foreground">[À COMPLÉTER : durée de conservation, ex. 14 mois]</strong> ;</li>
              <li>Cookies d'affiliation : durée fixée par le partenaire (généralement 24 heures pour Amazon) ;</li>
              <li>Demandes de contact : <strong className="text-foreground">[À COMPLÉTER : durée de conservation]</strong>.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">6. Destinataires et sous-traitants</h2>
            <ul className="text-muted-foreground text-sm leading-relaxed list-disc pl-5 space-y-1">
              <li>Google Ireland Limited (Google Analytics 4) pour la mesure d'audience ;</li>
              <li>Amazon EU S.à r.l. pour l'attribution des commissions d'affiliation ;</li>
              <li>Hébergeur du site : <strong className="text-foreground">[À COMPLÉTER : nom de l'hébergeur]</strong>.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">7. Transferts hors Union européenne</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Certains sous-traitants (Google, Amazon) peuvent traiter des données en dehors de l'Union européenne. Ces transferts sont encadrés par les clauses contractuelles types de la Commission européenne et/ou par le Data Privacy Framework UE–États-Unis lorsque le destinataire y est certifié.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">8. Vos droits (RGPD)</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Vous disposez des droits d'accès, de rectification, d'effacement, d'opposition, de portabilité et de limitation du traitement de vos données. Pour les exercer, écrivez à :
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">[À COMPLÉTER : e-mail de contact]</strong>. Une réponse vous sera apportée dans un délai maximum d'un mois.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">9. Réclamation auprès de la CNIL</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07) ou sur <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cnil.fr</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">10. Gestion des cookies</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Vous pouvez modifier à tout moment vos préférences en matière de cookies :
            </p>
            {/* TODO : brancher ce bouton sur le panneau de préférences cookies quand il existera. */}
            <button
              type="button"
              className="text-sm font-semibold text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Rouvrir le panneau de préférences cookies
            </button>
          </section>
        </article>
      </div>
    </main>
    <BackToTop />
    <Footer />
  </div>
);

export default PolitiqueConfidentialite;
