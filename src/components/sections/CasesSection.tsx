import { Check } from "lucide-react";

const cases = [
  {
    title: "Empresa Industrial B2B",
    subtitle: "Servicios B2B • Sevilla • Facturación inicial: 1,5M€",
    roi: "4x ROI",
    roiLabel: "en 12 meses",
    stats: [
      { value: "+30%", label: "Facturación\n1,5M → 1,95M" },
      { value: "20% → 28%", label: "EBITDA mejorado" },
      { value: "-70%", label: "Dependencia\ndel dueño" },
      { value: "60 → 35h", label: "Horas dueño/\nsemana" },
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
];

const CasesSection = () => {
  return (
    <section id="casos" className="section-padding bg-gray-light">
      <div className="container-bcr">
        <h2 className="text-h2-sm lg:text-h2 text-center mb-16">
          Resultados Reales de Empresas Reales
        </h2>
        
        <div className="space-y-8">
          {/* Featured Case */}
          <div className="bg-background p-8 lg:p-12 rounded-xl">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">{cases[0].title}</h3>
                <p className="text-muted-foreground">{cases[0].subtitle}</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-primary">{cases[0].roi}</div>
                <p className="text-sm text-muted-foreground">{cases[0].roiLabel}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {cases[0].stats?.map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">{stat.value}</div>
                  <p className="text-sm text-muted-foreground mt-2 whitespace-pre-line">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Other Cases */}
          <div className="grid md:grid-cols-2 gap-8">
            {cases.slice(1).map((caseItem, idx) => (
              <div key={idx} className="bg-background p-8 lg:p-12 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">{caseItem.title}</h3>
                <p className="text-muted-foreground mb-6">{caseItem.subtitle}</p>
                
                <div className="flex flex-wrap gap-3">
                  {caseItem.tags?.map((tag, tagIdx) => (
                    <div
                      key={tagIdx}
                      className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-lg"
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
