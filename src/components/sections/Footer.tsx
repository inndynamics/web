import Logo from "@/components/Logo";
import { Linkedin } from "lucide-react";

const footerLinks = {
  servicios: [
    { label: "BCR Diagnostic 360", href: "#servicios" },
    { label: "Sales & Ops Transformation", href: "#servicios" },
    { label: "Digital Efficiency Program", href: "#servicios" },
    { label: "Advisory & Fractional", href: "#servicios" },
  ],
  recursos: [
    { label: "Casos de Éxito", href: "#casos" },
    { label: "Metodología", href: "#metodologia" },
    { label: "Equipo", href: "#equipo" },
    { label: "Contacto", href: "#contacto" },
  ],
  legal: [
    { label: "Aviso Legal", href: "#" },
    { label: "Política de Privacidad", href: "#" },
    { label: "Términos y Condiciones", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container-bcr">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Logo variant="white" height={38} className="mb-4" />
            <p className="text-sm text-primary-foreground/60 mb-2">
              Architecture of Growth
            </p>
            <p className="text-sm text-primary-foreground/40">
              Consultora de crecimiento empresarial en Sevilla
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal & Social</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.legal.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex gap-4 mb-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <p className="text-sm text-primary-foreground/40">
              info@bcrgrowthpartners.es
              <br />
              Sevilla, Andalucía, España
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/40">
          © 2025 B&Cr. Growth Partners. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
