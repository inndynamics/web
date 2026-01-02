const team = [
  {
    name: "Alberto Diaz Carranza",
    role: "Partner & CEO",
    description: "Lidera la visión estratégica y el crecimiento de B&Cr. Experto en transformación empresarial y desarrollo de negocio con amplia experiencia en el ecosistema empresarial andaluz.",
    quote: "El crecimiento sostenible empieza por una estrategia clara",
  },
  {
    name: "Joaquín Benavente Barragán",
    role: "Partner & Sales Director",
    description: "Especialista en sistemas de ventas y business development. Experto en profesionalización comercial para PYMES. Red estratégica en banca, fondos PE y empresarios andaluces.",
    quote: "No vendemos teoría, instalamos sistemas que funcionan",
  },
  {
    name: "Pedro Ros Álvarez",
    role: "Partner & COO",
    description: "Responsable de operaciones y eficiencia. Especialista en automatización, IA y transformación digital. Background en BI, RPA e integración de sistemas.",
    quote: "Convertimos procesos manuales en máquinas de eficiencia",
  },
];

const TeamSection = () => {
  return (
    <section id="equipo" className="section-padding bg-background">
      <div className="container-bcr">
        <h2 className="text-h2-sm lg:text-h2 text-center mb-16">
          Quiénes Somos
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <div key={idx} className="text-center">
              <div className="w-40 h-40 lg:w-48 lg:h-48 bg-gray-light rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-muted-foreground">
                  {member.name.charAt(0)}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-4">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {member.description}
              </p>
              <blockquote className="text-lg italic text-foreground">
                "{member.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
