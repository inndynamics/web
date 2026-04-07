import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import logoSvg from "@/assets/bcr-logo.svg";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#agency", label: "Agentes IA" },
  { href: "#agentes", label: "Sectores" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
    }`}>
      <div className="container-bcr flex items-center justify-between h-16">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          B&CR <span className="text-primary">Growth</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Button size="sm" asChild>
            <a href="#contacto">Solicitar Demo</a>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 text-muted-foreground" aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-foreground" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container-bcr py-4 space-y-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground py-2">
                {link.label}
              </a>
            ))}
            <Button size="sm" className="w-full" asChild>
              <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>Solicitar Demo</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
