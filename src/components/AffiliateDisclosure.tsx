import { Info } from "lucide-react";

const AffiliateDisclosure = () => (
  <aside className="container mx-auto px-4 my-6">
    <div className="max-w-4xl mx-auto flex items-start gap-3 rounded-lg border border-border bg-muted/30 px-4 py-3 text-xs text-muted-foreground">
      <Info className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
      <p>
        <strong className="text-foreground">Transparence :</strong> Cet article contient des liens affiliés. Si vous achetez via ces liens, nous percevons une commission sans surcoût pour vous. Cela nous aide à financer nos tests indépendants.{" "}
        <a href="/mentions-legales" className="underline hover:text-primary transition-colors">En savoir plus</a>.
      </p>
    </div>
  </aside>
);

export default AffiliateDisclosure;
