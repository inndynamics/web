import ScrollReveal from "@/components/ScrollReveal";
import { Users, Workflow, BarChart3, Zap, ArrowDown, Sparkles } from "lucide-react";

const pillars = [
  { icon: Sparkles, title: "Personalidades Únicas", desc: "Cada agente tiene su propio estilo y especialización" },
  { icon: Workflow, title: "Flujos Paso a Paso", desc: "Procesos estructurados y metodologías probadas" },
  { icon: BarChart3, title: "Métricas Claras", desc: "Resultados medibles y objetivos específicos" },
  { icon: Zap, title: "Autonomía Operativa", desc: "Ejecutan tareas complejas sin supervisión constante" },
];

const agents = [
  { name: "Growth Hacker", role: "Crecimiento Acelerado", desc: "Desarrolla estrategias de crecimiento, experimentos A/B y optimización de canales de adquisición." },
  { name: "Content Creator", role: "Voz de Marca Consistente", desc: "Genera contenido multicanal con voz de marca coherente para blogs, emails y redes sociales." },
  { name: "Twitter/X Engager", role: "Engagement Estratégico", desc: "Diseña estrategias de engagement, crea hilos virales y fomenta la construcción de comunidad." },
  { name: "TikTok Strategist", role: "Video Contenido Viral", desc: "Especialista en video corto, identifica tendencias y optimiza para algoritmos." },
  { name: "Instagram Curator", role: "Estética y Estrategia Visual", desc: "Gestiona la estética visual y estrategia de contenido para Instagram, incluyendo stories, reels y curación del feed." },
  { name: "Reddit Community Builder", role: "Comunidades Auténticas", desc: "Fomenta el engagement auténtico en comunidades de Reddit, construyendo presencia sin marketing directo." },
  { name: "App Store Optimizer", role: "Visibilidad en Stores", desc: "Optimiza fichas de aplicaciones mediante investigación de keywords y mejora de conversión." },
  { name: "Social Media Strategist", role: "Estrategia Omnicanal", desc: "Desarrolla estrategia integrada para todas las plataformas, asegurando coherencia y máximo impacto." },
];

const methodology = [
  { step: "Agente de Estrategia", desc: "Planifica y define objetivos" },
  { step: "Agente de Decisión", desc: "Evalúa y determina acciones" },
  { step: "Agente Creativo", desc: "Genera contenido personalizado" },
  { step: "Agente de Acción", desc: "Ejecuta y orquesta entregas" },
];

const cases = [
  { title: "Lanzamiento de Campaña Integral", desc: "El Campaign Orchestrator convierte briefs en activos listos, genera copias multicanal y crea códigos de seguimiento automáticamente.", metric: "De 2 semanas a 2 días ⚡" },
  { title: "Optimización de Landing Pages", desc: "Control de calidad automatizado, pruebas A/B estructuradas y generación de variantes de anuncios para máximo rendimiento.", metric: "Hasta +40% conversiones 📈" },
  { title: "Enriquecimiento de Leads", desc: "Limpieza automática de datos, enriquecimiento firmográfico y enrutamiento inteligente al equipo de ventas.", metric: "90% menos trabajo manual 🤖" },
];

const AgencySection = () => {
  return (
    <section id="agency" className="section-padding section-alt">
      <div className="container-bcr">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-primary tracking-[0.3em] uppercase mb-3">THE AGENCY</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tu equipo de Marketing impulsado por IA</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un sistema de múltiples agentes especializados con personalidades únicas, flujos de trabajo paso a paso y métricas claras, diseñados para ejecutar tareas operativas complejas de marketing de forma autónoma.
            </p>
          </div>
        </ScrollReveal>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {pillars.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-white rounded-2xl border border-border p-6 text-center shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm mb-1">{p.title}</h4>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Agent Catalog */}
        <ScrollReveal>
          <h3 className="text-xl font-bold mb-6">Catálogo de Agentes de Marketing</h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {agents.map((a, i) => (
            <ScrollReveal key={i} delay={i * 0.03}>
              <div className="card-dark-hover p-5 bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold text-sm">{a.name}</h4>
                </div>
                <p className="text-xs text-primary font-medium mb-2">{a.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Methodology */}
        <ScrollReveal>
          <h3 className="text-xl font-bold mb-2">Colaboración coordinada</h3>
          <p className="text-muted-foreground mb-8 text-sm">Replica la dinámica de un equipo humano</p>
        </ScrollReveal>
        <div className="flex flex-col md:flex-row items-stretch gap-4 mb-16">
          {methodology.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="flex-1">
              <div className="bg-white rounded-2xl border border-border p-6 h-full relative shadow-sm">
                <span className="text-xs font-mono text-primary/50">0{i + 1}</span>
                <h4 className="font-semibold mt-2 text-sm">{m.step}</h4>
                <p className="text-xs text-muted-foreground mt-1">{m.desc}</p>
                {i < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowDown className="w-4 h-4 text-primary/30 rotate-[-90deg]" />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mb-12 italic">
          Estos agentes negocian tareas, delegan responsabilidades y aprenden unos de otros.
        </p>

        {/* Use Cases */}
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-dark-hover p-6 bg-white">
                <h4 className="font-semibold mb-3">{c.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{c.desc}</p>
                <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-2 rounded-lg inline-block">
                  {c.metric}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencySection;
