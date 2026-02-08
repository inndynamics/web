import { useState } from "react";

interface MapMarkerProps {
  id: string;
  name: string;
  left: number;
  top: number;
  isActive: boolean;
  onHover: (id: string, element: HTMLElement) => void;
  onLeave: () => void;
  onClick: (id: string, event: React.MouseEvent | React.TouchEvent) => void;
}

const MapMarker = ({
  id,
  name,
  left,
  top,
  isActive,
  onHover,
  onLeave,
  onClick,
}: MapMarkerProps) => {
  return (
    <div
      data-city={name}
      className="absolute cursor-pointer group"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={(e) => onHover(id, e.currentTarget as HTMLElement)}
      onMouseLeave={onLeave}
      onClick={(e) => onClick(id, e)}
      onTouchStart={(e) => onClick(id, e)}
    >
      {/* Outer pulse ring 1 */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          width: 40,
          height: 40,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: isActive
            ? "radial-gradient(circle, hsl(217 91% 60% / 0.4) 0%, transparent 70%)"
            : "radial-gradient(circle, hsl(217 91% 60% / 0.2) 0%, transparent 70%)",
          animation: "pulse-ring 2.5s ease-in-out infinite",
        }}
      />

      {/* Outer pulse ring 2 (delayed) */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          width: 32,
          height: 32,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: isActive
            ? "radial-gradient(circle, hsl(217 91% 60% / 0.3) 0%, transparent 70%)"
            : "radial-gradient(circle, hsl(217 91% 60% / 0.15) 0%, transparent 70%)",
          animation: "pulse-ring 2.5s ease-in-out 0.8s infinite",
        }}
      />

      {/* Glow effect when active */}
      {isActive && (
        <div
          className="absolute rounded-full"
          style={{
            width: 48,
            height: 48,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, hsl(217 91% 60% / 0.5) 0%, transparent 60%)",
            filter: "blur(4px)",
          }}
        />
      )}

      {/* Core dot */}
      <div
        className="relative rounded-full transition-all duration-300"
        style={{
          width: isActive ? 14 : 10,
          height: isActive ? 14 : 10,
          background: isActive
            ? "linear-gradient(135deg, hsl(217 91% 60%), hsl(190 95% 50%))"
            : "linear-gradient(135deg, hsl(216 100% 34%), hsl(217 91% 60%))",
          boxShadow: isActive
            ? "0 0 16px hsl(217 91% 60% / 0.8), 0 0 4px hsl(190 95% 50% / 0.6)"
            : "0 0 8px hsl(217 91% 60% / 0.4)",
          border: "2px solid hsl(0 0% 100% / 0.8)",
        }}
      />
    </div>
  );
};

export default MapMarker;
