import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NAVIGATION_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Linkedin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const openCalendlyPopup = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      const primaryColorHex = SITE_CONFIG.primaryColor.replace('#', '');
      (window as any).Calendly.initPopupWidget({ 
        url: `${SITE_CONFIG.calendlyUrl}&primary_color=${primaryColorHex}` 
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="hover:opacity-90 transition-opacity">
          <img src="https://i.imgur.com/NjrsR98.png" alt="GreenShift" className="h-14" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Social */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={SITE_CONFIG.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <Button size="default" onClick={openCalendlyPopup}>
            Solicitar auditoría gratuita
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t">
              <a
                href={SITE_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <Button 
                size="default" 
                className="flex-1"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCalendlyPopup();
                }}
              >
                Solicitar auditoría gratuita
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
