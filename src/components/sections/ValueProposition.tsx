import { Target, BrainCircuit, TrendingUp, LucideIcon } from "lucide-react";

interface PillarProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  index: number;
}

const Pillar = ({ icon: Icon, title, description, stat, statLabel, index }: PillarProps) => (
  <div
    className="card-tech-glow p-8 lg:p-10 group"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
      <Icon className="w-7 h-7 text-primary stroke-[1.5]" />
    </div>
    
    <h3 className="text-h3 mb-4 group-hover:text-primary transition-colors">{title}</h3>
    
    <p className="text-muted-foreground leading-relaxed mb-6">
      {description}
    </p>
    
    <div className="pt-4 border-t border-border">
      <div className="text-4xl font-bold text-gradient-blue">{stat}</div>
      <p className="text-sm text-muted-foreground mt-1">{statLabel}</p>
    </div>
  </div>
);

const pillars = [
  {
    icon: Target,
    title: "Venta Científica",
    description: "Convertimos tu equipo comercial en una máquina de ventas. Menos improvisación, más sistema. Sales Playbook documentado, CRM operativo y métricas claras que garantizan ingresos predecibles.",
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
    <section className="section-padding bg-gradient-to-b from-background to-gray-light relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      
      <div className="container-bcr">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Metodología Probada
          </span>
          <h2 className="text-h2-sm lg:text-h2">
            Tres Pilares de{" "}
            <span className="text-gradient-blue">Transformación</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <Pillar key={pillar.title} {...pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
