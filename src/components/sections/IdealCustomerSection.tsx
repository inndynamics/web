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
    <section className="section-padding bg-gray-light">
      <div className="container-bcr max-w-4xl">
        <h2 className="text-h2-sm lg:text-h2 text-center mb-16">
          ¿Es B&Cr Para Tu Empresa?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {criteria.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-body-lg">{item}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <a href="#contacto">Sí, ese soy yo - Solicitar llamada</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IdealCustomerSection;
