import { Link } from "react-router-dom";
import logoImg from "@/assets/bcr-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container-bcr">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="inline-block">
              <img src={logoImg} alt="B&Cr. Growth Partners" className="h-12 w-auto" />
            </a>
            <p className="text-sm text-muted-foreground mt-3">
              Agentes IA, Automatización de Procesos y Desarrollo Web con IA.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Servicios</h4>
            <div className="space-y-2">
              <a href="#servicios" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Agentes IA</a>
              <a href="#servicios" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Automatización</a>
              <a href="#servicios" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Desarrollo Web</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Empresa</h4>
            <div className="space-y-2">
              <a href="#agentes" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Sectores</a>
              <a href="#precios" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Precios</a>
              <a href="#contacto" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contacto</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <Link to="/aviso-legal" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Aviso Legal</Link>
              <Link to="/politica-privacidad" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Privacidad</Link>
            </div>
            <p className="text-sm text-muted-foreground mt-4">contacto@bcrgrowth.com</p>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">© 2026 B&CR Growth. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
