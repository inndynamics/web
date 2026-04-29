import ScrollReveal from "@/components/ScrollReveal";
import { TrendingUp, Brain, BarChart3, Target, Shield, Zap, Building2, LineChart, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Due Diligence Tecnológica",
    description: "Evaluamos el nivel de madurez digital de las empresas target y diseñamos roadmaps de transformación con IA.",
  },
  {
    icon: TrendingUp,
    title: "Aceleración de Valor",
    description: "Implementamos soluciones de IA que multiplican el EBITDA de las participadas en plazos de 12-18 meses.",
  },
  {
    icon: BarChart3,
    title: "Reporting Inteligente",
    description: "Dashboards automatizados con predicciones financieras y operativas para el comité de inversión.",
  },
  {
    icon: Target,
    title: "Optimización Operativa",
    description: "Agentes autónomos que eliminan ineficiencias en procesos clave: supply chain, ventas y atención al cliente.",
  },
  {
    icon: Shield,
    title: "Gobernanza de IA",
    description: "Frameworks de compliance y ética en IA adaptados a los estándares de los fondos de inversión.",
  },
  {
    icon: Zap,
    title: "Escalabilidad Cross-Portfolio",
    description: "Soluciones replicables entre participadas para maximizar sinergias y reducir costes de implementación.",
  },
];

const PrivateEquitySection = () => {
  return (
    <section id="private-equity" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container-bcr relative z-10">
        <ScrollReveal>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center mb-16">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
                <Building2 className="w-4 h-4" />
                Private Equity & Venture Capital
              </span>
              <h2 className="text-h2-sm lg:text-h2 mb-5">
                IA para{" "}
                <span className="text-gradient-blue">Fondos de Capital Privado</span>
              </h2>
              <p className="text-body-lg text-muted-foreground mb-6">
                Implementamos inteligencia artificial en empresas participadas para crear palancas reales de valor: eficiencia operativa, crecimiento comercial, reporting avanzado y escalabilidad cross-portfolio.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Diseñar plan para participadas
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "12-18", label: "meses para capturar impacto" },
                { value: "P&L", label: "foco directo en resultados" },
                { value: "360º", label: "desde DD hasta exit" },
                { value: "x-portfolio", label: "soluciones replicables" },
              ].map((item) => (
                <div key={item.value} className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{item.value}</div>
                  <p className="text-sm text-muted-foreground leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Value prop banner */}
        <ScrollReveal>
          <div className="mb-12 p-6 md:p-8 rounded-2xl border border-primary/20 bg-primary/5 relative overflow-hidden shadow-lg shadow-primary/5">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/15 flex items-center justify-center">
                <LineChart className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Multiplicamos el valor de las participadas con IA
                </h3>
                <p className="text-muted-foreground">
                  Trabajamos directamente con los equipos de gestión de los fondos y los CEOs de las participadas
                  para identificar, priorizar e implementar casos de uso de IA con impacto directo en P&L.
                  Desde la due diligence tecnológica hasta la salida, maximizamos el retorno de cada inversión.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-12 text-center">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Hablar con nuestro equipo PE
              <TrendingUp className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PrivateEquitySection;
