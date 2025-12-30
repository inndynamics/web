import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const criteria = [
  "Facturas entre 500K€ - 5M€ anuales",
  "Tienes entre 5-25 empleados en plantilla",
  "Estás ubicado en Andalucía (Sevilla, Córdoba, Málaga)",
  "Sector: agroindustria, industrial B2B o servicios profesionales",
  "Tu empresa depende 100% de ti (60+ horas/semana)",
  "Tus comerciales son 'tomapedidos', no vendedores estratégicos",
  "Tus operaciones están en Excel, no en sistemas integrados",
  "Quieres escalar o preparar tu empresa para venta futura",
];

const IdealCustomerSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container-bcr max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Cliente Ideal
          </span>
          <h2 className="text-h2-sm lg:text-h2">
            ¿Es B&Cr <span className="text-gradient-blue">Para Tu Empresa</span>?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {criteria.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:shadow-glow transition-all">
                <Check className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <p className="text-body-lg pt-1">{item}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="xl" className="shadow-glow" asChild>
            <a href="#contacto">Sí, ese soy yo - Solicitar llamada</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IdealCustomerSection;
