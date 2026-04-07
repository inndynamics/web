import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NetworkVisualization from "@/components/NetworkVisualization";
import CountUp from "@/components/CountUp";
import ScrollReveal from "@/components/ScrollReveal";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[hsl(219,40%,97%)] to-[hsl(219,30%,94%)]" />

      <div className="container-bcr flex-1 flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <div className="space-y-8">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                <span className="text-sm text-primary font-medium">
                  Automatiza. Predice. Decide mejor.
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-foreground">
                La era de los prompts{" "}
                <span className="text-gradient">ha terminado.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-xl md:text-2xl text-muted-foreground font-normal">
                Bienvenidos al futuro de los agentes inteligentes.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
                En B&CR Growth implementamos sistemas de IA que trabajan por ti: agentes autónomos, automatización de procesos end-to-end y webs de nueva generación. Transformamos empresas que quieren pasar de la ejecución manual al control estratégico.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="group" asChild>
                  <a href="#contacto">
                    Solicitar Consulta Gratuita
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#agentes">Ver Catálogo de Agentes</a>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative hidden lg:block h-[500px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-[hsl(219,30%,97%)] to-[hsl(219,20%,93%)]">
              <NetworkVisualization />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-t border-border mt-16 pt-12 relative z-10">
        <div className="container-bcr">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { end: 79, suffix: "", label: "Agentes Catalogados" },
              { end: 13, suffix: "", label: "Sectores" },
              { end: 40, suffix: "x", prefix: "Hasta ", label: "ROI" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-xl bg-card border border-border">
                <CountUp end={stat.end} suffix={stat.suffix} prefix={stat.prefix} className="text-4xl lg:text-5xl font-bold text-primary" />
                <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
