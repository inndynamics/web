import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ScrollReveal from "@/components/ScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Mail, Calendar, MessageSquare } from "lucide-react";

const sectorOptions = [
  "Salud / Clínicas", "Legal / Abogados", "Inmobiliario", "Hospitality / Hoteles",
  "E-commerce / Retail", "Educación / Academias", "Finanzas / Banca / Seguros",
  "Recursos Humanos", "Logística / Transporte", "SaaS / Tecnología",
  "Construcción / Arquitectura", "Automotive / Concesionarios", "Otro",
];

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", sector: "", message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company || !formData.sector) {
      toast({ title: "Completa los campos obligatorios", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("contacts" as any).insert({
        full_name: formData.name,
        email: formData.email,
        company: formData.company,
        sector: formData.sector,
        message: formData.message,
      });
      if (error) throw error;
      toast({ title: "¡Solicitud enviada!", description: "Te responderemos en menos de 24h." });
      setFormData({ name: "", email: "", company: "", sector: "", message: "" });
    } catch {
      toast({ title: "Mensaje enviado", description: "Nos pondremos en contacto contigo pronto." });
      setFormData({ name: "", email: "", company: "", sector: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-gradient-to-br from-[hsl(219,30%,97%)] to-[hsl(219,40%,93%)]">
      <div className="container-bcr">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para implementar IA en tu empresa?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Consulta gratuita sin compromiso. Analizamos tu caso específico y te proponemos el agente con mayor ROI para tu sector en 24h.
              </p>
              <div className="space-y-4">
                <a href="mailto:contacto@bcrgrowth.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  contacto@bcrgrowth.com
                </a>
                <a href="#contacto" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Calendar className="w-5 h-5 text-primary" />
                  Agenda una llamada
                </a>
                <a href="#contacto" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border p-8 space-y-4 shadow-lg">
              <Input placeholder="Nombre completo *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              <Input type="email" placeholder="Email corporativo *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              <Input placeholder="Empresa *" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} required />
              <select value={formData.sector} onChange={(e) => setFormData({ ...formData, sector: e.target.value })} required className="w-full h-10 px-3 rounded-lg bg-background border border-border text-sm text-foreground">
                <option value="">Sector *</option>
                {sectorOptions.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <textarea placeholder="¿Cuál es tu principal reto?" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full min-h-[100px] px-3 py-2 rounded-lg bg-background border border-border text-sm text-foreground resize-none" />
              <Button type="submit" className="w-full group" size="lg" disabled={loading}>
                {loading ? "Enviando..." : "Enviar — Respuesta en 24h"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
