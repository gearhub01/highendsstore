import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EditorialPage from "./pages/EditorialPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ConsentProvider } from "@/hooks/use-consent";
import CookieConsent from "@/components/CookieConsent";
import Index from "./pages/Index";
import BuyingGuide from "./pages/BuyingGuide";
import ProductReview from "./pages/ProductReview";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import Guides from "./pages/Guides";
import Reviews from "./pages/Reviews";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import DivulgationAffiliation from "./pages/DivulgationAffiliation";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
// Collection temporaire iPhone 18 Pro (voir src/config/iphone-collection.ts)
import IphoneHub from "./pages/IphoneHub";
import IphoneArticle from "./pages/IphoneArticle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ConsentProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/guides/best-gaming-keyboards" element={<BuyingGuide />} />
            <Route path="/comparaison/gaming-keyboards" element={<EditorialPage />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/wooting-80he" element={<ProductReview />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/blog/polling-rate-2026" element={<EditorialPage />} />
            <Route path="/guides/meilleure-souris-gaming-fps" element={<EditorialPage />} />
            <Route path="/comparaison/144hz-vs-240hz" element={<EditorialPage />} />
            <Route path="/blog/lubrifier-switches" element={<EditorialPage />} />
            {/* Redirection permanente : ancien article polling rate fusionné dans le nouvel article éditorial */}
            <Route path="/blog/choisir-polling-rate-2026" element={<Navigate to="/blog/polling-rate-2026" replace />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/divulgation-affiliation" element={<DivulgationAffiliation />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            {/* Collection temporaire iPhone 18 Pro */}
            <Route path="/iphone-18-pro" element={<IphoneHub />} />
            <Route path="/iphone-18-pro/:slug" element={<IphoneArticle />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
      </ConsentProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
