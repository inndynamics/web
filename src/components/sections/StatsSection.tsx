import CountUp from "@/components/CountUp";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { end: 79, suffix: "", label: "Agentes catalogados" },
  { end: 13, suffix: "", label: "Sectores cubiertos" },
  { end: 94, suffix: "%", prefix: "85-", label: "Margen bruto operativo" },
  { end: 40, suffix: "x", prefix: "Hasta ", label: "ROI máximo documentado" },
  { end: 24, suffix: "h", label: "Respuesta garantizada" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container-bcr">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {stats.map((s, i) => (
              <div key={i} className="text-center min-w-[120px]">
                <CountUp end={s.end} suffix={s.suffix} prefix={s.prefix} className="text-3xl md:text-4xl font-bold text-foreground" />
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StatsSection;
