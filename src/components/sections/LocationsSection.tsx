import { useState, useRef, useEffect } from "react";

// ================================
// CONFIGURACIÓN DE SEDES
// Modifica aquí los nombres y posiciones de cada ciudad
// Las coordenadas left/top son porcentajes respecto al mapa
// ================================
const locations = [
  {
    id: "sevilla",
    name: "Sevilla",
    left: 23,
    top: 68,
  },
  {
    id: "madrid",
    name: "Madrid",
    left: 26,
    top: 62,
  },
  {
    id: "andorra",
    name: "Andorra",
    left: 29,
    top: 55,
  },
  {
    id: "helsinki",
    name: "Helsinki",
    left: 63,
    top: 26,
  },
];

// ================================
// TEXTOS DE LA SECCIÓN
// ================================
const sectionTitle = "Nuestras Sedes";
const sectionDescription =
  "BCR Growth Partners opera desde varios hubs europeos para estar cerca de las empresas que acompañamos en su crecimiento.";

const LocationsSection = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMarkerHover = (locationId: string, event: React.MouseEvent | React.TouchEvent) => {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    
    if (containerRect) {
      setTooltipPosition({
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top,
      });
    }
    setActiveLocation(locationId);
  };

  const handleMarkerLeave = () => {
    setActiveLocation(null);
  };

  const handleMarkerClick = (locationId: string, event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    if (activeLocation === locationId) {
      setActiveLocation(null);
    } else {
      handleMarkerHover(locationId, event);
    }
  };

  // Close tooltip when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveLocation(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const activeLocationData = locations.find((loc) => loc.id === activeLocation);

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
        <div className="max-w-[900px] mx-auto">
          <div className="card-tech p-4 md:p-8 overflow-hidden">
            {/* Europe Map Container */}
            <div 
              ref={containerRef}
              className="relative w-full"
              style={{ maxWidth: "900px", margin: "0 auto" }}
            >
              {/* SVG del mapa de Europa - EXACTO como se proporciona */}
              <svg
                className="w-full h-auto block"
                viewBox="0 0 1000 800"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Fondo */}
                <rect width="100%" height="100%" fill="#F5F7FA" />

                {/* Mapa de Europa (contorno simplificado, sin fronteras internas ni nombres) */}
                <path
                  d="M120,520 L140,480 L160,470 L200,460 L230,440 L260,430 L300,430 L340,420 L360,410 L380,390 L390,360 L410,350 L430,340 L450,330 L470,320 L500,320 L530,330 L550,350 L560,380 L580,390 L600,400 L620,420 L640,440 L660,460 L690,470 L720,480 L740,500 L760,520 L770,550 L780,580 L770,610 L750,640 L720,660 L680,680 L640,690 L600,700 L560,705 L520,710 L480,710 L440,705 L400,695 L360,680 L330,660 L300,640 L270,620 L240,600 L210,580 L190,560 L170,540 Z"
                  fill="#D9E2EC"
                />
                {/* Península Escandinava / Norte */}
                <path
                  d="M600,150 L620,130 L650,120 L680,130 L700,150 L710,180 L705,210 L690,230 L670,240 L650,250 L630,250 L610,240 L600,220 L595,190 Z"
                  fill="#D9E2EC"
                />
                {/* Islas Reino Unido / Irlanda */}
                <path
                  d="M260,330 L270,310 L290,300 L310,305 L320,320 L315,340 L300,350 L280,350 Z"
                  fill="#D9E2EC"
                />
                <path
                  d="M230,360 L240,345 L255,340 L270,345 L275,360 L270,375 L255,380 L240,375 Z"
                  fill="#D9E2EC"
                />
                {/* Italia */}
                <path
                  d="M520,470 L540,480 L550,500 L555,520 L545,540 L530,550 L520,540 L515,520 L510,500 Z"
                  fill="#D9E2EC"
                />
                {/* Balcanes y Grecia */}
                <path
                  d="M580,500 L600,510 L620,520 L630,540 L625,560 L610,575 L595,580 L580,575 L570,560 L565,540 L570,520 Z"
                  fill="#D9E2EC"
                />
              </svg>

              {/* Marcadores interactivos */}
              {locations.map((location) => (
                <div
                  key={location.id}
                  data-city={location.name}
                  className="absolute w-[14px] h-[14px] rounded-full bg-[#0052a5] shadow-md cursor-pointer transition-transform duration-200 hover:scale-125"
                  style={{
                    left: `${location.left}%`,
                    top: `${location.top}%`,
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                  onMouseEnter={(e) => handleMarkerHover(location.id, e)}
                  onMouseLeave={handleMarkerLeave}
                  onClick={(e) => handleMarkerClick(location.id, e)}
                  onTouchStart={(e) => handleMarkerClick(location.id, e)}
                />
              ))}

              {/* Tooltip */}
              <div
                className="absolute px-[10px] py-[6px] bg-white rounded text-[12px] text-[#102a43] shadow-lg pointer-events-none whitespace-nowrap z-10 transition-opacity duration-150"
                style={{
                  left: tooltipPosition.x,
                  top: tooltipPosition.y,
                  transform: "translate(-50%, -120%)",
                  opacity: activeLocation ? 1 : 0,
                  boxShadow: "0 2px 6px rgba(15, 23, 42, 0.25)",
                }}
              >
                {activeLocationData?.name || ""}
              </div>
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
                <div className="w-3 h-3 rounded-full bg-[#0052a5] border-2 border-white shadow group-hover:scale-125 transition-transform" />
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