import { Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Gamepad2 className="h-6 w-6 text-primary" />
              <span className="font-display text-base font-bold tracking-wider">
                GEAR<span className="text-primary">HUB</span>
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Votre conseiller de confiance pour les accessoires PC gaming. Tests indépendants, avis honnêtes.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold tracking-widest uppercase mb-4 text-foreground">Guides</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link to="/guides/best-gaming-keyboards" className="hover:text-primary transition-colors">Claviers Gaming</Link></li>
              <li><Link to="/guides" className="hover:text-primary transition-colors">Souris Gaming</Link></li>
              <li><Link to="/guides" className="hover:text-primary transition-colors">Casques Gaming</Link></li>
              <li><Link to="/guides" className="hover:text-primary transition-colors">Moniteurs Gaming</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold tracking-widest uppercase mb-4 text-foreground">Ressources</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link to="/guides" className="hover:text-primary transition-colors">Tous les Guides</Link></li>
              <li><Link to="/comparaison/gaming-keyboards" className="hover:text-primary transition-colors">Comparaisons</Link></li>
              <li><Link to="/reviews/wooting-80he" className="hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold tracking-widest uppercase mb-4 text-foreground">Légal</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link to="/mentions-legales" className="hover:text-primary transition-colors">Mentions Légales</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-primary transition-colors">Politique Affiliation</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-primary transition-colors">Confidentialité</Link></li>
              <li><a href="mailto:contact@gearhub.fr" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© 2026 GearHub. Tous droits réservés.</span>
          <span>Ce site participe au programme d'affiliation Amazon. <Link to="/mentions-legales" className="underline hover:text-primary">En savoir plus</Link>.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
