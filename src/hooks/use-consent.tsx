import { createContext, useContext, useCallback, useEffect, useMemo, useState } from "react";

export type ConsentCategory = "necessary" | "analytics" | "affiliate";

export type ConsentState = {
  necessary: true;
  analytics: boolean;
  affiliate: boolean;
};

type StoredConsent = {
  state: ConsentState;
  timestamp: number;
  version: 1;
};

const STORAGE_KEY = "gearhub_cookie_consent";
/** 6 mois maximum (recommandation CNIL) */
const MAX_AGE_MS = 6 * 30 * 24 * 60 * 60 * 1000;

export const DEFAULT_CONSENT: ConsentState = { necessary: true, analytics: false, affiliate: false };

function readStored(): StoredConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed?.timestamp || Date.now() - parsed.timestamp > MAX_AGE_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return {
      version: 1,
      timestamp: parsed.timestamp,
      state: {
        necessary: true,
        analytics: !!parsed.state?.analytics,
        affiliate: !!parsed.state?.affiliate,
      },
    };
  } catch {
    return null;
  }
}

type ConsentContextValue = {
  consent: ConsentState;
  hasChoice: boolean;
  isBannerOpen: boolean;
  openBanner: () => void;
  closeBanner: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: { analytics: boolean; affiliate: boolean }) => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export const ConsentProvider = ({ children }: { children: React.ReactNode }) => {
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_CONSENT);
  const [hasChoice, setHasChoice] = useState(true);
  const [isBannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    const stored = readStored();
    if (stored) {
      setConsent(stored.state);
      setHasChoice(true);
    } else {
      setHasChoice(false);
      setBannerOpen(true);
    }
  }, []);

  const persist = useCallback((state: ConsentState) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ state, timestamp: Date.now(), version: 1 } satisfies StoredConsent),
      );
    } catch {
      /* stockage indisponible */
    }
    setConsent(state);
    setHasChoice(true);
    setBannerOpen(false);
    window.dispatchEvent(new CustomEvent("consentchange", { detail: state }));
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      hasChoice,
      isBannerOpen,
      openBanner: () => setBannerOpen(true),
      closeBanner: () => setBannerOpen(false),
      acceptAll: () => persist({ necessary: true, analytics: true, affiliate: true }),
      rejectAll: () => persist({ necessary: true, analytics: false, affiliate: false }),
      savePreferences: (prefs) => persist({ necessary: true, ...prefs }),
    }),
    [consent, hasChoice, isBannerOpen, persist],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
};

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent doit être utilisé dans un ConsentProvider");
  return ctx;
}
