import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Circle } from "lucide-react";

const techCategories = {
  ventas: {
    title: "Ventas",
    items: [
      "HubSpot / Pipedrive (CRM enterprise)",
      "ZoomInfo / Apollo (Prospección inteligente)",
      "Salesforce (Para corporaciones)",
      "Dashboards personalizados con +30 KPIs",
    ],
  },
  automatizacion: {
    title: "Automatización",
    items: [
      "Zapier / Make / n8n (RPA no-code/low-code)",
      "Integraciones API custom",
      "IA generativa para procesos repetitivos",
      "Reducción 30%+ tiempo administrativo",
    ],
  },
  bi: {
    title: "Business Intelligence",
    items: [
      "Looker Studio / Tableau / Power BI",
      "Dashboards ejecutivos tiempo real",
      "KPIs financieros y operativos integrados",
      "Reporting automático semanal/mensual",
    ],
  },
};

const TechStackSection = () => {
  return (
    <section className="section-padding bg-gray-light">
      <div className="container-bcr">
        <div className="text-center mb-16">
          <h2 className="text-h2-sm lg:text-h2 mb-4">
            Tecnología que Impulsa Resultados
          </h2>
        </div>
        
        <Tabs defaultValue="ventas" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-background p-1 rounded-xl h-auto">
            {Object.entries(techCategories).map(([key, category]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="py-3 text-sm font-medium rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.entries(techCategories).map(([key, category]) => (
            <TabsContent
              key={key}
              value={key}
              className="bg-background p-8 lg:p-12 rounded-xl"
            >
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-body-lg">
                    <Circle className="w-2 h-2 fill-primary text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TechStackSection;
