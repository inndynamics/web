import logoImage from "@/assets/bcr-logo.png";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
  height?: number;
}

const Logo = ({ className = "", variant = "default", height = 48 }: LogoProps) => {
  return (
    <img 
      src={logoImage}
      alt="B&Cr. Growth Partners"
      className={`object-contain ${variant === "white" ? "brightness-0 invert" : ""} ${className}`}
      style={{ height: `${height}px` }}
    />
  );
};

export default Logo;
