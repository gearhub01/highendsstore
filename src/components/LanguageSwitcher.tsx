import { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { languages } from "@/i18n/config";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const current = languages.find((l) => l.code === i18n.language) ?? languages[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 p-2 text-muted-foreground hover:text-primary transition-colors"
        aria-label={t("nav.language")}
      >
        <Globe className="h-5 w-5" />
        <span className="hidden sm:inline text-xs font-semibold uppercase">{current.code}</span>
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-2 w-44 rounded-lg border border-border bg-popover shadow-xl z-50 overflow-hidden">
          <div className="p-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setOpen(false);
                }}
                className="flex items-center gap-2 w-full px-3 py-2 rounded-md hover:bg-secondary transition-colors text-sm"
              >
                <span className="text-base leading-none">{lang.flag}</span>
                <span className="flex-1 text-left text-foreground">{lang.label}</span>
                {i18n.language === lang.code && <Check className="h-4 w-4 text-primary" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
