const team = [{
  name: "Alberto Diaz Carranza",
  role: "Partner & CEO",
  description: "Lidera la visión estratégica y el crecimiento de B&Cr. Experto en transformación empresarial y desarrollo de negocio con amplia experiencia en el ecosistema empresarial andaluz.",
  quote: "El crecimiento sostenible empieza por una estrategia clara"
}, {
  name: "Joaquín Benavente Barragán",
  role: "Partner & Sales Director",
  description: "Especialista en sistemas de ventas y business development. Experto en profesionalización comercial para PYMES. Red estratégica en banca, fondos PE y empresarios andaluces.",
  quote: "No vendemos teoría, instalamos sistemas que funcionan"
}, {
  name: "Pedro Roas Álvarez",
  role: "Partner & COO",
  description: "Responsable de operaciones y eficiencia. Especialista en automatización, IA y transformación digital. Background en BI, RPA e integración de sistemas.",
  quote: "Convertimos procesos manuales en máquinas de eficiencia"
}];
const TeamSection = () => {
  return (
    <section id="equipo" className="section-padding bg-background">
      <div className="container-bcr">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestro Equipo
          </span>
          <h2 className="text-h2-sm lg:text-h2">
            Los <span className="text-gradient-blue">Partners</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <div key={idx} className="card-tech-glow p-8 text-center group">
              <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">
                  {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {member.description}
              </p>
              <p className="text-sm italic text-muted-foreground/80">"{member.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;