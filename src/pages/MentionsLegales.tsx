import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BackToTop from "@/components/BackToTop";

const MentionsLegales = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Mentions Légales & Politique d'Affiliation"
      description="Mentions légales, politique de confidentialité et transparence sur notre programme d'affiliation gaming."
    />
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <article className="prose prose-invert max-w-3xl mx-auto">
          <h1 className="text-3xl font-display font-bold mb-8 text-foreground">
            Mentions Légales & <span className="gradient-neon-text">Politique d'Affiliation</span>
          </h1>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Éditeur du site</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              GearHub est un site indépendant de guides d'achat et de reviews de périphériques gaming. Toutes les opinions exprimées sont les nôtres et sont basées sur des tests réels effectués par notre équipe.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Programme d'Affiliation</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Ce site participe au Programme Partenaires d'Amazon EU et à d'autres programmes d'affiliation. Cela signifie que si vous cliquez sur certains liens et effectuez un achat, nous recevons une commission — <strong className="text-foreground">sans aucun surcoût pour vous</strong>.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Ces commissions nous permettent de financer nos tests, de maintenir le site et de continuer à produire du contenu gratuit et indépendant.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Notre engagement :</strong> Les commissions d'affiliation n'influencent jamais nos notes, classements ou recommandations. Un produit médiocre avec une commission élevée recevra une note médiocre. Nos lecteurs passent avant tout.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Politique de Confidentialité</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Nous respectons votre vie privée. Les seules données collectées sont celles que vous nous fournissez volontairement (ex : inscription newsletter). Nous n'utilisons pas de cookies de tracking tiers.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Si vous vous inscrivez à notre newsletter, votre email est stocké de manière sécurisée et utilisé uniquement pour vous envoyer nos derniers guides et deals. Vous pouvez vous désinscrire à tout moment.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Contact</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pour toute question, suggestion ou demande de partenariat, contactez-nous à : <a href="mailto:contact@gearhub.fr" className="text-primary hover:underline">contact@gearhub.fr</a>
            </p>
          </section>
        </article>
      </div>
    </main>
    <BackToTop />
    <Footer />
  </div>
);

export default MentionsLegales;
