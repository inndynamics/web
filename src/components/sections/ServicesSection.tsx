import { Search, Settings, Bot, Handshake, Check, ArrowRight, LucideIcon } from "lucide-react";
interface ServiceCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  duration: string;
  cta: string;
}
const ServiceCard = ({
  number,
  icon: Icon,
  title,
  tagline,
  description,
  features,
  duration,
  cta
}: ServiceCardProps) => <div className="relative group">
    {/* Gradient border effect on hover */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-primary-hover to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
    
    <div className="relative bg-card border border-border group-hover:border-transparent p-8 lg:p-10 rounded-xl transition-all duration-300">
      {/* Number background */}
      <div className="tech-number absolute top-4 right-6 select-none">
        {number}
      </div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
          <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        
        <h3 className="text-2xl lg:text-3xl font-bold mb-3">{title}</h3>
        
        
        
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, idx) => <li key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm text-foreground">{feature}</span>
            </li>)}
        </ul>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <span className="w-2 h-2 rounded-full bg-primary" />
          {duration}
        </div>
        
        <a href="#contacto" className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
          {cta}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>;
const services: ServiceCardProps[] = [{
  number: "01",
  icon: Search,
  title: "BCR Diagnostic 360",
  tagline: "En 10 días te decimos exactamente por dónde se te va el dinero y cómo vender el doble",
  description: "Auditoría integral de ventas, operaciones, digital y financiero con informe ejecutivo de 15-20 páginas y roadmap estratégico de 12 meses",
  features: ["Análisis de 4 áreas (Ventas, Operaciones, Digital, Financiero)", "Informe ejecutivo completo", "Roadmap de 12 meses con 3 opciones", "Reunión de cierre con directivos"],
  duration: "10 días • Empresas 500K-5M€",
  cta: "Solicitar Diagnóstico"
}, {
  number: "02",
  icon: Settings,
  title: "Sales & Ops Transformation",
  tagline: "Instalamos la máquina que genera ventas sin que dependas de ti",
  description: "Transformación integral de 12 semanas que instala un Sistema de Ventas Reproducible y Operaciones 100% Digitalizadas",
  features: ["Sales Playbook completo (30 páginas)", "CRM configurado y operativo", "3-5 automatizaciones implementadas", "Equipo comercial entrenado", "Manual de procesos completo"],
  duration: "12 semanas • Implementación completa",
  cta: "Conocer Programa"
}, {
  number: "03",
  icon: Bot,
  title: "Digital Efficiency Program",
  tagline: "Tus administrativos hoy hacen tareas de robot. Vamos a cambiar eso",
  description: "Automatización y digitalización de operaciones con IA, RPA e integraciones. Stack tecnológico implementado en 6 semanas sin dolor",
  features: ["CRM avanzado implementado", "5 automatizaciones core funcionando", "Integración completa CRM-ERP-Facturación", "Dashboards BI en tiempo real", "8 horas de formación práctica"],
  duration: "6 semanas • RPA + IA + Integraciones",
  cta: "Ver Tecnologías"
}, {
  number: "04",
  icon: Handshake,
  title: "Advisory & Fractional Management",
  tagline: "Tu socio estratégico a tiempo parcial",
  description: "Consejo asesor mensual con acceso 24/7 a socios fundadores, o Director Comercial/COO Fraccional según necesites",
  features: ["Reunión de consejo mensual (1,5h)", "Acceso prioritario 24/7", "Benchmarking trimestral", "Descuento 15% en servicios adicionales", "Soporte continuo post-proyecto"],
  duration: "Retainer mensual • Contrato 6-12 meses",
  cta: "Agendar Consulta"
}];
const ServicesSection = () => {
  return <section id="servicios" className="section-padding bg-gray-light bg-dots-pattern relative">
      <div className="container-bcr">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Soluciones Integrales
          </span>
          <h2 className="text-h2-sm lg:text-h2 mb-4">
            Nuestros <span className="text-gradient-blue">Servicios</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones modulares adaptadas a tu fase de crecimiento
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map(service => <ServiceCard key={service.number} {...service} />)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;