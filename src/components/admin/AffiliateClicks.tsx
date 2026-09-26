import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Loader2, MousePointerClick, RefreshCw, Smartphone, TrendingUp } from "lucide-react";

interface ClickRow {
  id: string;
  created_at: string;
  collection: string;
  article_slug: string;
  section_id: string | null;
  model: string;
  product_name: string | null;
  destination_url: string | null;
  placement: string;
}

const MODEL_LABELS: Record<string, string> = {
  pro: "iPhone 18 Pro",
  pro_max: "iPhone 18 Pro Max",
  duo: "iPhone Duo",
};

const PLACEMENT_LABELS: Record<string, string> = {
  "hub-card": "Carte du hub",
  "hub-header": "En-tête du hub",
  "article-section": "Section d'article",
  article: "Article",
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

const StatCard = ({
  label,
  value,
  hint,
  icon: Icon,
}: {
  label: string;
  value: string | number;
  hint?: string;
  icon: typeof TrendingUp;
}) => (
  <div className="rounded-lg border border-border bg-card p-4">
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">{label}</span>
      <Icon className="h-4 w-4 text-primary" />
    </div>
    <div className="mt-2 font-display text-2xl font-bold">{value}</div>
    {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
  </div>
);

const Bar = ({ label, count, total }: { label: string; count: number; total: number }) => {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span>{label}</span>
        <span className="text-muted-foreground">
          {count} · {pct}%
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};

const AffiliateClicks = () => {
  const [rows, setRows] = useState<ClickRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase
      .from("cta_clicks")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1000);
    if (error) setError(error.message);
    setRows((data as ClickRow[]) || []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const stats = useMemo(() => {
    const now = Date.now();
    const day = 24 * 60 * 60 * 1000;
    const last24h = rows.filter((r) => now - new Date(r.created_at).getTime() < day).length;
    const last7d = rows.filter((r) => now - new Date(r.created_at).getTime() < 7 * day).length;

    const tally = (key: keyof ClickRow) => {
      const map = new Map<string, number>();
      rows.forEach((r) => {
        const k = (r[key] as string) || "—";
        map.set(k, (map.get(k) || 0) + 1);
      });
      return [...map.entries()].sort((a, b) => b[1] - a[1]);
    };

    return {
      total: rows.length,
      last24h,
      last7d,
      byModel: tally("model"),
      byPlacement: tally("placement"),
      byArticle: tally("article_slug"),
    };
  }, [rows]);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Clics sur les boutons « Voir sur Amazon » (1 000 derniers enregistrements).
        </p>
        <Button variant="outline" size="sm" onClick={load}>
          <RefreshCw className="mr-1 h-4 w-4" /> Actualiser
        </Button>
      </div>

      {error && (
        <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total des clics" value={stats.total} icon={MousePointerClick} />
        <StatCard label="Dernières 24 h" value={stats.last24h} icon={TrendingUp} />
        <StatCard label="7 derniers jours" value={stats.last7d} icon={TrendingUp} />
        <StatCard
          label="Modèle le plus cliqué"
          value={stats.byModel[0] ? MODEL_LABELS[stats.byModel[0][0]] ?? stats.byModel[0][0] : "—"}
          hint={stats.byModel[0] ? `${stats.byModel[0][1]} clics` : undefined}
          icon={Smartphone}
        />
      </div>

      {rows.length === 0 ? (
        <div className="py-12 text-center text-muted-foreground">
          Aucun clic enregistré pour le moment.
        </div>
      ) : (
        <>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4 rounded-lg border border-border bg-card p-5">
              <h3 className="font-display font-semibold">Répartition par modèle</h3>
              {stats.byModel.map(([model, count]) => (
                <Bar key={model} label={MODEL_LABELS[model] ?? model} count={count} total={stats.total} />
              ))}
            </div>
            <div className="space-y-4 rounded-lg border border-border bg-card p-5">
              <h3 className="font-display font-semibold">Répartition par emplacement</h3>
              {stats.byPlacement.map(([placement, count]) => (
                <Bar
                  key={placement}
                  label={PLACEMENT_LABELS[placement] ?? placement}
                  count={count}
                  total={stats.total}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-lg border border-border bg-card p-5">
            <h3 className="font-display font-semibold">Pages les plus performantes</h3>
            {stats.byArticle.slice(0, 10).map(([slug, count]) => (
              <Bar key={slug} label={slug} count={count} total={stats.total} />
            ))}
          </div>

          <div className="rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Page</TableHead>
                  <TableHead>Modèle</TableHead>
                  <TableHead>Emplacement</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.slice(0, 50).map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="whitespace-nowrap text-muted-foreground">
                      {fmtDate(r.created_at)}
                    </TableCell>
                    <TableCell className="line-clamp-1">{r.article_slug}</TableCell>
                    <TableCell>{MODEL_LABELS[r.model] ?? r.model}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {PLACEMENT_LABELS[r.placement] ?? r.placement}
                      {r.section_id ? ` · ${r.section_id}` : ""}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </>
      )}
    </div>
  );
};

export default AffiliateClicks;
