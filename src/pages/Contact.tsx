import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Indiquez votre nom").max(100, "100 caractères maximum"),
  email: z.string().trim().email("Adresse e-mail invalide").max(255),
  subject: z.string().trim().min(1, "Indiquez un objet").max(150, "150 caractères maximum"),
  message: z.string().trim().min(10, "10 caractères minimum").max(2000, "2000 caractères maximum"),
});

type Form = z.infer<typeof schema>;
const empty: Form = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [website, setWebsite] = useState(""); // pot de miel anti-spam

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (website) return;
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Partial<Record<keyof Form, string>> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as keyof Form] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    const { error } = await supabase.from("contact_submissions" as never).insert(parsed.data as never);
    setStatus(error ? "error" : "sent");
    if (!error) setForm(empty);
  };

  const field = (k: keyof Form) => ({
    id: k,
    value: form[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value }),
  });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact — Highends Store"
        description="Contactez l'équipe Highends Store : question sur un guide, correction, suggestion de test ou demande de partenariat."
        type="website"
        canonicalPath="/contact"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-display font-bold mb-4 text-foreground">
            Nous <span className="gradient-neon-text">contacter</span>
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Une question sur un guide, une erreur à signaler, une idée de test ? Utilisez le formulaire ci-dessous ou écrivez à{" "}
            <a href="mailto:contact@highends.store" className="text-primary hover:underline">contact@highends.store</a>.
          </p>

          {status === "sent" ? (
            <div className="glass rounded-xl p-6 border border-primary/30">
              <p className="font-display font-bold text-foreground mb-2">Message envoyé</p>
              <p className="text-sm text-muted-foreground">Merci, votre message a bien été reçu.</p>
              <Button variant="outline" className="mt-4" onClick={() => setStatus("idle")}>Envoyer un autre message</Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="glass rounded-xl p-6 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input {...field("name")} maxLength={100} autoComplete="name" />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input {...field("email")} type="email" maxLength={255} autoComplete="email" />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Objet</Label>
                <Input {...field("subject")} maxLength={150} />
                {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea {...field("message")} rows={6} maxLength={2000} />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>
              <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden"
                value={website} onChange={(e) => setWebsite(e.target.value)} name="website" />
              <p className="text-xs text-muted-foreground">
                Vos données servent uniquement à répondre à votre demande. Voir notre{" "}
                <Link to="/politique-confidentialite" className="text-primary hover:underline">politique de confidentialité</Link>.
              </p>
              {status === "error" && <p className="text-sm text-destructive">L'envoi a échoué. Réessayez ou écrivez-nous par e-mail.</p>}
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Envoi…" : "Envoyer"}
              </Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Contact;
