import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { num: "01", title: "Definición de Objetivos", desc: "Identificamos tus puntos de dolor específicos, procesos a automatizar y KPIs de éxito. Sin compromisos, sin tecnicismos innecesarios." },
  { num: "02", title: "Auditoría de Datos y Sistemas", desc: "Verificamos tus sistemas actuales, herramientas existentes y gobernanza de datos para diseñar la integración perfecta." },
  { num: "03", title: "Piloto Enfocado", desc: "Implementamos 1-2 agentes en un caso controlado para demostrar ROI real antes de escalar. Resultados visibles en semanas." },
  { num: "04", title: "Optimización Continua", desc: "Escalado progresivo, mejora constante con los datos reales y adaptación a nuevas necesidades de tu negocio." },
];

const OnboardingSection = () => {
  return (
    <section className="section-padding">
      <div className="container-bcr">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            De la consulta a los resultados en 4 pasos
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative">
                <span className="text-6xl font-black text-primary/10 block mb-2">{s.num}</span>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-3 w-6 h-px bg-border" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnboardingSection;
