import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Database, BarChart3 } from "lucide-react";

const techCategories = {
  ventas: {
    title: "Ventas",
    icon: Zap,
    items: [
      { name: "HubSpot / Pipedrive", desc: "CRM enterprise" },
      { name: "ZoomInfo / Apollo", desc: "Prospección inteligente" },
      { name: "Salesforce", desc: "Para corporaciones" },
      { name: "Dashboards personalizados", desc: "+30 KPIs" },
    ],
  },
  automatizacion: {
    title: "Automatización",
    icon: Database,
    items: [
      { name: "Zapier / Make / n8n", desc: "RPA no-code/low-code" },
      { name: "Integraciones API", desc: "Custom development" },
      { name: "IA generativa", desc: "Procesos repetitivos" },
      { name: "Reducción 30%+", desc: "Tiempo administrativo" },
    ],
  },
  bi: {
    title: "Business Intelligence",
    icon: BarChart3,
    items: [
      { name: "Looker Studio / Tableau / Power BI", desc: "Visualización" },
      { name: "Dashboards ejecutivos", desc: "Tiempo real" },
      { name: "KPIs financieros y operativos", desc: "Integrados" },
      { name: "Reporting automático", desc: "Semanal/mensual" },
    ],
  },
};

const TechStackSection = () => {
  return (
    <section className="section-padding bg-gradient-tech relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary-hover/10 rounded-full blur-3xl" />
      
      <div className="container-bcr relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary-hover text-sm font-medium mb-4 border border-primary/30">
            Stack Tecnológico
          </span>
          <h2 className="text-h2-sm lg:text-h2 text-primary-foreground mb-4">
            Tecnología que Impulsa <span className="text-primary-hover">Resultados</span>
          </h2>
        </div>
        
        <Tabs defaultValue="ventas" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-dark-lighter/50 p-1.5 rounded-xl h-auto border border-primary/20">
            {Object.entries(techCategories).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="py-4 text-sm font-medium rounded-lg text-primary-foreground/70 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow transition-all"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.title}
                </TabsTrigger>
              );
            })}
          </TabsList>
          
          {Object.entries(techCategories).map(([key, category]) => (
            <TabsContent
              key={key}
              value={key}
              className="border-gradient"
            >
              <div className="bg-dark-lighter/80 backdrop-blur-sm p-8 lg:p-12 rounded-xl">
                <div className="grid sm:grid-cols-2 gap-6">
                  {category.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors group"
                    >
                      <div className="w-3 h-3 rounded-full bg-primary mt-1.5 group-hover:shadow-glow transition-shadow" />
                      <div>
                        <p className="text-primary-foreground font-medium">{item.name}</p>
                        <p className="text-sm text-primary-foreground/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TechStackSection;
