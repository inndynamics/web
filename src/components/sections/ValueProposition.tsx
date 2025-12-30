import { Target, BrainCircuit, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Venta Científica",
    description: "Instalamos sistemas de ventas reproducibles que no dependen del fundador. Sales Playbook documentado, CRM configurado, KPIs medibles y dashboards en tiempo real para ingresos predecibles mes a mes",
    stat: "+30%",
    statLabel: "incremento promedio en ventas",
  },
  {
    icon: BrainCircuit,
    title: "Operaciones Inteligentes",
    description: "Eliminamos tareas repetitivas con RPA e IA. Automatización de procesos, integración CRM-ERP-Facturación, dashboards financieros en tiempo real y reducción de hasta 25% en costes operativos",
    stat: "-25%",
    statLabel: "reducción costes operativos",
  },
  {
    icon: TrendingUp,
    title: "Mentalidad de Inversor",
    description: "Preparamos tu empresa para máximo valor. Alto EBITDA, procesos documentados, independencia del fundador y datos estructurados para escalabilidad o venta futura",
    stat: "4x",
    statLabel: "ROI promedio en 12 meses",
  },
];

const ValueProposition = () => {
  return (
    <section className="section-padding bg-gray-light">
      <div className="container-bcr">
        <h2 className="text-h2-sm lg:text-h2 text-center mb-16">
          Tres Pilares de Transformación
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-background p-8 lg:p-12 rounded-xl card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <pillar.icon className="w-12 h-12 text-primary stroke-[1.5]" />
              
              <h3 className="text-h3 mt-6 mb-4">{pillar.title}</h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {pillar.description}
              </p>
              
              <div className="text-4xl font-bold text-primary">{pillar.stat}</div>
              <p className="text-sm text-muted-foreground">{pillar.statLabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
