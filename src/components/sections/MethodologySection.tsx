const phases = [
  {
    number: "01",
    title: "Discovery",
    duration: "Semanas 1-2",
    tasks: [
      "Kickoff ejecutivo",
      "Recopilación de datos",
      "Shadowing operacional",
      "Análisis profundo",
    ],
    output: "Diagnóstico completo + Roadmap estratégico",
  },
  {
    number: "02",
    title: "Diseño",
    duration: "Semanas 3-4",
    tasks: [
      "Sales Playbook Design",
      "Arquitectura de procesos",
      "Selección de tech stack",
      "KPI dashboard design",
    ],
    output: "Documentación completa + Plan implementación",
  },
  {
    number: "03",
    title: "Implementación",
    duration: "Semanas 5-10",
    tasks: [
      "Configuración de sistemas",
      "Automatizaciones en producción",
      "Integración CRM-ERP",
      "Formación de equipo",
    ],
    output: "Sistemas operativos + Equipo capacitado",
  },
  {
    number: "04",
    title: "Optimización",
    duration: "Semanas 11-12",
    tasks: [
      "Ajustes y refinamiento",
      "Validación de resultados",
      "Handoff y documentación",
      "Soporte de transición",
    ],
    output: "Empresa transformada y autónoma",
  },
];

const MethodologySection = () => {
  return (
    <section id="metodologia" className="section-padding bg-background">
      <div className="container-bcr">
        <h2 className="text-h2-sm lg:text-h2 text-center mb-20">
          Cómo Trabajamos
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <div key={phase.number} className="relative">
              <div className="text-8xl font-thin text-gray-light select-none absolute -top-8 -left-4 z-0">
                {phase.number}
              </div>
              
              <div className="relative z-10 pt-8">
                <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{phase.duration}</p>
                
                <ul className="space-y-2 mb-6">
                  {phase.tasks.map((task, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      • {task}
                    </li>
                  ))}
                </ul>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xs font-semibold text-primary uppercase mb-1">Output:</p>
                  <p className="text-sm text-foreground">{phase.output}</p>
                </div>
              </div>
              
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
