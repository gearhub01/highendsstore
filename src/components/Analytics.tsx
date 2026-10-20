import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useConsent } from "@/hooks/use-consent";

/**
 * Google Analytics 4 — chargé UNIQUEMENT après consentement « Mesure d'audience ».
 * Sans identifiant de mesure configuré, le composant ne fait rien.
 */
const GA_ID: string | undefined =
  import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY || import.meta.env.VITE_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let loaded = false;

function load(id: string) {
  if (loaded) return;
  loaded = true;
  (window as unknown as Record<string, boolean>)[`ga-disable-${id}`] = false;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true, send_page_view: false });
}

function disable(id: string) {
  (window as unknown as Record<string, boolean>)[`ga-disable-${id}`] = true;
  // Purge des cookies _ga* posés précédemment
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (name.startsWith("_ga")) {
      const host = location.hostname;
      [host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`].forEach((d) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`;
      });
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
  });
}

const Analytics = () => {
  const { consent } = useConsent();
  const location = useLocation();

  useEffect(() => {
    if (!GA_ID) return;
    if (consent.analytics) load(GA_ID);
    else if (loaded) disable(GA_ID);
  }, [consent.analytics]);

  useEffect(() => {
    if (!GA_ID || !consent.analytics || !window.gtag) return;
    window.gtag("event", "page_view", { page_path: location.pathname + location.search });
  }, [location.pathname, location.search, consent.analytics]);

  return null;
};

export default Analytics;
