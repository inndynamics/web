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
    left: 18,
    top: 78,
  },
  {
    id: "madrid",
    name: "Madrid",
    left: 20,
    top: 68,
  },
  {
    id: "andorra",
    name: "Andorra",
    left: 28,
    top: 60,
  },
  {
    id: "helsinki",
    name: "Helsinki",
    left: 62,
    top: 22,
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
// MAPA SVG DE EUROPA
// Mapa vectorial minimalista y corporativo
// ================================
const EuropeMap = () => (
  <svg
    viewBox="0 0 1000 700"
    className="w-full h-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Fondo */}
    <rect width="1000" height="700" className="fill-muted/20" />
    
    {/* Islandia */}
    <path
      d="M180 80 Q200 70 220 75 Q240 80 250 95 Q255 110 245 125 Q230 135 210 130 Q190 125 180 110 Q175 95 180 80Z"
      className="fill-muted/60"
    />
    
    {/* Noruega y Suecia */}
    <path
      d="M480 40 Q500 35 520 50 Q535 70 540 100 Q545 140 540 180 Q535 220 525 260 Q515 290 500 310 Q485 325 470 315 Q460 300 455 270 Q450 240 455 200 Q460 160 465 120 Q470 80 480 40Z"
      className="fill-muted/60"
    />
    
    {/* Finlandia */}
    <path
      d="M560 60 Q580 50 600 60 Q620 75 635 100 Q645 130 650 170 Q652 210 645 250 Q635 280 615 290 Q590 295 570 280 Q555 260 550 230 Q545 190 550 150 Q555 110 560 60Z"
      className="fill-muted/60"
    />
    
    {/* Reino Unido */}
    <path
      d="M300 200 Q320 190 335 200 Q350 215 355 240 Q358 270 350 300 Q340 330 320 345 Q300 355 285 340 Q275 320 278 290 Q280 260 285 230 Q290 205 300 200Z"
      className="fill-muted/60"
    />
    
    {/* Escocia */}
    <path
      d="M295 180 Q310 170 325 180 Q335 195 330 210 Q320 225 305 225 Q290 220 288 205 Q287 190 295 180Z"
      className="fill-muted/60"
    />
    
    {/* Irlanda */}
    <path
      d="M255 230 Q275 220 290 235 Q300 255 295 280 Q285 300 265 305 Q245 300 240 280 Q238 255 255 230Z"
      className="fill-muted/60"
    />
    
    {/* Península Ibérica (España y Portugal) */}
    <path
      d="M145 430 Q160 400 200 380 Q250 365 300 370 Q340 378 360 400 Q375 425 370 460 Q365 500 340 530 Q310 555 270 560 Q220 558 180 540 Q150 515 140 480 Q138 450 145 430Z"
      className="fill-muted/60"
    />
    
    {/* Francia */}
    <path
      d="M320 320 Q360 310 400 320 Q440 335 460 365 Q470 400 455 430 Q435 455 400 460 Q365 462 340 445 Q320 425 315 395 Q310 360 320 320Z"
      className="fill-muted/60"
    />
    
    {/* Bélgica, Países Bajos, Alemania */}
    <path
      d="M380 260 Q420 250 470 260 Q520 275 555 310 Q575 350 565 390 Q550 425 510 440 Q470 450 430 435 Q395 415 380 380 Q370 340 380 260Z"
      className="fill-muted/60"
    />
    
    {/* Polonia y Europa del Este */}
    <path
      d="M550 280 Q600 270 650 285 Q700 305 730 350 Q750 400 735 450 Q710 490 660 500 Q610 505 565 480 Q530 450 525 400 Q522 340 550 280Z"
      className="fill-muted/60"
    />
    
    {/* Italia */}
    <path
      d="M460 420 Q480 410 495 425 Q510 445 515 480 Q518 520 505 560 Q488 595 465 610 Q445 615 435 595 Q430 570 440 540 Q445 505 450 470 Q455 440 460 420Z"
      className="fill-muted/60"
    />
    
    {/* Sicilia */}
    <path
      d="M475 620 Q495 615 510 625 Q520 640 515 655 Q500 665 480 660 Q465 650 470 635 Q472 622 475 620Z"
      className="fill-muted/60"
    />
    
    {/* Cerdeña */}
    <path
      d="M430 540 Q445 535 455 550 Q460 570 450 585 Q435 592 425 580 Q418 565 425 550 Q428 542 430 540Z"
      className="fill-muted/60"
    />
    
    {/* Córcega */}
    <path
      d="M420 490 Q432 485 440 498 Q445 515 438 528 Q425 535 418 522 Q412 508 418 495 Q419 490 420 490Z"
      className="fill-muted/60"
    />
    
    {/* Grecia y Balcanes */}
    <path
      d="M560 480 Q600 470 640 490 Q670 515 675 555 Q672 595 645 620 Q610 640 570 630 Q540 615 530 580 Q525 540 540 505 Q550 485 560 480Z"
      className="fill-muted/60"
    />
    
    {/* Creta */}
    <path
      d="M590 660 Q620 655 650 660 Q665 670 660 682 Q640 692 610 690 Q585 685 583 672 Q582 662 590 660Z"
      className="fill-muted/60"
    />
    
    {/* Turquía (parte europea) */}
    <path
      d="M680 520 Q720 510 750 530 Q770 555 765 585 Q750 610 715 615 Q680 612 665 590 Q655 565 665 540 Q672 525 680 520Z"
      className="fill-muted/60"
    />
    
    {/* Ucrania y Rusia occidental */}
    <path
      d="M700 300 Q760 280 830 300 Q890 330 920 390 Q940 450 920 510 Q890 560 830 580 Q770 590 720 560 Q680 525 675 470 Q672 400 700 300Z"
      className="fill-muted/60"
    />
    
    {/* Países Bálticos */}
    <path
      d="M580 220 Q610 210 640 225 Q665 245 670 280 Q668 315 645 335 Q615 350 585 340 Q560 325 555 295 Q552 260 565 235 Q572 222 580 220Z"
      className="fill-muted/60"
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
            {/* Mapa SVG */}
            <div className="relative">
              <EuropeMap />
              
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
