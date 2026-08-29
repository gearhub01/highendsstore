import { useState, useEffect } from "react";
import { List } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden xl:block fixed top-24 left-[max(1rem,calc((100vw-80rem)/2-1rem))] w-56 z-40">
        <nav className="rounded-lg border border-border bg-card/80 backdrop-blur-sm p-4 shadow-lg">
          <p className="text-xs font-display uppercase tracking-widest text-primary mb-3 flex items-center gap-1.5">
            <List className="h-3.5 w-3.5" />
            {t("ui.toc")}
          </p>
          <ul className="space-y-1">
            {items.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left text-xs py-1.5 px-2 rounded transition-colors leading-snug ${
                    activeId === id
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile floating button */}
      <div className="xl:hidden fixed bottom-20 right-4 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-14 right-0 w-64 rounded-lg border border-border bg-card shadow-xl p-3 mb-2"
            >
              <p className="text-xs font-display uppercase tracking-widest text-primary mb-2">{t("ui.toc")}</p>
              <ul className="space-y-0.5 max-h-60 overflow-y-auto">
                {items.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(id)}
                      className={`w-full text-left text-xs py-1.5 px-2 rounded transition-colors ${
                        activeId === id
                          ? "text-primary bg-primary/10 font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
          aria-label={t("ui.tocAria")}
        >
          <List className="h-5 w-5" />
        </button>
      </div>
    </>
  );
};

export default TableOfContents;
