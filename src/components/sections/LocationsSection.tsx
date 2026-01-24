import { useState, useRef, useEffect } from "react";
import "./LocationsSection.css";

const locations = [
  { id: "sevilla", name: "Sevilla", left: 26, top: 69 },
  { id: "madrid", name: "Madrid", left: 28, top: 62 },
  { id: "andorra", name: "Andorra", left: 31, top: 56 },
  { id: "helsinki", name: "Helsinki", left: 52, top: 25 },
];

const LocationsSection = () => {
  const [activeCity, setActiveCity] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ left: 0, top: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const showTooltip = (marker: HTMLElement, cityName: string) => {
    const rect = marker.getBoundingClientRect();
    const container = containerRef.current?.getBoundingClientRect();
    if (container) {
      setTooltipPos({
        left: rect.left - container.left + 7,
        top: rect.top - container.top,
      });
    }
    setActiveCity(cityName);
  };

  const hideTooltip = () => {
    setActiveCity(null);
  };

  useEffect(() => {
    const handleClickOutside = () => hideTooltip();
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section className="nuestras-sedes">
      <div className="nuestras-sedes-badge">Presencia Europea</div>
      <h2>Nuestras <span className="highlight">Sedes</span></h2>
      <p className="nuestras-sedes-description">
        BCR Growth Partners opera desde varios hubs europeos para estar cerca de las empresas que acompañamos en su crecimiento.
      </p>

      <div className="map-container" ref={containerRef}>
        <img
          src="https://ultimaps.com/maps/blank/europe.png"
          alt="Mapa de Europa"
          className="map-image"
        />
        {locations.map((loc) => (
          <div
            key={loc.id}
            className="marker"
            data-city={loc.name}
            style={{ left: `${loc.left}%`, top: `${loc.top}%` }}
            onMouseEnter={(e) => showTooltip(e.currentTarget, loc.name)}
            onMouseLeave={hideTooltip}
            onClick={(e) => {
              e.stopPropagation();
              showTooltip(e.currentTarget, loc.name);
            }}
            onTouchStart={(e) => {
              e.preventDefault();
              showTooltip(e.currentTarget, loc.name);
            }}
          />
        ))}
        <div
          className={`tooltip ${activeCity ? "show" : ""}`}
          style={{ left: tooltipPos.left, top: tooltipPos.top }}
        >
          {activeCity}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
