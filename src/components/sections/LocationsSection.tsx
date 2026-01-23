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
    left: 22,
    top: 73,
  },
  {
    id: "madrid",
    name: "Madrid",
    left: 24,
    top: 66,
  },
  {
    id: "andorra",
    name: "Andorra",
    left: 31,
    top: 60,
  },
  {
    id: "helsinki",
    name: "Helsinki",
    left: 60,
    top: 24,
  },
];

// ================================
// TEXTOS DE LA SECCIÓN
// ================================
const sectionTitle = "Nuestras Sedes";
const sectionDescription =
  "BCR Growth Partners opera desde varios hubs europeos para estar cerca de las empresas que acompañamos en su crecimiento.";

interface LocationMarkerProps {
  location: typeof locations[0];
  isActive: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const LocationMarker = ({ location, isActive, onToggle, onClose }: LocationMarkerProps) => {
  return (
    <div
      className="absolute z-10 cursor-pointer"
      style={{
        left: `${location.left}%`,
        top: `${location.top}%`,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={onToggle}
      onMouseLeave={onClose}
      onClick={onToggle}
      data-city={location.name}
    >
      {/* Marcador circular con borde blanco */}
      <div
        className={`
          w-3 h-3 md:w-4 md:h-4 rounded-full 
          bg-primary
          border-2 border-white
          shadow-lg
          transition-all duration-300 ease-out
          ${isActive ? "scale-150" : "hover:scale-125"}
        `}
      />

      {/* Tooltip */}
      <div
        className={`
          absolute left-1/2 -translate-x-1/2 bottom-full mb-3
          px-3 py-1.5 rounded-lg
          bg-foreground text-background
          whitespace-nowrap text-sm font-medium
          shadow-xl
          transition-all duration-200
          ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
        `}
      >
        {location.name}
        {/* Flecha del tooltip */}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-foreground" />
      </div>
    </div>
  );
};

// ================================
// MAPA SVG DE EUROPA - Real geographic outline
// Basado en coordenadas geográficas reales simplificadas
// ================================
const EuropeMapSVG = () => (
  <svg
    viewBox="0 0 800 600"
    className="w-full h-auto"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    style={{ background: "#F5F7FA" }}
  >
    {/* Portugal */}
    <path
      d="M142,380 L152,365 L158,340 L155,320 L148,310 L142,320 L138,350 L140,370 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* España (Spain) */}
    <path
      d="M155,320 L158,340 L152,365 L160,385 L175,405 L195,415 L220,420 L250,415 L275,400 L285,380 L280,355 L270,340 L250,330 L235,315 L220,310 L200,305 L180,308 L165,315 L155,320 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Francia (France) */}
    <path
      d="M235,315 L250,330 L270,340 L285,335 L305,320 L320,300 L335,280 L340,260 L330,245 L310,240 L290,245 L270,255 L250,270 L235,285 L225,300 L235,315 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Reino Unido (United Kingdom) */}
    <path
      d="M255,195 L265,180 L270,160 L265,140 L255,125 L240,120 L225,130 L220,150 L225,175 L235,195 L250,205 L255,195 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Escocia parte */}
    <path
      d="M240,120 L250,105 L255,90 L248,80 L235,85 L228,100 L230,115 L240,120 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Irlanda (Ireland) */}
    <path
      d="M200,155 L215,145 L225,155 L225,175 L215,190 L200,195 L188,185 L185,170 L192,158 L200,155 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Bélgica y Países Bajos */}
    <path
      d="M310,240 L325,230 L340,225 L350,235 L345,250 L330,255 L315,250 L310,240 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Alemania (Germany) */}
    <path
      d="M340,225 L360,215 L380,210 L400,220 L415,240 L420,265 L410,290 L390,300 L365,295 L345,280 L340,260 L340,240 L340,225 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Polonia (Poland) */}
    <path
      d="M400,220 L425,210 L455,215 L485,230 L495,255 L490,280 L470,295 L440,295 L415,285 L405,265 L400,240 L400,220 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Italia (Italy) */}
    <path
      d="M365,295 L375,310 L385,330 L390,355 L395,380 L390,410 L375,430 L360,440 L350,425 L355,400 L365,370 L370,345 L365,320 L360,305 L365,295 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Sicilia */}
    <path
      d="M375,450 L390,445 L400,455 L395,468 L380,470 L370,460 L375,450 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Cerdeña */}
    <path
      d="M345,400 L355,395 L362,408 L358,425 L348,430 L340,420 L342,405 L345,400 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Córcega */}
    <path
      d="M350,365 L358,358 L365,370 L362,385 L352,390 L345,380 L350,365 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Suiza y Austria */}
    <path
      d="M340,280 L365,275 L390,280 L405,290 L400,305 L380,310 L355,305 L340,295 L340,280 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* República Checa, Eslovaquia, Hungría */}
    <path
      d="M405,265 L425,260 L450,270 L470,285 L475,305 L460,320 L435,325 L410,315 L400,300 L405,280 L405,265 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Rumania */}
    <path
      d="M475,305 L500,295 L530,300 L550,320 L555,350 L540,375 L510,380 L480,365 L470,340 L475,315 L475,305 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Bulgaria */}
    <path
      d="M510,380 L540,375 L560,390 L565,415 L550,435 L520,440 L495,425 L490,400 L500,385 L510,380 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Grecia (Greece) */}
    <path
      d="M495,425 L510,445 L515,470 L508,495 L490,510 L465,505 L450,485 L455,460 L470,445 L485,435 L495,425 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Croacia, Serbia, Bosnia, etc. */}
    <path
      d="M410,315 L435,325 L455,340 L460,365 L450,390 L425,400 L400,390 L385,365 L390,340 L400,325 L410,315 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Dinamarca */}
    <path
      d="M360,190 L375,180 L385,190 L380,210 L365,215 L355,205 L360,190 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Noruega (Norway) */}
    <path
      d="M365,50 L380,40 L400,35 L420,45 L435,70 L445,100 L450,140 L445,180 L430,200 L410,190 L395,165 L385,130 L380,95 L375,65 L365,50 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Suecia (Sweden) */}
    <path
      d="M420,45 L440,55 L455,80 L465,120 L470,160 L465,200 L455,230 L440,240 L425,225 L420,190 L430,150 L435,110 L430,75 L420,55 L420,45 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Finlandia (Finland) */}
    <path
      d="M465,40 L490,30 L520,40 L545,65 L560,100 L565,145 L555,190 L535,220 L510,230 L485,215 L470,185 L465,145 L468,100 L470,60 L465,40 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Estonia, Letonia, Lituania (Baltic States) */}
    <path
      d="M485,215 L510,210 L530,225 L535,250 L525,275 L500,280 L480,265 L478,240 L485,215 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Bielorrusia y Ucrania occidental */}
    <path
      d="M530,225 L560,215 L600,225 L640,250 L660,290 L655,340 L630,380 L590,395 L550,385 L520,360 L510,320 L520,280 L530,250 L530,225 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Rusia occidental (parte visible) */}
    <path
      d="M560,100 L600,80 L660,90 L720,120 L760,170 L775,230 L770,300 L745,360 L700,400 L650,405 L610,380 L580,340 L570,290 L575,240 L585,190 L580,140 L560,100 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
    
    {/* Islandia (Iceland) */}
    <path
      d="M120,60 L150,50 L180,55 L195,75 L188,95 L165,105 L135,100 L115,85 L118,68 L120,60 Z"
      fill="#D9E2EC"
      stroke="#C1CCD6"
      strokeWidth="0.5"
    />
  </svg>
);

const LocationsSection = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative gradients */}
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

        {/* Contenedor del mapa */}
        <div className="relative w-full max-w-[900px] mx-auto">
          <div className="card-tech p-4 md:p-8 overflow-hidden">
            {/* Mapa SVG con marcadores */}
            <div className="relative">
              <EuropeMapSVG />
              
              {/* Marcadores interactivos */}
              {locations.map((location) => (
                <LocationMarker
                  key={location.id}
                  location={location}
                  isActive={activeLocation === location.id}
                  onToggle={() => setActiveLocation(location.id)}
                  onClose={() => setActiveLocation(null)}
                />
              ))}
            </div>
          </div>

          {/* Lista de ciudades */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {locations.map((location) => (
              <div
                key={location.id}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group cursor-pointer"
                onMouseEnter={() => setActiveLocation(location.id)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                <div className="w-3 h-3 rounded-full bg-primary border-2 border-white shadow group-hover:scale-125 transition-transform" />
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