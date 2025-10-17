import { Link } from "react-router-dom";
import { NAVIGATION_LINKS, LEGAL_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="text-xl font-bold mb-4 inline-block" style={{ color: '#37B884' }}>
              Green<sup className="text-sm">Shift</sup>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Dinámicas de innovación abierta para acelerar decisiones y resultados.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Navegación</h3>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Síguenos</h3>
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.companyName}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
