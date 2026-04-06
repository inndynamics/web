import ScrollReveal from "@/components/ScrollReveal";

const topAgents = [
  { rank: 1, name: "RevenueBoost", sector: "E-commerce", price: "800-1.5K€/mes", roi: "40x", star: true },
  { rank: 2, name: "AutoLeadQual", sector: "Automotive", price: "1K-2K€/mes", roi: "15x", star: false },
  { rank: 3, name: "TrackBot", sector: "Logística", price: "600-1K€/mes", roi: "13x", star: false },
  { rank: 4, name: "LeadHunter", sector: "Inmobiliario", price: "500-900€/mes", roi: "12x", star: false },
  { rank: 5, name: "IntakeLegal", sector: "Legal", price: "500-900€/mes", roi: "9x", star: false },
  { rank: 6, name: "Brain Hub", sector: "Knowledge", price: "1.5K-3K€/mes", roi: "8x", star: false },
  { rank: 7, name: "SupportAI L1", sector: "SaaS/Tech", price: "1.5K-3.5K€/mes", roi: "8x", star: false },
  { rank: 8, name: "ChurnGuard", sector: "SaaS/Tech", price: "1K-2K€/mes", roi: "20x", star: false },
  { rank: 9, name: "RecepcionIA", sector: "Salud", price: "400-600€/mes", roi: "2.8x", star: false },
  { rank: 10, name: "CourseAdvisor", sector: "Educación", price: "500-800€/mes", roi: "20x", star: false },
];

const TopAgentsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-bcr">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Top 10 Agentes por Facilidad × ROI</h2>
            <p className="text-sm text-muted-foreground">Selección estratégica para lanzamiento inmediato. Datos basados en benchmarks de mercado y pruebas piloto 2025-2026.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-muted-foreground">#</th>
                  <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Agente</th>
                  <th className="text-left py-4 px-4 font-semibold text-muted-foreground hidden sm:table-cell">Sector</th>
                  <th className="text-left py-4 px-4 font-semibold text-muted-foreground hidden md:table-cell">Precio/Mes</th>
                  <th className="text-right py-4 px-4 font-semibold text-muted-foreground">ROI</th>
                </tr>
              </thead>
              <tbody>
                {topAgents.map((a) => (
                  <tr key={a.rank} className={`border-b border-border/50 transition-colors hover:bg-card ${a.rank <= 3 ? "bg-card/50" : ""}`}>
                    <td className="py-4 px-4">
                      <span className={`font-mono font-bold ${a.rank <= 3 ? "text-primary" : "text-muted-foreground"}`}>
                        {a.rank}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-semibold">
                      {a.name} {a.star && <span className="text-yellow-400">★</span>}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground hidden sm:table-cell">{a.sector}</td>
                    <td className="py-4 px-4 font-mono text-muted-foreground hidden md:table-cell">{a.price}</td>
                    <td className="py-4 px-4 text-right">
                      <span className="font-mono font-bold text-success">{a.roi}</span>
                    </td>
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

export default TopAgentsSection;
