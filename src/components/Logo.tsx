import logoSvg from "@/assets/inndynamics-logo.png";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
  height?: number;
}

const Logo = ({ className = "", variant = "default", height = 44 }: LogoProps) => {
  return (
    <img 
      src={logoSvg}
      alt="B&Cr. Growth Partners"
      className={`object-contain ${variant === "white" ? "brightness-0 invert" : ""} ${className}`}
      style={{ height: `${height}px`, width: 'auto' }}
    />
  );
};

export default Logo;
