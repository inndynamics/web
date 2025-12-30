import { Search, Settings, Bot, Handshake, Check, ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Search,
    title: "BCR Diagnostic 360",
    tagline: "En 10 días te decimos exactamente por dónde se te va el dinero y cómo vender el doble",
    description: "Auditoría integral de ventas, operaciones, digital y financiero con informe ejecutivo de 15-20 páginas y roadmap estratégico de 12 meses",
    features: [
      "Análisis de 4 áreas (Ventas, Operaciones, Digital, Financiero)",
      "Informe ejecutivo completo",
      "Roadmap de 12 meses con 3 opciones",
      "Reunión de cierre con directivos",
    ],
    duration: "10 días • Empresas 500K-5M€",
    cta: "Solicitar Diagnóstico",
  },
  {
    number: "02",
    icon: Settings,
    title: "Sales & Ops Transformation",
    tagline: "Instalamos la máquina que genera ventas sin que dependas de ti",
    description: "Transformación integral de 12 semanas que instala un Sistema de Ventas Reproducible y Operaciones 100% Digitalizadas",
    features: [
      "Sales Playbook completo (30 páginas)",
      "CRM configurado y operativo",
      "3-5 automatizaciones implementadas",
      "Equipo comercial entrenado",
      "Manual de procesos completo",
    ],
    duration: "12 semanas • Implementación completa",
    cta: "Conocer Programa",
  },
  {
    number: "03",
    icon: Bot,
    title: "Digital Efficiency Program",
    tagline: "Tus administrativos hoy hacen tareas de robot. Vamos a cambiar eso",
    description: "Automatización y digitalización de operaciones con IA, RPA e integraciones. Stack tecnológico implementado en 6 semanas sin dolor",
    features: [
      "CRM avanzado implementado",
      "5 automatizaciones core funcionando",
      "Integración completa CRM-ERP-Facturación",
      "Dashboards BI en tiempo real",
      "8 horas de formación práctica",
    ],
    duration: "6 semanas • RPA + IA + Integraciones",
    cta: "Ver Tecnologías",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Advisory & Fractional Management",
    tagline: "Tu socio estratégico a tiempo parcial",
    description: "Consejo asesor mensual con acceso 24/7 a socios fundadores, o Director Comercial/COO Fraccional según necesites",
    features: [
      "Reunión de consejo mensual (1,5h)",
      "Acceso prioritario 24/7",
      "Benchmarking trimestral",
      "Descuento 15% en servicios adicionales",
      "Soporte continuo post-proyecto",
    ],
    duration: "Retainer mensual • Contrato 6-12 meses",
    cta: "Agendar Consulta",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container-bcr">
        <div className="text-center mb-16">
          <h2 className="text-h2-sm lg:text-h2 mb-4">Nuestros Servicios</h2>
          <p className="text-body-lg text-muted-foreground">
            Soluciones modulares adaptadas a tu fase de crecimiento
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="border border-border p-8 lg:p-12 rounded-xl hover:border-primary transition-colors duration-300 group"
            >
              <div className="text-8xl font-thin text-gray-light select-none mb-4">
                {service.number}
              </div>
              
              <service.icon className="w-8 h-8 text-primary mb-4 stroke-[1.5]" />
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">{service.title}</h3>
              
              <p className="text-body-lg text-foreground italic mb-4">
                "{service.tagline}"
              </p>
              
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-sm text-muted-foreground mb-4">{service.duration}</div>
              
              <a
                href="#contacto"
                className="text-primary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
