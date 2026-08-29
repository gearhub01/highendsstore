import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BackToTop from "@/components/BackToTop";

const DivulgationAffiliation = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Divulgation d'affiliation — Highends Store"
      description="Divulgation d'affiliation de Highends Store : participation au Programme Partenaires d'Amazon EU, liens affiliés et indépendance éditoriale."
      type="website"
      canonicalPath="/divulgation-affiliation"
      appendSiteName={false}
    />
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <article className="prose prose-invert max-w-3xl mx-auto">
          <h1 className="text-3xl font-display font-bold mb-8 text-foreground">
            Divulgation <span className="gradient-neon-text">d'Affiliation</span>
          </h1>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Programme Partenaires d'Amazon EU</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Highends Store participe au Programme Partenaires d'Amazon EU, un programme d'affiliation conçu pour permettre à des sites de percevoir une rémunération grâce à la création de liens vers Amazon.fr et d'autres sites du groupe Amazon.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Comment fonctionnent les liens affiliés</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Certains liens présents dans nos guides, comparatifs et tests sont des liens affiliés. Si vous cliquez sur l'un d'eux puis effectuez un achat, nous percevons une commission de la part du partenaire.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Cela ne change absolument rien pour vous :</strong> le prix que vous payez est strictement identique, que vous passiez par notre lien ou non. La commission est prélevée sur la marge du vendeur, jamais sur votre panier.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Indépendance éditoriale</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Les commissions d'affiliation n'influencent ni nos notes, ni nos classements, ni nos recommandations. Nos contenus sont rédigés en fonction des tests et de l'expérience de l'équipe, pas en fonction des taux de commission pratiqués par les partenaires.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Un produit médiocre avec une commission élevée recevra une note médiocre. La confiance de nos lecteurs vaut plus que n'importe quelle commission.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Questions</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pour toute question sur notre politique d'affiliation : <strong className="text-foreground">[À COMPLÉTER : e-mail de contact]</strong>.
            </p>
          </section>
        </article>
      </div>
    </main>
    <BackToTop />
    <Footer />
  </div>
);

export default DivulgationAffiliation;
