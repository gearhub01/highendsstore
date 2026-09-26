import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { SITE_URL } from "@/components/SEOHead";
import { EDITORIAL_ARTICLES, parseEditorial } from "@/content/editorial";
import NotFound from "./NotFound";

const EditorialPage = () => {
  const { pathname } = useLocation();
  const article = EDITORIAL_ARTICLES.find((a) => a.path === pathname.replace(/\/$/, ""));
  if (!article) return <NotFound />;
  const { title, html, schemas } = parseEditorial(article.raw);
  const url = `${SITE_URL}${article.path}`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={article.seoTitle}
        description={article.seoDescription}
        canonicalPath={article.path}
        type="article"
        appendSiteName={false}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: article.seoDescription,
            datePublished: article.date,
            author: { "@type": "Organization", name: "Highends Store" },
            publisher: { "@type": "Organization", name: "Highends Store", url: SITE_URL },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: article.section.label, item: `${SITE_URL}${article.section.href}` },
              { "@type": "ListItem", position: 3, name: title, item: url },
            ],
          },
          ...schemas,
        ]}
      />
      <Navbar />
      <main className="pt-24 pb-16 container mx-auto px-4">
        <article className="max-w-3xl mx-auto">
          <Link to={article.section.href} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> {article.section.label}
          </Link>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">{title}</h1>
          <div className="editorial" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default EditorialPage;
