const differentiators = [
  {
    number: "01",
    title: "Resultados, No Horas",
    description: "Modelo success-based con comisión por resultados. Cobramos cuando tú ganas. Alineación total de intereses entre consultor y cliente",
    highlight: "Success-based",
  },
  {
    number: "02",
    title: "Dos Disciplinas, Un Equipo",
    description: "Sales + Operations bajo mismo techo. Sinergia entre comercial y operaciones. Sin fricciones entre consultores diferentes",
    highlight: "Sinergia total",
  },
  {
    number: "03",
    title: "Socios Senior, Siempre",
    description: "Trabajas directamente con los socios fundadores. No hay juniors 'haciendo el trabajo'. Responsabilidad y expertise senior en cada proyecto",
    highlight: "Expertise directo",
  },
  {
    number: "04",
    title: "Especialización en Tu Tamaño",
    description: "Expertos en PYMES 500K-5M€. No startups sin recursos, no corporaciones complejas. Soluciones tailored específicas para tu realidad empresarial",
    highlight: "PYMES 500K-5M€",
  },
];

const DifferentiatorsSection = () => {
  return (
    <section className="section-padding bg-gradient-tech relative overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary-hover/10 rounded-full blur-3xl" />
      
      <div className="container-bcr relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary-hover text-sm font-medium mb-4 border border-primary/30">
            Diferenciadores
          </span>
          <h2 className="text-h2-sm lg:text-h2 text-primary-foreground">
            Por Qué Somos <span className="text-primary-hover">Diferentes</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((item, idx) => (
            <div 
              key={item.number} 
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              
              <div className="relative bg-dark-lighter/50 backdrop-blur-sm border border-primary/20 p-8 rounded-xl hover:border-primary/50 transition-all">
                {/* Number */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                    <span className="text-lg font-bold text-primary">{item.number}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                    {item.highlight}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-primary-foreground mb-3 group-hover:text-primary-hover transition-colors">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
