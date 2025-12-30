import { Button } from "@/components/ui/button";
import AnimatedGraphic from "@/components/AnimatedGraphic";
import CountUp from "@/components/CountUp";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 bg-background">
      <div className="container-bcr flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <div className="space-y-8 animate-fade-in-up">
            <p className="text-sm text-muted-foreground tracking-widest uppercase font-medium">
              Architecture of Growth
            </p>
            
            <h1 className="text-display-sm lg:text-display text-foreground leading-tight">
              Transformamos PYMES consolidadas en{" "}
              <span className="text-primary">corporaciones de alto rendimiento</span>
            </h1>
            
            <p className="text-body-lg text-muted-foreground max-w-xl">
              Sistemas de ventas predecibles • Operaciones automatizadas • Inteligencia artificial aplicada
            </p>
            
            <p className="text-body text-gray-medium max-w-xl">
              Consultora de crecimiento empresarial especializada en profesionalización comercial, 
              digitalización operativa e IA para empresas andaluzas de 500K-5M€
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contacto">
                  Solicitar Diagnóstico 30 min
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#casos">Ver Casos de Éxito</a>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-fade-in stagger-2">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-light">
              <AnimatedGraphic />
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="border-t border-border mt-16 pt-12">
        <div className="container-bcr">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up stagger-1">
              <CountUp 
                end={20} 
                suffix="+" 
                className="text-4xl lg:text-5xl font-bold text-primary" 
              />
              <p className="text-muted-foreground mt-2">Empresas transformadas</p>
            </div>
            <div className="animate-fade-in-up stagger-2">
              <CountUp 
                end={65} 
                suffix="%+" 
                className="text-4xl lg:text-5xl font-bold text-primary" 
              />
              <p className="text-muted-foreground mt-2">Margen promedio</p>
            </div>
            <div className="animate-fade-in-up stagger-3">
              <CountUp 
                end={12} 
                suffix=" meses" 
                className="text-4xl lg:text-5xl font-bold text-primary" 
              />
              <p className="text-muted-foreground mt-2">Contrato promedio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
