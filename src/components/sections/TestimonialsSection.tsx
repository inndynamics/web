import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote: "Implementamos el agente de cualificación de leads y en 3 meses duplicamos las conversiones. El ROI fue inmediato.",
    name: "Director Comercial",
    company: "Empresa del sector inmobiliario",
    sector: "Inmobiliario",
    result: "2x conversiones en 3 meses",
  },
  {
    quote: "El chatbot de atención 24/7 nos liberó de las llamadas repetitivas. Ahora el equipo se centra en pacientes, no en agenda.",
    name: "Directora de Clínica",
    company: "Red de clínicas dental",
    sector: "Salud",
    result: "70% reducción llamadas",
  },
  {
    quote: "La automatización de facturación eliminó errores y nos ahorró 20 horas semanales. Imprescindible.",
    name: "CFO",
    company: "E-commerce de moda",
    sector: "E-commerce",
    result: "20h/semana ahorradas",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-bcr">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Empresas que ya transformaron sus operaciones
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-dark-hover p-8 h-full flex flex-col">
                <p className="text-foreground italic leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-sm">— {t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{t.sector}</span>
                    <span className="text-xs bg-success/10 text-success px-2 py-1 rounded">{t.result}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
