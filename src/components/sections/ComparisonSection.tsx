import ScrollReveal from "@/components/ScrollReveal";

const rows = [
  { bcr: "⚡ Ejecución en minutos, no días", trad: "🕒 Procesos manuales de semanas" },
  { bcr: "📊 Decisiones basadas en datos", trad: "📋 Decisiones por experiencia subjetiva" },
  { bcr: "🔄 Escalabilidad instantánea", trad: "👥 Limitadas por recursos humanos" },
  { bcr: "🎯 Personalización automatizada", trad: "📝 Personalización manual y limitada" },
  { bcr: "💰 Coste predecible y transparente", trad: "💸 Costes variables e impredecibles" },
  { bcr: "🤖 Disponibilidad 24/7/365", trad: "🕒 Solo en horario de oficina" },
  { bcr: "📈 ROI documentado y medible", trad: "❓ Resultados difíciles de medir" },
  { bcr: "🔗 Integración con tus herramientas", trad: "🔧 Trabajo en silos separados" },
];

const ComparisonSection = () => {
  return (
    <section className="section-padding">
      <div className="container-bcr max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ¿Por qué elegir IA sobre una agencia tradicional?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-bold text-primary bg-primary/5 rounded-tl-lg">B&CR Growth (IA)</th>
                  <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Agencias Tradicionales</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-card/50 transition-colors">
                    <td className="py-3 px-4 text-foreground">{r.bcr}</td>
                    <td className="py-3 px-4 text-muted-foreground">{r.trad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ComparisonSection;
