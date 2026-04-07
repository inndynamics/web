import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const plans = [
  {
    name: "Nano",
    setup: "1.000€",
    monthly: "300€",
    features: ["1 agente básico implementado", "Canal único (WhatsApp o Web Chat)", "Soporte email", "Ideal para: primer piloto"],
    cta: "Empezar",
    popular: false,
  },
  {
    name: "Starter",
    setup: "1.500€",
    monthly: "400€",
    features: ["1-2 agentes implementados", "Hasta 2 canales de integración", "Dashboard básico de métricas", "Ideal para: pymes en inicio"],
    cta: "Empezar",
    popular: false,
  },
  {
    name: "Growth",
    setup: "3.000€",
    monthly: "800€",
    features: ["2-4 agentes especializados", "Multi-canal (WhatsApp + Web + Email)", "Dashboard avanzado + reportes", "Soporte prioritario", "Ideal para: empresas en crecimiento"],
    cta: "Solicitar Demo",
    popular: true,
  },
  {
    name: "Pro",
    setup: "5.000€",
    monthly: "1.500€",
    features: ["4-6 agentes + orquestación", "Integración CRM/ERP", "Analítica en tiempo real", "Gestor de cuenta dedicado", "Ideal para: empresas medianas"],
    cta: "Contactar",
    popular: false,
  },
  {
    name: "Enterprise",
    setup: "10.000€",
    monthly: "3.000€",
    features: ["Agentes ilimitados", "Integración full-stack empresarial", "SLA garantizado 99.9%", "Soporte 24/7 + consultoría", "Stack: Gemini Pro + ADK Go + AES-256", "Ideal para: corporaciones"],
    cta: "Hablar con un experto",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="precios" className="section-padding section-alt">
      <div className="container-bcr">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Estructura de Inversión</h2>
            <p className="text-sm text-muted-foreground">Desde proyectos piloto hasta implementaciones enterprise. Margen bruto para el cliente: 85-94%.</p>
          </div>
        </ScrollReveal>

        <div className="flex overflow-x-auto gap-4 pb-4 snap-x">
          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 0.05} className="min-w-[280px] flex-1 snap-center">
              <div className={`bg-white rounded-2xl border p-6 h-full flex flex-col relative shadow-sm transition-all duration-300 hover:shadow-lg ${plan.popular ? "border-primary ring-2 ring-primary/20" : "border-border"}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    ⭐ Más Popular
                  </div>
                )}
                <h3 className="text-lg font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">{plan.monthly}</span>
                    <span className="text-sm text-muted-foreground">/mes</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Setup: {plan.setup}</p>
                </div>
                <ul className="space-y-3 flex-1 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full group"
                  asChild
                >
                  <a href="#contacto">
                    {plan.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
