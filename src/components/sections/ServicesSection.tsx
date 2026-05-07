import ScrollReveal from "@/components/ScrollReveal";
import { Bot, Cog, Code2, ArrowRight, LayoutDashboard } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Agentes de IA Especializados",
    description: "Desplegamos agentes autónomos entrenados para tu sector: atención al cliente 24/7, cualificación de leads, gestión documental, soporte técnico y mucho más. 79 soluciones catalogadas para 13 sectores.",
    badge: "79 agentes · 13 sectores",
    cta: "Ver Catálogo",
    href: "#agentes",
  },
  {
    icon: Cog,
    title: "Automatización de Procesos",
    description: "Conectamos tus herramientas (CRM, ERP, WhatsApp, email, Google Workspace) en flujos automáticos que trabajan sin supervisión. Reducimos el trabajo manual hasta un 90%.",
    badge: "ROI promedio 5-15x",
    cta: "Ver Casos de Uso",
    href: "#agentes",
  },
  {
    icon: Code2,
    title: "Desarrollo Web con IA",
    description: "Diseñamos y desarrollamos sitios web y aplicaciones integradas con IA: chatbots conversacionales, buscadores semánticos, personalización dinámica y experiencias que convierten.",
    badge: "Entrega en días",
    cta: "Ver Portfolio",
    href: "#contacto",
  },
  {
    icon: LayoutDashboard,
    title: "Aplicaciones a Medida",
    description: "Creamos ERP, CRM, portales de cliente, dashboards operativos y herramientas internas adaptadas exactamente a tus procesos. Sustituimos hojas de cálculo, software rígido y tareas manuales por plataformas propias, escalables e integradas con tus sistemas.",
    badge: "ERP · CRM · SaaS interno",
    cta: "Diseñar App",
    href: "#contacto",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding">
      <div className="container-bcr">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-medium tracking-wider uppercase mb-3">Servicios</p>
            <h2 className="text-3xl md:text-4xl font-bold">Lo que hacemos</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-dark-hover p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-success bg-success/10 px-3 py-1 rounded-full">{s.badge}</span>
                  <a href={s.href} className="text-sm text-primary hover:text-primary-hover flex items-center gap-1 transition-colors">
                    {s.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
