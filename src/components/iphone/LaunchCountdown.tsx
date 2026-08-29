import { useEffect, useState } from "react";
import { Timer } from "lucide-react";
import { KEYNOTE_DATE } from "@/config/iphone-collection";
import { useTranslation } from "react-i18next";

/**
 * Compte à rebours vers le keynote Apple.
 * La date se modifie dans src/config/iphone-collection.ts (KEYNOTE_DATE).
 */
const getRemaining = (target: number) => {
  const diff = Math.max(0, target - Date.now());
  return {
    done: diff === 0,
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const LaunchCountdown = () => {
  const { t } = useTranslation();
  const target = new Date(KEYNOTE_DATE).getTime();
  const [time, setTime] = useState(() => getRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { value: time.days, label: t("ui.days") },
    { value: time.hours, label: t("ui.hours") },
    { value: time.minutes, label: t("ui.minutes") },
    { value: time.seconds, label: t("ui.seconds") },
  ];

  return (
    <div className="rounded-xl border border-primary/30 bg-card/60 p-5">
      <div className="flex items-center gap-2 mb-4">
        <Timer className="h-4 w-4 text-primary" />
        <p className="text-[11px] font-display uppercase tracking-widest text-primary">
          {time.done ? t("ui.keynoteDone") : t("ui.keynoteDate")}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {units.map((u) => (
          <div key={u.label} className="rounded-lg border border-border bg-background/60 py-3 text-center">
            <p className="font-display text-2xl font-bold text-foreground tabular-nums">
              {String(u.value).padStart(2, "0")}
            </p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{u.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchCountdown;
