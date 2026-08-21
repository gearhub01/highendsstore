CREATE TABLE public.cta_clicks (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  collection text not null default 'iphone-18-pro',
  article_slug text not null,
  section_id text,
  model text not null,
  product_name text,
  destination_url text,
  placement text not null default 'article'
);

GRANT INSERT ON public.cta_clicks TO anon;
GRANT INSERT ON public.cta_clicks TO authenticated;
GRANT SELECT ON public.cta_clicks TO authenticated;
GRANT ALL ON public.cta_clicks TO service_role;

ALTER TABLE public.cta_clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can log a CTA click" ON public.cta_clicks FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admins can read CTA clicks" ON public.cta_clicks FOR SELECT TO authenticated USING (public.is_admin());

CREATE INDEX cta_clicks_article_idx ON public.cta_clicks (article_slug, model, created_at DESC);