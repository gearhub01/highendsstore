import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Keyboard, Mouse, Headphones, Monitor, Star, GitCompareArrows, TrendingUp, Cpu, Wrench, Newspaper, BookOpen } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { blogArticles } from "@/data/blog-articles";

const searchableContent = [
  // Guides
  { type: "Guide", icon: Keyboard, label: "Meilleurs Claviers Gaming 2026", href: "/guides/best-gaming-keyboards" },
  { type: "Guide", icon: Mouse, label: "Meilleurs Souris FPS 2026", href: "/guides" },
  { type: "Guide", icon: Headphones, label: "Meilleurs Casques Gaming 2026", href: "/guides" },
  { type: "Guide", icon: Monitor, label: "Meilleurs Moniteurs 4K 2026", href: "/guides" },
  // Reviews
  { type: "Review", icon: Star, label: "Test du Wooting 80HE", href: "/reviews/wooting-80he" },
  // Comparaisons
  { type: "Comparaison", icon: GitCompareArrows, label: "Claviers Gaming — Wooting vs Razer vs Keychron", href: "/comparaison/gaming-keyboards" },
  // Blog (dynamic from data)
  ...blogArticles.map((a) => ({
    type: "Article" as const,
    icon: a.category === "Tendance" ? TrendingUp : a.category === "Tech" ? Cpu : a.category === "Tuto" ? Wrench : Newspaper,
    label: a.title,
    href: `/blog/${a.slug}`,
  })),
];

const iconMap: Record<string, typeof BookOpen> = { Guide: BookOpen, Review: Star, Comparaison: GitCompareArrows, Article: Newspaper };

interface SearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchCommand = ({ open, onOpenChange }: SearchCommandProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const handleSelect = (href: string) => {
    onOpenChange(false);
    navigate(href);
  };

  const grouped = searchableContent.reduce<Record<string, typeof searchableContent>>((acc, item) => {
    (acc[item.type] ??= []).push(item);
    return acc;
  }, {});

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Rechercher un guide, review ou article..." />
      <CommandList>
        <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
        {Object.entries(grouped).map(([type, items]) => {
          const GroupIcon = iconMap[type] || BookOpen;
          return (
            <CommandGroup key={type} heading={type + "s"}>
              {items.map((item) => (
                <CommandItem key={item.href} onSelect={() => handleSelect(item.href)} className="cursor-pointer">
                  <item.icon className="mr-2 h-4 w-4 text-primary" />
                  <span>{item.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          );
        })}
      </CommandList>
    </CommandDialog>
  );
};

export default SearchCommand;
