import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { useTranslation } from "react-i18next";

export interface RadarProduct {
  name: string;
  color: string;
  scores: Record<string, number>;
}

interface ComparisonRadarProps {
  products: RadarProduct[];
  dimensions: string[];
}

const ComparisonRadar = ({ products, dimensions }: ComparisonRadarProps) => {
  const { t } = useTranslation();
  const data = dimensions.map((dim) => {
    const entry: Record<string, string | number> = { dimension: dim };
    products.forEach((p) => {
      entry[p.name] = p.scores[dim] ?? 0;
    });
    return entry;
  });

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6">
            {t("ui.radar_1")} <span className="gradient-neon-text">{t("ui.radar_2")}</span>
          </h2>

          <div className="rounded-lg border border-border bg-card p-6">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid stroke="hsl(220 15% 18%)" />
                <PolarAngleAxis
                  dataKey="dimension"
                  tick={{ fill: "hsl(215 15% 55%)", fontSize: 12, fontFamily: "Inter" }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 10]}
                  tick={{ fill: "hsl(215 15% 55%)", fontSize: 10 }}
                  tickCount={6}
                />
                {products.map((p) => (
                  <Radar
                    key={p.name}
                    name={p.name}
                    dataKey={p.name}
                    stroke={p.color}
                    fill={p.color}
                    fillOpacity={0.15}
                    strokeWidth={2}
                  />
                ))}
                <Legend
                  wrapperStyle={{ fontSize: 12, fontFamily: "Inter", color: "hsl(200 20% 92%)" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220 18% 10%)",
                    border: "1px solid hsl(220 15% 18%)",
                    borderRadius: 8,
                    fontSize: 12,
                    color: "hsl(200 20% 92%)",
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonRadar;
