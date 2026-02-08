interface Location {
  id: string;
  name: string;
  left: number;
  top: number;
}

interface ConnectionLinesProps {
  locations: Location[];
  activeLocation: string | null;
}

const ConnectionLines = ({ locations, activeLocation }: ConnectionLinesProps) => {
  // Define connections between cities
  const connections = [
    ["sevilla", "madrid"],
    ["madrid", "andorra"],
    ["andorra", "helsinki"],
    ["madrid", "helsinki"],
  ];

  const getLocation = (id: string) => locations.find((loc) => loc.id === id);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Gradient for lines */}
        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.4" />
          <stop offset="50%" stopColor="hsl(190 95% 50%)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0.4" />
        </linearGradient>

        <linearGradient id="line-gradient-active" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.7" />
          <stop offset="50%" stopColor="hsl(190 95% 50%)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0.7" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="line-glow">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {connections.map(([fromId, toId], index) => {
        const from = getLocation(fromId);
        const to = getLocation(toId);
        if (!from || !to) return null;

        const isActive =
          activeLocation === fromId || activeLocation === toId;

        return (
          <line
            key={`${fromId}-${toId}`}
            x1={from.left}
            y1={from.top}
            x2={to.left}
            y2={to.top}
            stroke={isActive ? "url(#line-gradient-active)" : "url(#line-gradient)"}
            strokeWidth={isActive ? "0.3" : "0.15"}
            strokeDasharray={isActive ? "1.5 1" : "2 2"}
            filter={isActive ? "url(#line-glow)" : undefined}
            className="transition-all duration-500"
            style={{
              animation: `dash-flow ${8 + index * 2}s linear infinite`,
            }}
          />
        );
      })}
    </svg>
  );
};

export default ConnectionLines;
