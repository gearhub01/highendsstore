import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
  <nav aria-label="Fil d'Ariane" className="container mx-auto px-4 pt-20 pb-2">
    <ol className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
      <li className="flex items-center gap-1.5" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
        <Link to="/" className="hover:text-primary transition-colors" itemProp="item">
          <Home className="h-3.5 w-3.5" />
          <meta itemProp="name" content="Accueil" />
        </Link>
        <meta itemProp="position" content="1" />
      </li>
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-1.5" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
          {item.href ? (
            <Link to={item.href} className="hover:text-primary transition-colors" itemProp="item">
              <span itemProp="name">{item.label}</span>
            </Link>
          ) : (
            <span className="text-foreground font-medium" itemProp="name">{item.label}</span>
          )}
          <meta itemProp="position" content={String(i + 2)} />
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
