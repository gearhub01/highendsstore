import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BackToTop from "@/components/BackToTop";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-display font-bold text-foreground mb-3">{children}</h2>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{children}</p>
);

const APropos = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="À propos de Highends Store"
      description="Qui sommes-nous ? Highends Store publie des guides d'achat, tests et comparatifs indépendants de matériel gaming, de setup PC et d'accessoires iPhone."
      type="website"
      canonicalPath="/a-propos"
    />
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-display font-bold mb-8 text-foreground">
            À propos de <span className="gradient-neon-text">Highends Store</span>
          </h1>

          <section className="mb-10">
            <H2>Notre mission</H2>
            <P>
              Highends Store aide les joueurs, streamers et passionnés de setup à choisir le bon matériel sans se perdre dans les fiches techniques et le marketing. Claviers, souris, écrans, casques, accessoires de streaming et, plus récemment, l'iPhone comme outil de création : nous expliquons ce qui compte vraiment, pour quel usage, et ce qui relève du simple argument commercial.
            </P>
          </section>

          <section className="mb-10">
            <H2>Comment nous travaillons</H2>
            <P>
              Chaque guide part des besoins concrets d'un usage : jeu compétitif, création de contenu, bureautique exigeante. Nous croisons les spécifications officielles des fabricants, nos propres essais et les retours de la communauté. Quand une information n'est pas confirmée, nous le disons clairement plutôt que de la présenter comme un fait.
            </P>
            <P>
              Nos contenus sont mis à jour lorsque de nouveaux produits sortent ou que des données officielles évoluent. La date de dernière mise à jour est indiquée sur les articles concernés.
            </P>
          </section>

          <section className="mb-10">
            <H2>Indépendance et transparence</H2>
            <P>
              Le site est financé par l'affiliation : lorsque vous achetez via certains liens, notamment Amazon, nous pouvons toucher une commission, sans surcoût pour vous. Cette rémunération n'influence ni nos classements ni nos verdicts. Aucun fabricant ne relit ou ne valide nos articles avant publication.
            </P>
            <P>
              Nous n'affichons pas de prix sur le site : ils changent trop souvent. Les boutons vers les marchands vous permettent de consulter le tarif à jour au moment de votre achat. Tous les détails sont dans notre{" "}
              <Link to="/divulgation-affiliation" className="text-primary hover:underline">divulgation d'affiliation</Link>.
            </P>
          </section>

          <section className="mb-10">
            <H2>Nous contacter</H2>
            <P>
              Une question, une correction, une suggestion de test ? Écrivez-nous via la{" "}
              <Link to="/contact" className="text-primary hover:underline">page contact</Link> ou à{" "}
              <a href="mailto:contact@highends.store" className="text-primary hover:underline">contact@highends.store</a>.
            </P>
          </section>
        </article>
      </div>
    </main>
    <Footer />
    <BackToTop />
  </div>
);

export default APropos;
