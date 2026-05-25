import { useState, useRef, useEffect } from "react";
import { Menu, X, Search, Gamepad2, ChevronDown, Keyboard, Mouse, Headphones, Monitor, Video, Sun, Moon, BookOpen, Star, GitCompareArrows, Newspaper, TrendingUp, Cpu, Wrench } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SearchCommand from "@/components/SearchCommand";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();

  const categories = [
    { icon: Keyboard, label: t("cats.keyboards"), href: "/guides/best-gaming-keyboards", count: t("nav.countGuides", { count: 15 }) },
    { icon: Mouse, label: t("cats.mice"), href: "/guides", count: t("nav.countGuides", { count: 12 }) },
    { icon: Headphones, label: t("cats.headsets"), href: "/guides", count: t("nav.countGuides", { count: 10 }) },
    { icon: Monitor, label: t("cats.monitors"), href: "/guides", count: t("nav.countGuides", { count: 8 }) },
    { icon: Video, label: t("cats.streaming"), href: "/guides", count: t("nav.countGuides", { count: 6 }) },
  ];

  const guides = [
    { icon: Keyboard, label: "Meilleurs Claviers Gaming 2026", href: "/guides/best-gaming-keyboards", tag: t("nav.top5") },
    { icon: Mouse, label: "Meilleures Souris FPS 2026", href: "/guides", tag: t("nav.soon") },
    { icon: Headphones, label: "Meilleurs Casques Gaming 2026", href: "/guides", tag: t("nav.soon") },
    { icon: Monitor, label: "Meilleurs Moniteurs 4K 2026", href: "/guides", tag: t("nav.soon") },
  ];

  const comparisons = [
    { icon: GitCompareArrows, label: "Claviers Gaming — Wooting vs Razer vs Keychron", href: "/comparaison/gaming-keyboards" },
  ];

  const reviews = [
    { icon: Star, label: "Wooting 80HE", href: "/reviews/wooting-80he", rating: "9.6" },
  ];

  const blogPosts = [
    { icon: TrendingUp, label: "Hall Effect vs Mécanique", href: "/blog/hall-effect-vs-mecanique", tag: "Tendance" },
    { icon: Cpu, label: "Polling rate en 2026", href: "/blog/choisir-polling-rate-2026", tag: "Tech" },
    { icon: Wrench, label: "Lubrifier ses switches", href: "/blog/lubrifier-switches-pro", tag: "Tuto" },
    { icon: Newspaper, label: "CES 2026", href: "/blog/ces-2026-meilleurs-peripheriques", tag: "Actu" },
  ];

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.comparisons"), href: "/comparaison/gaming-keyboards" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const guidesRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setCatOpen(false);
      if (guidesRef.current && !guidesRef.current.contains(e.target as Node)) setGuidesOpen(false);
      if (blogRef.current && !blogRef.current.contains(e.target as Node)) setBlogOpen(false);
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
          <div className="hidden md:flex items-center gap-7">
            {/* Categories Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => { setCatOpen(!catOpen); setGuidesOpen(false); setBlogOpen(false); }}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
              >
                {t("nav.categories")}
                <ChevronDown className={`h-4 w-4 transition-transform ${catOpen ? "rotate-180" : ""}`} />
              </button>
              {catOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-lg border border-border bg-popover shadow-xl z-50 overflow-hidden">
                  <div className="p-2">
                    {categories.map((cat) => (
                      <Link key={cat.label} to={cat.href} onClick={() => setCatOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-secondary transition-colors group">
                        <cat.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                        <span className="flex-1 text-sm font-medium text-foreground">{cat.label}</span>
                        <span className="text-xs text-muted-foreground">{cat.count}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Guides Dropdown */}
            <div ref={guidesRef} className="relative">
              <button
                onClick={() => { setGuidesOpen(!guidesOpen); setCatOpen(false); setBlogOpen(false); }}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
              >
                {t("nav.guides")}
                <ChevronDown className={`h-4 w-4 transition-transform ${guidesOpen ? "rotate-180" : ""}`} />
              </button>
              {guidesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 rounded-lg border border-border bg-popover shadow-xl z-50 overflow-hidden">
                  <div className="p-1.5">
                    <p className="px-3 py-1.5 text-[10px] font-display uppercase tracking-widest text-primary">{t("nav.buyingGuides")}</p>
                    {guides.map((g) => (
                      <Link key={g.label} to={g.href} onClick={() => setGuidesOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-secondary transition-colors group">
                        <g.icon className="h-4 w-4 text-primary" />
                        <span className="flex-1 text-sm font-medium text-foreground">{g.label}</span>
                        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${g.tag === "Bientôt" ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary"}`}>{g.tag}</span>
                      </Link>
                    ))}
                    <div className="border-t border-border mt-1.5 pt-1.5">
                      <p className="px-3 py-1.5 text-[10px] font-display uppercase tracking-widest text-primary">{t("nav.comparisons")}</p>
                      {comparisons.map((c) => (
                        <Link key={c.label} to={c.href} onClick={() => setGuidesOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-secondary transition-colors group">
                          <c.icon className="h-4 w-4 text-primary" />
                          <span className="flex-1 text-sm font-medium text-foreground">{c.label}</span>
                        </Link>
                      ))}
                      <p className="px-3 py-1.5 text-[10px] font-display uppercase tracking-widest text-primary mt-1">{t("nav.reviews")}</p>
                      {reviews.map((r) => (
                        <Link key={r.label} to={r.href} onClick={() => setGuidesOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-secondary transition-colors group">
                          <r.icon className="h-4 w-4 text-primary" />
                          <span className="flex-1 text-sm font-medium text-foreground">{r.label}</span>
                          <span className="flex items-center gap-0.5 text-xs font-bold text-primary"><Star className="h-3 w-3 fill-primary" />{r.rating}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-border mt-1.5 pt-1.5">
                      <Link to="/guides" onClick={() => setGuidesOpen(false)}
                        className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-md hover:bg-secondary transition-colors text-sm font-semibold text-primary">
                        {t("nav.viewAllGuides")}
                        <ChevronDown className="h-3.5 w-3.5 -rotate-90" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div ref={blogRef} className="relative">
              <button
                onClick={() => { setBlogOpen(!blogOpen); setCatOpen(false); setGuidesOpen(false); }}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
              >
                {t("nav.blog")}
                <ChevronDown className={`h-4 w-4 transition-transform ${blogOpen ? "rotate-180" : ""}`} />
              </button>
              {blogOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 rounded-lg border border-border bg-popover shadow-xl z-50 overflow-hidden">
                  <div className="p-1.5">
                    <p className="px-3 py-1.5 text-[10px] font-display uppercase tracking-widest text-primary">{t("nav.recentArticles")}</p>
                    {blogPosts.map((post) => (
                      <Link key={post.label} to={post.href} onClick={() => setBlogOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-secondary transition-colors group">
                        <post.icon className="h-4 w-4 text-primary" />
                        <span className="flex-1 text-sm font-medium text-foreground">{post.label}</span>
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-primary/10 text-primary">{post.tag}</span>
                      </Link>
                    ))}
                    <div className="border-t border-border mt-1.5 pt-1.5">
                      <Link to="/blog" onClick={() => setBlogOpen(false)}
                        className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-md hover:bg-secondary transition-colors text-sm font-semibold text-primary">
                        {t("nav.viewAllArticles")}
                        <ChevronDown className="h-3.5 w-3.5 -rotate-90" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link key={item.label} to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Search + Theme + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
            <button onClick={() => setSearchOpen(true)} className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label={t("nav.search") + " (Ctrl+K)"}>
              <Search className="h-5 w-5" />
            </button>
            <LanguageSwitcher />
            <button onClick={toggleTheme} className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label={t("nav.theme")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2 pt-4 space-y-3">
            {/* Mobile Categories */}
            <MobileAccordion label={t("nav.categories")} open={catOpen} onToggle={() => setCatOpen(!catOpen)}>
              {categories.map((cat) => (
                <Link key={cat.label} to={cat.href}
                  className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => { setIsOpen(false); setCatOpen(false); }}>
                  <cat.icon className="h-4 w-4 text-primary" />{cat.label}
                </Link>
              ))}
            </MobileAccordion>

            {/* Mobile Guides */}
            <MobileAccordion label={t("nav.guides")} open={guidesOpen} onToggle={() => setGuidesOpen(!guidesOpen)}>
              {guides.map((g) => (
                <Link key={g.label} to={g.href}
                  className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => { setIsOpen(false); setGuidesOpen(false); }}>
                  <BookOpen className="h-4 w-4 text-primary" />{g.label}
                </Link>
              ))}
              {reviews.map((r) => (
                <Link key={r.label} to={r.href}
                  className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => { setIsOpen(false); setGuidesOpen(false); }}>
                  <Star className="h-4 w-4 text-primary" />{r.label}
                </Link>
              ))}
            </MobileAccordion>

            {/* Mobile Blog */}
            <MobileAccordion label={t("nav.blog")} open={blogOpen} onToggle={() => setBlogOpen(!blogOpen)}>
              {blogPosts.map((post) => (
                <Link key={post.label} to={post.href}
                  className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => { setIsOpen(false); setBlogOpen(false); }}>
                  <post.icon className="h-4 w-4 text-primary" />{post.label}
                </Link>
              ))}
            </MobileAccordion>

            {navItems.map((item) => (
              <Link key={item.label} to={item.href}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
                onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

const MobileAccordion = ({ label, open, onToggle, children }: { label: string; open: boolean; onToggle: () => void; children: React.ReactNode }) => (
  <div className="space-y-1">
    <button onClick={onToggle}
      className="flex items-center gap-1 w-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">
      {label}
      <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
    </button>
    {open && <div className="pl-4 space-y-1 pt-1">{children}</div>}
  </div>
);

export default Navbar;
