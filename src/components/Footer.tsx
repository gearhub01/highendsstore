import { Gamepad2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Gamepad2 className="h-6 w-6 text-primary" />
              <span className="font-display text-base font-bold tracking-wider">
                GEAR<span className="text-primary">HUB</span>
              </span>
            </a>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Votre conseiller de confiance pour les accessoires PC gaming. Tests indépendants, avis honnêtes.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold tracking-widest uppercase mb-4 text-foreground">Guides</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Claviers Gaming</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Souris Gaming</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Casques Gaming</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Moniteurs Gaming</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold tracking-widest uppercase mb-4 text-foreground">Ressources</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Glossaire Gaming</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Comment Choisir</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Setup Guides</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold tracking-widest uppercase mb-4 text-foreground">Légal</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">À Propos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Politique Affiliation</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© 2026 GearHub. Tous droits réservés.</span>
          <span>Ce site participe au programme d'affiliation Amazon.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
