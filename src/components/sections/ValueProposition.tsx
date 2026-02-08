import { Compass, Cpu, TrendingUp, LucideIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface PillarProps {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
  index: number;
}

const Pillar = ({ icon: Icon, title, description, deliverables, index }: PillarProps) => (
  <div
    className="bg-card rounded-xl border border-border p-8 lg:p-10 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 group"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
      <Icon className="w-6 h-6 text-primary stroke-[1.5]" />
    </div>

    <h3 className="text-h3 text-foreground mb-3">{title}</h3>

    <p className="text-muted-foreground leading-relaxed text-body">
      {description}
    </p>

    <Separator className="my-6" />

    <div>
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 block">
        Entregables
      </span>
      <ul className="space-y-2">
        {deliverables.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const pillars = [
  {
    icon: Compass,
    title: "Venta Científica",
    description:
      "Diseñamos un modelo de venta repetible: definición de ICP, proceso por etapas y criterios de calidad. Aterrizamos el trabajo en un playbook accionable y un CRM que permite gestionar sin depender de la intuición.",
    deliverables: [
      "Sales Playbook documentado",
      "CRM operativo y dashboards",
      "Previsibilidad de ingresos",
    ],
  },
  {
    icon: Cpu,
    title: "Operaciones Inteligentes",
    description:
      "Identificamos cuellos de botella y estandarizamos procesos para eliminar el re-trabajo. Automatizamos flujos críticos para dejar visibilidad operativa con datos que soportan decisiones rápidas.",
    deliverables: [
      "Automatización de procesos",
      "Eliminación de fricción",
      "Eficiencia medible",
    ],
  },
  {
    icon: TrendingUp,
    title: "Mentalidad de Inversor",
    description:
      "Construimos los fundamentos que revisan los inversores: reporting fiable, unit economics claros y gobierno corporativo. Reducimos la dependencia del fundador mediante sistemas de gestión robustos.",
    deliverables: [
      "Reporting financiero fiable",
      "Gobernanza y estructura",
      "Independencia del fundador",
    ],
  },
];

const ValueProposition = () => {
  return (
    <section className="section-padding bg-background relative">
      <div className="container-bcr">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Metodología
          </span>
          <h2 className="text-h2-sm lg:text-h2 text-foreground">
            Tres Pilares de Transformación
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
