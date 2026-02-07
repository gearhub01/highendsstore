import { useState } from "react";
import { Menu, X, Search, Gamepad2 } from "lucide-react";

const navItems = [
  { label: "Accueil", href: "#" },
  { label: "Guides", href: "#guides" },
  { label: "Reviews", href: "#reviews" },
  { label: "Comparaisons", href: "#comparisons" },
  { label: "Ressources", href: "#resources" },
  { label: "Blog", href: "#blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Gamepad2 className="h-7 w-7 text-primary group-hover:text-glow transition-all" />
            <span className="font-display text-lg font-bold tracking-wider text-foreground">
              GEAR<span className="text-primary">HUB</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Search + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2 pt-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
