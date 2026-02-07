import { Mail, Zap } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-display tracking-widest uppercase mb-6">
            <Zap className="h-3.5 w-3.5 fill-primary" />
            Newsletter
          </div>
          <h2 className="text-3xl font-display font-bold mb-3">
            Ne Manquez Aucun <span className="text-primary text-glow-sm">Deal</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Recevez nos best picks, alertes promos et nouveaux guides chaque semaine. Pas de spam, que du gaming.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full pl-10 pr-4 py-3 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 font-display text-sm font-semibold tracking-wider uppercase gradient-neon text-primary-foreground rounded-md box-glow hover:scale-105 transition-transform"
            >
              S'abonner
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            Rejoignez 5,000+ gamers. Désabonnement en 1 clic.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
