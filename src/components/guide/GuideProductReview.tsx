import { Star, ThumbsUp, ThumbsDown, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export interface ProductReview {
  rank: number;
  name: string;
  tagline: string;
  rating: number;
  price: string;
  image?: string;
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  verdict: string;
  bestFor: string;
}

interface GuideProductReviewProps {
  product: ProductReview;
}

const RatingBar = ({ label, value }: { label: string; value: number }) => (
  <div className="flex items-center gap-3">
    <span className="text-xs text-muted-foreground w-24 shrink-0">{label}</span>
    <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
      <div
        className="h-full rounded-full gradient-neon"
        style={{ width: `${value * 10}%` }}
      />
    </div>
    <span className="text-xs font-display font-bold text-primary w-8 text-right">{value}</span>
  </div>
);

const GuideProductReview = ({ product }: GuideProductReviewProps) => {
  return (
    <article className="rounded-lg border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-md gradient-neon flex items-center justify-center font-display font-bold text-primary-foreground text-sm shrink-0">
              #{product.rank}
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground">{product.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20">
              <Star className="h-4 w-4 text-primary fill-primary" />
              <span className="font-display text-lg font-bold text-primary">{product.rating}</span>
              <span className="text-xs text-muted-foreground">/10</span>
            </div>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {product.specs.map((spec) => (
            <div key={spec.label} className="px-3 py-2 rounded bg-secondary/50 border border-border">
              <span className="block text-[10px] font-display tracking-wider uppercase text-muted-foreground mb-0.5">
                {spec.label}
              </span>
              <span className="text-sm font-medium text-foreground">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Pros & Cons */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <ThumbsUp className="h-4 w-4 text-primary" />
            <span className="font-display text-xs font-bold tracking-wider uppercase text-primary">Points Forts</span>
          </div>
          <ul className="space-y-2">
            {product.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">✓</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <ThumbsDown className="h-4 w-4 text-destructive" />
            <span className="font-display text-xs font-bold tracking-wider uppercase text-destructive">Points Faibles</span>
          </div>
          <ul className="space-y-2">
            {product.cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-destructive mt-1">✗</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator />

      {/* Verdict + CTA */}
      <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <span className="font-display text-xs font-bold tracking-wider uppercase text-primary mb-1 block">Verdict</span>
          <p className="text-sm text-muted-foreground leading-relaxed">{product.verdict}</p>
          <span className="text-xs text-muted-foreground mt-1 block">
            Idéal pour : <span className="text-foreground font-medium">{product.bestFor}</span>
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="font-display text-xl font-bold text-foreground">{product.price}</span>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-display text-xs font-bold tracking-wider uppercase gradient-neon text-primary-foreground rounded-md box-glow hover:scale-105 transition-transform"
          >
            Voir sur Amazon
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
};

export { RatingBar };
export default GuideProductReview;
