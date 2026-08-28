import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Clock, CalendarDays, User } from "lucide-react";
import { useTranslation } from "react-i18next";

interface GuideHeroProps {
  category: string;
  categoryHref: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  updatedDate: string;
}

const GuideHero = ({ category, categoryHref, title, subtitle, author, date, readTime, updatedDate }: GuideHeroProps) => {
  const { t } = useTranslation();
  return (
    <section className="pt-24 pb-12 border-b border-border">
      <div className="container mx-auto px-4">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-muted-foreground hover:text-primary">{t("ui.home")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/guides" className="text-muted-foreground hover:text-primary">{t("ui.guides")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={categoryHref} className="text-muted-foreground hover:text-primary">{category}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-foreground">{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 text-[10px] font-display font-bold tracking-widest uppercase gradient-neon text-primary-foreground rounded mb-4">
            {t("ui.buyingGuide")}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4">
            {title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-primary" />
              {author}
            </span>
            <span className="h-4 w-px bg-border" />
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {date}
            </span>
            <span className="h-4 w-px bg-border" />
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {readTime}
            </span>
            <span className="h-4 w-px bg-border" />
            <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">
              {t("ui.updatedAt", { date: updatedDate })}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideHero;
