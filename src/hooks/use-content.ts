import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type DbArticle = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  image: string | null;
  category: string | null;
  tag: string | null;
  read_time: string | null;
  author: string | null;
  date: string;
  published: boolean;
};

export type DbGuide = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  image: string | null;
  tag: string | null;
  icon: string | null;
};

export type DbComparison = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  image: string | null;
};

export type DbReview = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  image: string | null;
  rating: string | null;
};

export function useArticles() {
  return useQuery({
    queryKey: ["articles", "published"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("published", true)
        .order("date", { ascending: false });
      if (error) throw error;
      return (data ?? []) as DbArticle[];
    },
  });
}

export function useArticle(slug?: string) {
  return useQuery({
    queryKey: ["article", slug],
    enabled: !!slug,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("slug", slug!)
        .eq("published", true)
        .maybeSingle();
      if (error) throw error;
      return (data as DbArticle | null) ?? null;
    },
  });
}

export function useGuides() {
  return useQuery({
    queryKey: ["guides", "published"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("guides")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as DbGuide[];
    },
  });
}

export function useComparisons() {
  return useQuery({
    queryKey: ["comparisons", "published"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("comparisons")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as DbComparison[];
    },
  });
}

export function useReviews() {
  return useQuery({
    queryKey: ["reviews", "published"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as DbReview[];
    },
  });
}

export const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80";
