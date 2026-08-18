DROP POLICY IF EXISTS "Public can read published articles" ON public.articles;
DROP POLICY IF EXISTS "Public can read published guides" ON public.guides;
DROP POLICY IF EXISTS "Public can read published comparisons" ON public.comparisons;
DROP POLICY IF EXISTS "Public can read published reviews" ON public.reviews;

CREATE POLICY "Public can read published articles" ON public.articles FOR SELECT TO anon, authenticated USING (published = true);
CREATE POLICY "Public can read published guides" ON public.guides FOR SELECT TO anon, authenticated USING (published = true);
CREATE POLICY "Public can read published comparisons" ON public.comparisons FOR SELECT TO anon, authenticated USING (published = true);
CREATE POLICY "Public can read published reviews" ON public.reviews FOR SELECT TO anon, authenticated USING (published = true);

CREATE POLICY "Admins can read all articles" ON public.articles FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can read all guides" ON public.guides FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can read all comparisons" ON public.comparisons FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can read all reviews" ON public.reviews FOR SELECT TO authenticated USING (public.is_admin());