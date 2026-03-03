import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, LogOut, Shield, Loader2 } from "lucide-react";
import type { Tables, TablesInsert } from "@/integrations/supabase/types";

type ContentTable = "guides" | "articles" | "comparisons" | "reviews" | "categories";

const tabConfig: { key: ContentTable; label: string }[] = [
  { key: "articles", label: "Articles" },
  { key: "guides", label: "Guides" },
  { key: "comparisons", label: "Comparaisons" },
  { key: "reviews", label: "Reviews" },
  { key: "categories", label: "Catégories" },
];

const Admin = () => {
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ContentTable>("articles");
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [form, setForm] = useState<Record<string, any>>({});

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/admin/login");
    }
  }, [authLoading, user, isAdmin, navigate]);

  useEffect(() => {
    if (isAdmin) fetchItems();
  }, [activeTab, isAdmin]);

  const fetchItems = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from(activeTab)
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    }
    setItems(data || []);
    setLoading(false);
  };

  const openCreate = () => {
    setEditingItem(null);
    setForm({});
    setDialogOpen(true);
  };

  const openEdit = (item: any) => {
    setEditingItem(item);
    setForm({ ...item });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    const { id, created_at, updated_at, ...rest } = form;

    if (editingItem) {
      const { error } = await supabase.from(activeTab).update(rest).eq("id", editingItem.id);
      if (error) {
        toast({ title: "Erreur", description: error.message, variant: "destructive" });
        return;
      }
      toast({ title: "Modifié avec succès" });
    } else {
      const { error } = await supabase.from(activeTab).insert(rest as any);
      if (error) {
        toast({ title: "Erreur", description: error.message, variant: "destructive" });
        return;
      }
      toast({ title: "Créé avec succès" });
    }
    setDialogOpen(false);
    fetchItems();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer cet élément ?")) return;
    const { error } = await supabase.from(activeTab).delete().eq("id", id);
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Supprimé" });
    fetchItems();
  };

  const getFields = (): string[] => {
    switch (activeTab) {
      case "articles":
        return ["title", "slug", "excerpt", "content", "image", "category", "tag", "read_time", "author", "published"];
      case "guides":
        return ["title", "slug", "description", "tag", "image", "icon", "published"];
      case "comparisons":
        return ["title", "slug", "description", "image", "published"];
      case "reviews":
        return ["title", "slug", "description", "image", "rating", "published"];
      case "categories":
        return ["name", "slug", "description", "icon", "image"];
      default:
        return [];
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) return null;

  const columns = activeTab === "categories"
    ? ["name", "slug"]
    : ["title", "slug", "published"];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-display font-bold text-lg">Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as ContentTable)}>
          <div className="flex items-center justify-between mb-6">
            <TabsList>
              {tabConfig.map((t) => (
                <TabsTrigger key={t.key} value={t.key}>{t.label}</TabsTrigger>
              ))}
            </TabsList>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm" onClick={openCreate}>
                  <Plus className="h-4 w-4 mr-1" /> Ajouter
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{editingItem ? "Modifier" : "Ajouter"} — {activeTab}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  {getFields().map((field) => (
                    <div key={field} className="space-y-1.5">
                      <Label className="capitalize">{field.replace(/_/g, " ")}</Label>
                      {field === "published" ? (
                        <Switch
                          checked={!!form[field]}
                          onCheckedChange={(v) => setForm({ ...form, [field]: v })}
                        />
                      ) : field === "content" ? (
                        <Textarea
                          value={form[field] || ""}
                          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                          rows={6}
                        />
                      ) : (
                        <Input
                          value={form[field] || ""}
                          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        />
                      )}
                    </div>
                  ))}
                  <Button onClick={handleSave} className="w-full">
                    {editingItem ? "Enregistrer" : "Créer"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {tabConfig.map((t) => (
            <TabsContent key={t.key} value={t.key}>
              {loading ? (
                <div className="flex justify-center py-12">
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
              ) : items.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  Aucun élément. Cliquez sur "Ajouter" pour commencer.
                </div>
              ) : (
                <div className="rounded-lg border border-border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        {columns.map((col) => (
                          <TableHead key={col} className="capitalize">{col}</TableHead>
                        ))}
                        <TableHead className="w-24">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {items.map((item) => (
                        <TableRow key={item.id}>
                          {columns.map((col) => (
                            <TableCell key={col}>
                              {col === "published" ? (
                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item[col] ? "bg-emerald-500/15 text-emerald-500" : "bg-muted text-muted-foreground"}`}>
                                  {item[col] ? "Publié" : "Brouillon"}
                                </span>
                              ) : (
                                <span className="line-clamp-1">{item[col]}</span>
                              )}
                            </TableCell>
                          ))}
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Button variant="ghost" size="icon" onClick={() => openEdit(item)}>
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
