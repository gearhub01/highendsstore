-- Restrict public reads to published content
DROP POLICY IF EXISTS "Anyone can read articles" ON public.articles;
CREATE POLICY "Public can read published articles" ON public.articles
FOR SELECT USING (published = true OR public.is_admin());

DROP POLICY IF EXISTS "Anyone can read guides" ON public.guides;
CREATE POLICY "Public can read published guides" ON public.guides
FOR SELECT USING (published = true OR public.is_admin());

DROP POLICY IF EXISTS "Anyone can read comparisons" ON public.comparisons;
CREATE POLICY "Public can read published comparisons" ON public.comparisons
FOR SELECT USING (published = true OR public.is_admin());

DROP POLICY IF EXISTS "Anyone can read reviews" ON public.reviews;
CREATE POLICY "Public can read published reviews" ON public.reviews
FOR SELECT USING (published = true OR public.is_admin());

-- user_roles: only own roles readable
DROP POLICY IF EXISTS "Authenticated can read roles" ON public.user_roles;
CREATE POLICY "Users can read their own roles" ON public.user_roles
FOR SELECT TO authenticated USING (user_id = auth.uid());

-- Lock down SECURITY DEFINER function execution
REVOKE EXECUTE ON FUNCTION public.is_admin() FROM anon, public;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM anon, authenticated, public;
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;