import { useState, useRef, useEffect } from "react";

// ================================
// CONFIGURACIÓN DE SEDES
// Modifica aquí los nombres y posiciones de cada ciudad
// Las coordenadas left/top son porcentajes respecto al mapa
// ================================
import europeMap from "@/assets/europe-map.png";

const locations = [
  {
    id: "sevilla",
    name: "Sevilla",
    left: 28,
    top: 85,
  },
  {
    id: "madrid",
    name: "Madrid",
    left: 30,
    top: 77,
  },
  {
    id: "andorra",
    name: "Andorra",
    left: 38,
    top: 72,
  },
  {
    id: "helsinki",
    name: "Helsinki",
    left: 60,
    top: 20,
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
              {/* Imagen real del mapa de Europa */}
              <img
                src={europeMap}
                alt="Mapa de Europa"
                className="w-full h-auto block rounded-lg"
              />

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