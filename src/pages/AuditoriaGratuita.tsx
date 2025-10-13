import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import { Calendar, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AuditoriaGratuita() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    role: "",
    message: "",
    gdprAccepted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.gdprAccepted) {
      toast({
        title: "Error",
        description: "Debes aceptar el tratamiento de datos para continuar.",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally send to formEndpoint
    console.log("Form submitted:", formData);
    
    toast({
      title: "Solicitud enviada",
      description: "Gracias, te contactaremos en 1–2 días laborables.",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      company: "",
      role: "",
      message: "",
      gdprAccepted: false,
    });
  };

  const openCalendlyPopup = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      const primaryColorHex = SITE_CONFIG.primaryColor.replace('#', '');
      (window as any).Calendly.initPopupWidget({ 
        url: `${SITE_CONFIG.calendlyUrl}&primary_color=${primaryColorHex}` 
      });
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-background py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Auditoría Gratuita
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Reserva una sesión de 20–30 minutos para entender tu situación, valorar el encaje y proponer un formato de hackathon adaptado a tus objetivos.
          </p>
          <p className="text-base text-muted-foreground mt-4 font-medium">
            Sin coste ni compromiso.
          </p>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Inline Calendly Widget */}
            <Card className="border-border overflow-hidden">
              <CardHeader className="bg-muted/30 border-b">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Calendar className="h-6 w-6 text-primary" />
                  Reserva tu sesión
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <link 
                  href="https://assets.calendly.com/assets/external/widget.css" 
                  rel="stylesheet" 
                />
                <script 
                  src="https://assets.calendly.com/assets/external/widget.js" 
                  type="text/javascript" 
                  async 
                />
                <div 
                  className="calendly-inline-widget" 
                  data-url={`${SITE_CONFIG.calendlyUrl}&primary_color=${SITE_CONFIG.primaryColor.replace('#', '')}`}
                  style={{ minWidth: '320px', height: '760px' }}
                />
                <noscript>
                  <p className="p-8 text-center text-muted-foreground">
                    Activa JavaScript para ver el planificador. También puedes{' '}
                    <a 
                      href={SITE_CONFIG.calendlyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      abrir Calendly en una nueva pestaña
                    </a>.
                  </p>
                </noscript>
              </CardContent>
            </Card>

            {/* Alternative Popup Button */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                ¿Prefieres una ventana emergente?
              </p>
              <Button 
                variant="outline" 
                size="lg"
                onClick={openCalendlyPopup}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Reservar por ventana emergente
              </Button>
            </div>

            {/* Calendly Privacy Note */}
            <p className="text-xs text-muted-foreground text-center italic">
              Usamos Calendly como proveedor de agenda. Consulta su política de privacidad en{' '}
              <a 
                href="https://calendly.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                calendly.com/privacy
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Fallback Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="border-border">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Mail className="h-6 w-6 text-primary" />
                  Formulario de contacto alternativo
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Si prefieres contactarnos directamente, completa este formulario.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nombre y apellidos *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email corporativo *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu.email@empresa.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa *</Label>
                    <Input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Cargo (opcional)</Label>
                    <Input
                      id="role"
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="Tu cargo en la empresa"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje (opcional)</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntanos brevemente sobre tu situación y objetivos"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="gdpr"
                      checked={formData.gdprAccepted}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, gdprAccepted: checked as boolean })
                      }
                      required
                    />
                    <Label htmlFor="gdpr" className="text-sm font-normal cursor-pointer">
                      Acepto el tratamiento de mis datos para esta solicitud. *
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Enviar solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
