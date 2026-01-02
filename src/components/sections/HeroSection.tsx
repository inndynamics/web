import { Button } from "@/components/ui/button";
import AnimatedGraphic from "@/components/AnimatedGraphic";
import CountUp from "@/components/CountUp";
import { ArrowRight, Sparkles } from "lucide-react";
const HeroSection = () => {
  return <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 bg-background bg-grid-pattern relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-primary-hover/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-bcr flex-1 flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <p className="text-sm text-primary font-medium tracking-wide">
                Architecture of Growth
              </p>
            </div>
            
            <h1 className="text-display-sm lg:text-display leading-tight">
              <span className="text-foreground">Transformamos PYMES consolidadas en </span>
              <span className="text-gradient-blue">corporaciones de alto rendimiento</span>
            </h1>
            
            <p className="text-body-lg text-foreground/80 max-w-xl flex flex-wrap gap-x-3 gap-y-1">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                Sistemas de ventas predecibles
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-hover animate-glow-pulse" style={{
                animationDelay: '0.5s'
              }} />
                Operaciones automatizadas
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-cyan animate-glow-pulse" style={{
                animationDelay: '1s'
              }} />
                Inteligencia artificial aplicada
              </span>
            </p>
            
            <p className="text-body text-muted-foreground max-w-xl">Consultora de crecimiento empresarial especializada en profesionalización comercial, digitalización operativa e IA para empresas andaluzas.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="#contacto">
                  Solicitar Diagnóstico 30 min
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#casos">Ver Casos de Éxito</a>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-fade-in stagger-2">
            <div className="aspect-square rounded-2xl overflow-hidden border-gradient p-[2px]">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-light to-background overflow-hidden">
                <AnimatedGraphic />
              </div>
            </div>
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-2xl blur-xl animate-float" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-hover/15 rounded-full blur-2xl animate-float" style={{
            animationDelay: '1s'
          }} />
          </div>
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="border-t border-border mt-16 pt-12 relative z-10">
        <div className="container-bcr">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            end: 350,
            suffix: "+",
            label: "Empresas transformadas"
          }, {
            end: 65,
            suffix: "%+",
            label: "Margen de beneficio promedio"
          }, {
            end: 6,
            suffix: " meses",
            label: "Contrato promedio"
          }].map((stat, index) => <div key={stat.label} className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="stat-highlight inline-block">
                  <CountUp end={stat.end} suffix={stat.suffix} className="text-4xl lg:text-5xl font-bold text-primary group-hover:text-primary-hover transition-colors" />
                </div>
                <p className="text-muted-foreground mt-4">{stat.label}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;