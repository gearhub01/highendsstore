import { Trophy, Target, Wallet, Zap } from "lucide-react";

interface VerdictPick {
  icon: React.ReactNode;
  label: string;
  productName: string;
  reason: string;
}

interface GuideVerdictProps {
  picks: VerdictPick[];
  conclusion: string;
}

const GuideVerdict = ({ picks, conclusion }: GuideVerdictProps) => {
  return (
    <section className="py-12 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-display font-bold">
              Notre <span className="gradient-neon-text">Verdict Final</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {picks.map((pick) => (
              <div
                key={pick.label}
                className="p-5 rounded-lg border border-border bg-card hover:border-primary/40 hover:box-glow transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-3 text-primary">
                  {pick.icon}
                </div>
                <span className="block font-display text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-2">
                  {pick.label}
                </span>
                <h3 className="font-display text-sm font-bold text-foreground mb-1">
                  {pick.productName}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pick.reason}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-lg border border-primary/20 bg-primary/5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-display text-xs font-bold tracking-wider uppercase text-primary block mb-2">Conclusion</span>
              {conclusion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Trophy, Target, Wallet, Zap };
export default GuideVerdict;
