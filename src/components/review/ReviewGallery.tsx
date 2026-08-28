import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslation } from "react-i18next";

interface ReviewGalleryProps {
  images: { src: string; alt: string }[];
}

const ReviewGallery = ({ images }: ReviewGalleryProps) => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <section className="py-12 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="fade-up">
            <h2 className="text-2xl font-display font-bold mb-6">
              {t("ui.gallery_1")} <span className="gradient-neon-text">{t("ui.gallery_2")}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection variant="scale-in" delay={0.1}>
            {/* Main image */}
            <div className="rounded-lg border border-border overflow-hidden mb-4 bg-secondary/30 aspect-video flex items-center justify-center">
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                    className={`shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-all ${
                      i === selectedIndex
                        ? "border-primary box-glow"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ReviewGallery;
