import ScrollReveal from "@/components/ScrollReveal";
import { AlertTriangle, CheckCircle } from "lucide-react";

const problems = [
  "Tus profesionales pasan el 70% del tiempo en tareas repetitivas",
  "Leads sin responder, procesos manuales, decisiones tardías",
  "Las agencias tradicionales tardan semanas en ejecutar",
  "Costes variables e impredecibles",
];

const solutions = [
  "Agentes que conectan herramientas y ejecutan tareas autónomamente",
  "Respuesta inmediata 24/7, sin intervención manual",
  "Ejecución en minutos, no en semanas",
  "Coste predecible y ROI documentado",
];

const ValueProposition = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-bcr">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Eliminamos el arrastre operativo que frena a tu empresa
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                  <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">{p}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-primary/20">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 shrink-0" />
                  <p className="text-foreground">{s}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-card border border-primary/30 text-center">
            <p className="text-lg text-foreground italic leading-relaxed">
              "Sus profesionales pasan de la ejecución manual al control estratégico, recuperando horas valiosas para la innovación y el crecimiento."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ValueProposition;
