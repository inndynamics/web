import { useState } from "react";

// ================================
// CONFIGURACIÓN DE SEDES
// Modifica aquí los nombres y posiciones de cada ciudad
// Las coordenadas left/top son porcentajes respecto al mapa
// ================================
const locations = [
  {
    id: "sevilla",
    name: "Sevilla",
    left: 27,
    top: 72,
  },
  {
    id: "madrid",
    name: "Madrid",
    left: 30,
    top: 65,
  },
  {
    id: "andorra",
    name: "Andorra",
    left: 35,
    top: 58,
  },
  {
    id: "helsinki",
    name: "Helsinki",
    left: 58,
    top: 18,
  },
];

// ================================
// TEXTOS DE LA SECCIÓN
// Modifica aquí el título y descripción
// ================================
const sectionTitle = "Nuestras Sedes";
const sectionDescription =
  "BCR Growth Partners opera desde varios hubs europeos para estar cerca de las empresas que acompañamos en su crecimiento.";

// ================================
// COLORES DE LOS MARCADORES
// Modifica aquí los colores de los puntos
// ================================
const markerStyles = {
  base: "bg-primary", // Color base del marcador
  hover: "bg-primary-hover", // Color en hover
  ring: "ring-primary/30", // Color del anillo exterior
};

interface LocationMarkerProps {
  location: typeof locations[0];
  isActive: boolean;
  onToggle: () => void;
}

const LocationMarker = ({ location, isActive, onToggle }: LocationMarkerProps) => {
  return (
    <div
      className="absolute z-10 group cursor-pointer"
      style={{
        left: `${location.left}%`,
        top: `${location.top}%`,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
      onClick={onToggle}
      data-city={location.name}
    >
      {/* Marcador circular */}
      <div
        className={`
          w-3 h-3 md:w-4 md:h-4 rounded-full 
          ${markerStyles.base}
          ring-4 ${markerStyles.ring}
          transition-all duration-300 ease-out
          ${isActive ? "scale-150 ring-8" : "hover:scale-125"}
          shadow-glow
        `}
      />

      {/* Tooltip */}
      <div
        className={`
          absolute left-1/2 -translate-x-1/2 bottom-full mb-2
          px-3 py-1.5 rounded-lg
          bg-card border border-border shadow-lg
          whitespace-nowrap text-sm font-medium text-foreground
          transition-all duration-200
          ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
        `}
      >
        {location.name}
        {/* Flecha del tooltip */}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card" />
      </div>
    </div>
  );
};

const LocationsSection = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setActiveLocation((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container-bcr relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Presencia Europea
          </span>
          <h2 className="text-h2-sm lg:text-h2 mb-4">
            {sectionTitle.split(" ")[0]}{" "}
            <span className="text-gradient-blue">{sectionTitle.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </div>

        {/* Mapa contenedor */}
        <div className="max-w-4xl mx-auto">
          <div className="relative card-tech p-6 md:p-10">
            {/* SVG del mapa de Europa estilizado */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10]">
              <svg
                viewBox="0 0 800 500"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Fondo del mapa */}
                <rect width="800" height="500" fill="transparent" />
                
                {/* Europa simplificada - Contorno estilizado */}
                <path
                  d="M180 380 L200 400 L220 390 L250 410 L280 380 L300 390 L320 370 L340 380 L360 360 L380 370 L400 350 L420 360 L440 340 L460 350 L480 330 L500 340 L520 320 L540 330 L560 310 L580 320 L600 300 L620 280 L640 260 L620 240 L600 250 L580 230 L560 240 L540 220 L520 210 L500 200 L480 180 L460 170 L440 160 L420 150 L400 140 L380 130 L360 120 L340 110 L320 100 L300 95 L280 90 L260 95 L240 100 L220 110 L200 120 L180 140 L160 160 L150 180 L145 200 L150 220 L155 240 L160 260 L165 280 L170 300 L175 320 L180 340 L180 360 Z"
                  className="fill-muted/30 stroke-border"
                  strokeWidth="2"
                />
                
                {/* Península Ibérica */}
                <path
                  d="M150 280 L170 300 L180 320 L200 340 L220 360 L250 380 L280 390 L300 380 L290 350 L270 320 L250 290 L230 260 L200 250 L170 260 L150 280 Z"
                  className="fill-muted/40 stroke-border"
                  strokeWidth="2"
                />
                
                {/* Escandinavia */}
                <path
                  d="M420 50 L430 70 L440 90 L450 110 L460 130 L480 150 L500 140 L510 120 L500 100 L490 80 L480 60 L460 50 L440 45 L420 50 Z"
                  className="fill-muted/40 stroke-border"
                  strokeWidth="2"
                />
                
                {/* Finlandia */}
                <path
                  d="M500 40 L510 60 L530 80 L550 90 L560 110 L550 130 L530 140 L510 130 L500 110 L495 90 L490 70 L500 40 Z"
                  className="fill-muted/40 stroke-border"
                  strokeWidth="2"
                />
                
                {/* Italia */}
                <path
                  d="M380 260 L390 280 L400 300 L410 320 L420 340 L410 360 L390 350 L380 330 L375 310 L370 290 L375 270 L380 260 Z"
                  className="fill-muted/40 stroke-border"
                  strokeWidth="2"
                />
                
                {/* Reino Unido */}
                <path
                  d="M250 140 L260 160 L270 180 L280 200 L275 220 L260 230 L245 220 L240 200 L245 180 L250 160 L250 140 Z"
                  className="fill-muted/40 stroke-border"
                  strokeWidth="2"
                />
                
                {/* Irlanda */}
                <path
                  d="M220 160 L230 175 L235 195 L225 210 L210 200 L205 180 L210 165 L220 160 Z"
                  className="fill-muted/40 stroke-border"
                  strokeWidth="2"
                />
                
                {/* Puntos decorativos de ciudades adicionales (sin interacción) */}
                <circle cx="350" cy="200" r="3" className="fill-muted-foreground/20" />
                <circle cx="400" cy="220" r="3" className="fill-muted-foreground/20" />
                <circle cx="320" cy="250" r="3" className="fill-muted-foreground/20" />
                <circle cx="450" cy="180" r="3" className="fill-muted-foreground/20" />
                <circle cx="380" cy="180" r="3" className="fill-muted-foreground/20" />
                <circle cx="260" cy="170" r="3" className="fill-muted-foreground/20" />
                
                {/* Líneas de conexión decorativas */}
                <line x1="220" y1="360" x2="240" y2="325" className="stroke-primary/20" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="240" y1="325" x2="280" y2="290" className="stroke-primary/20" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="280" y1="290" x2="460" y2="100" className="stroke-primary/20" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              {/* Marcadores interactivos */}
              {locations.map((location) => (
                <LocationMarker
                  key={location.id}
                  location={location}
                  isActive={activeLocation === location.id}
                  onToggle={() => handleToggle(location.id)}
                />
              ))}
            </div>
          </div>

          {/* Lista de ciudades en móvil */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {locations.map((location) => (
              <div
                key={location.id}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group cursor-pointer"
                onMouseEnter={() => setActiveLocation(location.id)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                <div className={`w-3 h-3 rounded-full ${markerStyles.base} group-hover:scale-125 transition-transform`} />
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {location.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
