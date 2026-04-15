import { useState, useRef, useEffect } from "react";
import { MapPin } from "lucide-react";
import europeMap from "@/assets/europe-map.png";
import MapMarker from "@/components/map/MapMarker";
import ConnectionLines from "@/components/map/ConnectionLines";

const locations = [
  { id: "sevilla", name: "Sevilla", country: "España", left: 28, top: 85 },
  { id: "madrid", name: "Madrid", country: "España", left: 31, top: 78 },
  { id: "andorra", name: "Andorra", country: "Andorra", left: 38, top: 72 },
  { id: "helsinki", name: "Helsinki", country: "Finlandia", left: 61, top: 28 },
];

const sectionTitle = "Nuestras Sedes";
const sectionDescription =
  "BCR Growth Partners opera desde varios hubs europeos para estar cerca de las empresas que acompañamos en su crecimiento.";

const LocationsSection = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const activateTooltip = (locationId: string, element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (containerRect) {
      setTooltipPosition({
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top,
      });
    }
    setActiveLocation(locationId);
  };

  const handleCityButtonEnter = (locationId: string) => {
    const location = locations.find((loc) => loc.id === locationId);
    if (location && containerRef.current) {
      const markerX = (location.left / 100) * containerRef.current.offsetWidth;
      const markerY = (location.top / 100) * containerRef.current.offsetHeight;
      setTooltipPosition({ x: markerX, y: markerY });
    }
    setActiveLocation(locationId);
  };

  const handleMarkerClick = (locationId: string, event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    if (activeLocation === locationId) {
      setActiveLocation(null);
    } else {
      activateTooltip(locationId, event.currentTarget as HTMLElement);
    }
  };

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
            <span className="text-gradient-blue">
              {sectionTitle.split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </div>

        {/* Map + Cards layout */}
        <div className="max-w-[700px] mx-auto">
          {/* Dark tech map container */}
          <div
            className="relative rounded-2xl overflow-hidden border border-primary/20"
            style={{
              background:
                "linear-gradient(135deg, hsl(222 47% 8%) 0%, hsl(222 40% 12%) 50%, hsl(220 40% 15%) 100%)",
              boxShadow:
                "0 0 60px hsl(217 91% 60% / 0.08), 0 20px 60px hsl(222 47% 8% / 0.5)",
            }}
          >
            {/* Top bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-primary/10">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <div className="ml-3 flex items-center gap-2 text-xs text-muted-foreground/60 font-mono">
                <MapPin size={12} />
                <span>bcr-network.europe</span>
              </div>
              {/* Live indicator */}
              <div className="ml-auto flex items-center gap-2">
                <div className="relative flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] text-green-400/80 font-mono uppercase tracking-wider">
                    Live
                  </span>
                </div>
              </div>
            </div>

            {/* Map content */}
            <div className="p-4 md:p-8">
              <div
                ref={containerRef}
                className="relative w-full"
                style={{ maxWidth: "900px", margin: "0 auto" }}
              >
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 z-[0] rounded-lg opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(217 91% 60% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 60% / 0.05) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Map image with overlay */}
                <div className="relative">
                  <img
                    src={europeMap}
                    alt="Mapa de Europa"
                    className="w-full h-auto block rounded-lg relative z-[1]"
                    style={{
                      filter: "brightness(0.85) contrast(1.1) saturate(0.9)",
                      mixBlendMode: "luminosity",
                      opacity: 0.7,
                    }}
                  />
                  {/* Blue tint overlay */}
                  <div
                    className="absolute inset-0 rounded-lg z-[1]"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(217 91% 60% / 0.08) 0%, hsl(222 47% 8% / 0.3) 100%)",
                    }}
                  />
                </div>

                {/* Connection lines */}
                <ConnectionLines
                  locations={locations}
                  activeLocation={activeLocation}
                />

                {/* Animated markers */}
                {locations.map((location) => (
                  <MapMarker
                    key={location.id}
                    id={location.id}
                    name={location.name}
                    left={location.left}
                    top={location.top}
                    isActive={activeLocation === location.id}
                    onHover={(id, el) => activateTooltip(id, el)}
                    onLeave={() => setActiveLocation(null)}
                    onClick={handleMarkerClick}
                  />
                ))}

                {/* Enhanced tooltip */}
                <div
                  className="absolute pointer-events-none z-20 transition-all duration-200"
                  style={{
                    left: tooltipPosition.x,
                    top: tooltipPosition.y,
                    transform: "translate(-50%, -140%)",
                    opacity: activeLocation ? 1 : 0,
                    scale: activeLocation ? "1" : "0.9",
                  }}
                >
                  <div
                    className="relative px-4 py-2.5 rounded-lg text-center"
                    style={{
                      background: "hsl(222 40% 12% / 0.9)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid hsl(217 91% 60% / 0.3)",
                      boxShadow:
                        "0 8px 32px hsl(222 47% 8% / 0.5), 0 0 20px hsl(217 91% 60% / 0.15)",
                    }}
                  >
                    <span className="text-sm font-semibold text-primary-foreground block">
                      {activeLocationData?.name || ""}
                    </span>
                    {activeLocationData?.country && (
                      <span className="text-[10px] text-muted-foreground/70 font-mono uppercase tracking-wider">
                        {activeLocationData.country}
                      </span>
                    )}
                    {/* Arrow */}
                    <div
                      className="absolute left-1/2 -bottom-1.5"
                      style={{
                        transform: "translateX(-50%) rotate(45deg)",
                        width: 8,
                        height: 8,
                        background: "hsl(222 40% 12% / 0.9)",
                        borderRight: "1px solid hsl(217 91% 60% / 0.3)",
                        borderBottom: "1px solid hsl(217 91% 60% / 0.3)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom status bar */}
            <div className="flex items-center justify-between px-5 py-2.5 border-t border-primary/10">
              <span className="text-[10px] text-muted-foreground/50 font-mono">
                {locations.length} hubs activos
              </span>
              <div className="flex items-center gap-3">
                {locations.map((loc) => (
                  <div
                    key={loc.id}
                    className="flex items-center gap-1"
                  >
                    <div
                      className="w-1 h-1 rounded-full transition-colors duration-300"
                      style={{
                        background:
                          activeLocation === loc.id
                            ? "hsl(190 95% 50%)"
                            : "hsl(217 91% 60% / 0.4)",
                      }}
                    />
                    <span
                      className="text-[9px] font-mono uppercase tracking-widest transition-colors duration-300"
                      style={{
                        color:
                          activeLocation === loc.id
                            ? "hsl(190 95% 50%)"
                            : "hsl(215 20% 45% / 0.6)",
                      }}
                    >
                      {loc.id.slice(0, 3)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* City cards */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {locations.map((location) => {
              const isActive = activeLocation === location.id;
              return (
                <div
                  key={location.id}
                  className="relative flex items-center gap-3 p-4 rounded-xl bg-card border transition-all duration-300 cursor-pointer group overflow-hidden"
                  style={{
                    borderColor: isActive
                      ? "hsl(217 91% 60% / 0.5)"
                      : "hsl(var(--border))",
                    boxShadow: isActive
                      ? "0 0 24px hsl(217 91% 60% / 0.15)"
                      : "none",
                  }}
                  onMouseEnter={() => handleCityButtonEnter(location.id)}
                  onMouseLeave={() => setActiveLocation(null)}
                >
                  {/* Active glow background */}
                  {isActive && (
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 50%, hsl(217 91% 60%), transparent 70%)",
                      }}
                    />
                  )}

                  {/* Marker dot */}
                  <div className="relative">
                    <div
                      className="w-3 h-3 rounded-full transition-all duration-300"
                      style={{
                        background: isActive
                          ? "linear-gradient(135deg, hsl(217 91% 60%), hsl(190 95% 50%))"
                          : "hsl(216 100% 34%)",
                        boxShadow: isActive
                          ? "0 0 12px hsl(217 91% 60% / 0.6)"
                          : "none",
                      }}
                    />
                    {isActive && (
                      <div
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{
                          background: "hsl(217 91% 60% / 0.4)",
                        }}
                      />
                    )}
                  </div>

                  <div className="relative z-10">
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors block text-sm">
                      {location.name}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                      {location.country}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes pulse-ring {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.8);
            opacity: 0;
          }
        }
        @keyframes dash-flow {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </section>
  );
};

export default LocationsSection;
