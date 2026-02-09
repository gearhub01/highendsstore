import { useState, useRef, useEffect } from "react";
import { Menu, X, Search, Gamepad2, ChevronDown, Keyboard, Mouse, Headphones, Monitor, Video, Sun, Moon, BookOpen, Star, GitCompareArrows, Newspaper, TrendingUp, Cpu, Wrench } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Link } from "react-router-dom";

const categories = [
  { icon: Keyboard, label: "Claviers", href: "/categories/claviers", count: "15 guides" },
  { icon: Mouse, label: "Souris", href: "/categories/souris", count: "12 guides" },
  { icon: Headphones, label: "Casques", href: "/categories/casques", count: "10 guides" },
  { icon: Monitor, label: "Moniteurs", href: "/categories/moniteurs", count: "8 guides" },
  { icon: Video, label: "Streaming", href: "/categories/streaming", count: "6 guides" },
];

const guides = [
  { icon: Keyboard, label: "Meilleurs Claviers Gaming 2026", href: "/guides/best-gaming-keyboards", tag: "Top 5" },
  { icon: Mouse, label: "Meilleurs Souris FPS 2026", href: "/guides/best-gaming-mice", tag: "Bientôt" },
  { icon: Headphones, label: "Meilleurs Casques Gaming 2026", href: "/guides/best-gaming-headsets", tag: "Bientôt" },
  { icon: Monitor, label: "Meilleurs Moniteurs 4K 2026", href: "/guides/best-4k-monitors", tag: "Bientôt" },
];

const comparisons = [
  { icon: GitCompareArrows, label: "Claviers Gaming — Wooting vs Razer vs Keychron", href: "/comparaison/gaming-keyboards" },
];

const reviews = [
  { icon: Star, label: "Test du Wooting 80HE", href: "/reviews/wooting-80he", rating: "9.6" },
];

const blogPosts = [
  { icon: TrendingUp, label: "Hall Effect vs Mécanique : le guide ultime", href: "/#blog", tag: "Tendance" },
  { icon: Cpu, label: "Comment choisir son polling rate en 2026", href: "/#blog", tag: "Tech" },
  { icon: Wrench, label: "Modding : lubrifier ses switches comme un pro", href: "/#blog", tag: "Tuto" },
  { icon: Newspaper, label: "CES 2026 : les meilleurs périphériques annoncés", href: "/#blog", tag: "Actu" },
];

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Comparaisons", href: "/comparaison/gaming-keyboards" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCatOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Gamepad2 className="h-7 w-7 text-primary group-hover:text-glow transition-all" />
            <span className="font-display text-lg font-bold tracking-wider text-foreground">
              GEAR<span className="text-primary">HUB</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {/* Categories Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setCatOpen(!catOpen)}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
              >
                Catégories
                <ChevronDown className={`h-4 w-4 transition-transform ${catOpen ? "rotate-180" : ""}`} />
              </button>

              {catOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-lg border border-border bg-popover shadow-xl z-50 overflow-hidden">
                  <div className="p-2">
                    {categories.map((cat) => (
                      <Link
                        key={cat.label}
                        to={cat.href}
                        onClick={() => setCatOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-secondary transition-colors group"
                      >
                        <cat.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                        <div className="flex-1">
                          <span className="text-sm font-medium text-foreground">{cat.label}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{cat.count}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Search + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Changer de thème"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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
            {/* Mobile Categories */}
            <div className="space-y-1">
              <button
                onClick={() => setCatOpen(!catOpen)}
                className="flex items-center gap-1 w-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
              >
                Catégories
                <ChevronDown className={`h-4 w-4 transition-transform ${catOpen ? "rotate-180" : ""}`} />
              </button>
              {catOpen && (
                <div className="pl-4 space-y-1 pt-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.label}
                      to={cat.href}
                      className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => { setIsOpen(false); setCatOpen(false); }}
                    >
                      <cat.icon className="h-4 w-4 text-primary" />
                      {cat.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
