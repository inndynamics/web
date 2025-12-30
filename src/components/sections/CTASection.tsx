import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    revenue: "",
    challenge: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitud enviada",
      description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      revenue: "",
      challenge: "",
    });
  };

  return (
    <section id="contacto" className="section-padding-lg bg-gradient-to-br from-dark to-foreground text-primary-foreground">
      <div className="container-bcr max-w-4xl text-center">
        <h2 className="text-h2-sm lg:text-h2 mb-6">
          Empecemos Tu Transformación Hoy
        </h2>
        <p className="text-xl text-primary-foreground/70 mb-12">
          Agenda una llamada de alineación de 30 minutos sin compromiso
        </p>
        
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6 bg-primary-foreground/10 backdrop-blur-lg p-8 lg:p-12 rounded-2xl border border-primary-foreground/20"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              placeholder="Nombre completo"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
              required
            />
            <Input
              placeholder="Email corporativo"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
              required
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              placeholder="Teléfono"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
            />
            <Input
              placeholder="Empresa"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
              required
            />
          </div>
          
          <Select
            value={formData.revenue}
            onValueChange={(value) => setFormData({ ...formData, revenue: value })}
          >
            <SelectTrigger className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground h-12">
              <SelectValue placeholder="Facturación anual" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="<500k">Menos de 500K€</SelectItem>
              <SelectItem value="500k-1m">500K€ - 1M€</SelectItem>
              <SelectItem value="1m-3m">1M€ - 3M€</SelectItem>
              <SelectItem value="3m-5m">3M€ - 5M€</SelectItem>
              <SelectItem value=">5m">Más de 5M€</SelectItem>
            </SelectContent>
          </Select>
          
          <textarea
            placeholder="¿Cuál es tu mayor desafío? (opcional)"
            rows={4}
            value={formData.challenge}
            onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
            className="w-full bg-primary-foreground/20 border border-primary-foreground/30 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 resize-none"
          />
          
          <Button type="submit" variant="hero" size="xl" className="w-full">
            Solicitar Llamada Estratégica
          </Button>
        </form>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-primary-foreground/60">
          <div className="flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-primary-hover" />
            Sin compromiso
          </div>
          <div className="flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-primary-hover" />
            30 minutos análisis
          </div>
          <div className="flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-primary-hover" />
            Respuesta en 24h
          </div>
          <div className="flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-primary-hover" />
            Hablas con socios
          </div>
        </div>
        
        <p className="mt-8 text-primary-foreground/60">
          O escríbenos a{" "}
          <a
            href="mailto:info@bcrgrowthpartners.es"
            className="text-primary-hover hover:underline"
          >
            info@bcrgrowthpartners.es
          </a>
        </p>
      </div>
    </section>
  );
};

export default CTASection;
