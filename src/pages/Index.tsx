import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedGuides from "@/components/FeaturedGuides";
import BestPicks from "@/components/BestPicks";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CategoryGrid />
        <FeaturedGuides />
        <BestPicks />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
