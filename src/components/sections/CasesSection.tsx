import { Check, ExternalLink, TrendingUp, Building2, Wheat, Briefcase } from "lucide-react";
import iapepeLogo from "@/assets/iapepe-logo.png";
import ScrollReveal from "@/components/ScrollReveal";

const CasesSection = () => {
  return (
    <section id="casos" className="section-padding bg-muted/30 relative">
      <div className="container-bcr">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Casos de Éxito
            </span>
            <h2 className="text-h2-sm lg:text-h2">
              Resultados <span className="text-gradient-blue">Reales</span> de Empresas Reales
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {/* Featured: IAPepe */}
          <ScrollReveal>
            <div className="border border-primary/20 rounded-2xl bg-card shadow-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Logo Side */}
                <div className="lg:w-1/3 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center p-10 lg:p-14">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
                    <img
                      src={iapepeLogo}
                      alt="IAPepe Logo"
                      className="relative w-40 h-40 lg:w-52 lg:h-52 object-contain drop-shadow-lg"
                      loading="lazy"
                      width={512}
                      height={512}
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 w-fit">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Caso Destacado — Producto Propio
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                    IAPepe — IA para Gestión de Eventos
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Tecnología • Desarrollo de producto IA end-to-end
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {[
                      "Asistente IA conversacional desplegado",
                      "Automatización de logística y agenda",
                      "Integración con plataformas de ticketing",
                    ].map((tag, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full"
                      >
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="font-medium text-sm">{tag}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://aurora-flow-planner.lovable.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors w-fit shadow-md"
                  >
                    Ver Proyecto
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Other Cases Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Empresa Industrial B2B */}
            <ScrollReveal delay={0}>
              <div className="bg-card border border-border/60 rounded-2xl p-8 h-full hover:shadow-lg hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-1">Empresa Industrial B2B</h3>
                <p className="text-muted-foreground text-sm mb-5">Servicios B2B • Sevilla</p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { value: "+30%", label: "Facturación" },
                    { value: "4x", label: "ROI" },
                    { value: "-70%", label: "Dependencia" },
                    { value: "60→35h", label: "Horas dueño" },
                  ].map((s, i) => (
                    <div key={i} className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-primary">{s.value}</div>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <TrendingUp className="w-4 h-4" />
                  <span>EBITDA: 20% → 28%</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Agroindustria */}
            <ScrollReveal delay={0.1}>
              <div className="bg-card border border-border/60 rounded-2xl p-8 h-full hover:shadow-lg hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Wheat className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-1">Agroindustria</h3>
                <p className="text-muted-foreground text-sm mb-5">Córdoba • Sin CRM ni estructura</p>

                <div className="space-y-3">
                  {[
                    "5 automatizaciones implementadas",
                    "-30% tiempo administrativo",
                    "Pipeline visible en tiempo real",
                  ].map((tag, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Servicios Profesionales */}
            <ScrollReveal delay={0.2}>
              <div className="bg-card border border-border/60 rounded-2xl p-8 h-full hover:shadow-lg hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-1">Servicios Profesionales</h3>
                <p className="text-muted-foreground text-sm mb-5">Málaga • Fundador cuello de botella</p>

                <div className="space-y-3">
                  {[
                    "+25% nuevos clientes",
                    "Equipo comercial: 1 → 3 personas",
                    "Fundador recuperó 20h/semana",
                  ].map((tag, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
