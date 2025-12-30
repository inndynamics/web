const differentiators = [
  {
    number: "01",
    title: "Resultados, No Horas",
    description: "Modelo success-based con comisión por resultados. Cobramos cuando tú ganas. Alineación total de intereses entre consultor y cliente",
  },
  {
    number: "02",
    title: "Dos Disciplinas, Un Equipo",
    description: "Sales + Operations bajo mismo techo. Sinergia entre comercial y operaciones. Sin fricciones entre consultores diferentes",
  },
  {
    number: "03",
    title: "Socios Senior, Siempre",
    description: "Trabajas directamente con los socios fundadores. No hay juniors 'haciendo el trabajo'. Responsabilidad y expertise senior en cada proyecto",
  },
  {
    number: "04",
    title: "Especialización en Tu Tamaño",
    description: "Expertos en PYMES 500K-5M€. No startups sin recursos, no corporaciones complejas. Soluciones tailored específicas para tu realidad empresarial",
  },
];

const DifferentiatorsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-bcr">
        <h2 className="text-h2-sm lg:text-h2 text-center mb-16">
          Por Qué Somos Diferentes
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {differentiators.map((item) => (
            <div key={item.number} className="relative p-8">
              <div className="text-9xl font-thin text-gray-light select-none absolute -top-4 -left-4 z-0">
                {item.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
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
