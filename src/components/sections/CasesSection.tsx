import { Check, ExternalLink } from "lucide-react";

const cases = [
  {
    title: "Empresa Industrial B2B",
    subtitle: "Servicios B2B • Sevilla • Facturación inicial: 1,5M€",
    roi: "4x ROI",
    roiLabel: "en 12 meses",
    featured: true,
    stats: [
      { value: "+30%", label: "Facturación", sublabel: "1,5M → 1,95M" },
      { value: "20% → 28%", label: "EBITDA", sublabel: "mejorado" },
      { value: "-70%", label: "Dependencia", sublabel: "del dueño" },
      { value: "60 → 35h", label: "Horas dueño", sublabel: "por semana" },
    ],
  },
  {
    title: "Agroindustria",
    subtitle: "Córdoba • Problema: Excel, sin CRM, comerciales sin estructura",
    tags: [
      "5 automatizaciones implementadas",
      "-30% tiempo administrativo",
      "Pipeline visible en tiempo real",
    ],
  },
  {
    title: "Servicios Profesionales",
    subtitle: "Málaga • Problema: Sin escalabilidad, fundador cuello de botella",
    tags: [
      "+25% nuevos clientes",
      "Equipo comercial: 1 → 3 personas",
      "Fundador recuperó 20h/semana",
    ],
  },
  {
    title: "IAPepe — IA para Gestión de Eventos",
    subtitle: "Tecnología • Desarrollo de producto IA end-to-end",
    link: "https://iapepe.com",
    tags: [
      "Asistente IA conversacional desplegado",
      "Automatización de logística y agenda",
      "Integración con plataformas de ticketing",
    ],
  },
];

const CasesSection = () => {
  return (
    <section id="casos" className="section-padding bg-gray-light bg-grid-pattern relative">
      <div className="container-bcr">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Casos de Éxito
          </span>
          <h2 className="text-h2-sm lg:text-h2">
            Resultados <span className="text-gradient-blue">Reales</span> de Empresas Reales
          </h2>
        </div>
        
        <div className="space-y-6">
          {/* Featured Case */}
          <div className="border-gradient">
            <div className="bg-card p-8 lg:p-12 rounded-xl">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Caso Destacado
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2">{cases[0].title}</h3>
                  <p className="text-muted-foreground">{cases[0].subtitle}</p>
                </div>
                <div className="text-left lg:text-right bg-gradient-to-br from-primary to-primary-hover p-6 rounded-xl shadow-glow">
                  <div className="text-4xl font-bold text-primary-foreground">{cases[0].roi}</div>
                  <p className="text-sm text-primary-foreground/80">{cases[0].roiLabel}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {cases[0].stats?.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="text-center p-5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors group"
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-primary group-hover:scale-105 transition-transform">
                      {stat.value}
                    </div>
                    <p className="text-sm text-foreground font-medium mt-2">{stat.label}</p>
                    <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Other Cases */}
          <div className="grid md:grid-cols-2 gap-6">
            {cases.slice(1).map((caseItem, idx) => (
              <div key={idx} className="card-tech-glow p-8 lg:p-10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl lg:text-2xl font-bold">{caseItem.title}</h3>
                  {caseItem.link && (
                    <a href={caseItem.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-foreground hover:bg-primary p-2 rounded-lg transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground mb-6">{caseItem.subtitle}</p>
                
                <div className="flex flex-wrap gap-3">
                  {caseItem.tags?.map((tag, tagIdx) => (
                    <div
                      key={tagIdx}
                      className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      <span className="font-medium text-sm">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
