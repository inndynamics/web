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
    <section id="metodologia" className="section-padding bg-background relative overflow-hidden">
      {/* Connecting line */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px">
        <div className="container-bcr h-full">
          <div className="h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
      </div>
      
      <div className="container-bcr relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Proceso Estructurado
          </span>
          <h2 className="text-h2-sm lg:text-h2">
            Cómo <span className="text-gradient-blue">Trabajamos</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {phases.map((phase, index) => (
            <div key={phase.number} className="relative group">
              {/* Phase card */}
              <div className="card-tech p-6 lg:p-8 h-full hover:border-primary/50 transition-colors">
                {/* Number badge */}
                <div className="absolute -top-4 left-6 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-bold shadow-glow text-sm">
                  Fase {phase.number}
                </div>
                
                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-4">{phase.duration}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {phase.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {task}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                    <p className="text-xs font-bold text-primary uppercase mb-1">Output:</p>
                    <p className="text-sm text-foreground">{phase.output}</p>
                  </div>
                </div>
              </div>
              
              {/* Connector arrow */}
              {index < phases.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-2 w-4 h-4 items-center justify-center z-20">
                  <div className="w-2 h-2 border-t-2 border-r-2 border-primary rotate-45" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
