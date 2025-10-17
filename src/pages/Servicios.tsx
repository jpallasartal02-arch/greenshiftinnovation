import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, GraduationCap, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Servicios() {
  const service1Deliverables = [
    "Definición de retos",
    "Agenda completa del evento",
    "Materiales de soporte",
    "Facilitación end-to-end",
    "Plan de prototipos iniciales",
    "Criterios de evaluación",
  ];

  const service1Results = [
    "Decisiones más rápidas",
    "Alineamiento entre equipos",
    "Pipeline de iniciativas estratégicas",
  ];

  const service2Deliverables = [
    "Curación de perfiles universitarios",
    "Coordinación del proceso",
    "Evaluación conjunta de resultados",
  ];

  const service2Results = [
    "Nuevas ideas y perspectivas frescas",
    "Mayor capacidad de ejecución",
    "Conexión con talento emergente",
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-background py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Servicios
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Diseñamos dinámicas de innovación abierta que transforman retos en decisiones. Adaptamos el formato para equipos internos o integrando talento universitario.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Service 1 */}
            <Card className="border-border overflow-hidden">
              <CardHeader className="bg-muted/30 border-b">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl">
                    Dinámicas de innovación abierta internas para empresas
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Qué es</h3>
                  <p className="text-muted-foreground">
                    Programa intensivo (1–5 días) con equipos de la empresa enfocado en resolver retos estratégicos mediante metodologías de innovación ágil.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Entregables</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {service1Deliverables.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Resultados esperados</h3>
                  <ul className="space-y-2">
                    {service1Results.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-border overflow-hidden">
              <CardHeader className="bg-muted/30 border-b">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl">
                    Dinámicas de innovación con talento universitario
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Qué es</h3>
                  <p className="text-muted-foreground">
                    Combinamos trabajadores de la empresa con jóvenes talentos para aportar nuevas perspectivas y capacidad técnica a tus retos empresariales.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Entregables</h3>
                  <ul className="space-y-2">
                    {service2Deliverables.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Resultados esperados</h3>
                  <ul className="space-y-2">
                    {service2Results.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Format & Price */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Formato y precio</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6 text-center">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Duración adaptable</h3>
                  <p className="text-muted-foreground">
                    1–5 días, presencial o híbrido, según tus necesidades y objetivos.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Precio</h3>
                  <p className="text-3xl font-bold text-primary mb-2">Desde {SITE_CONFIG.pricing.basePrice}</p>
                  <p className="text-sm text-muted-foreground">
                    El precio final depende de la duración, formato y personalización requerida.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Explorar mi caso
          </h2>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary-foreground text-primary bg-primary-foreground hover:bg-primary-foreground/90"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).Calendly) {
                (window as any).Calendly.initPopupWidget({ 
                  url: `https://calendly.com/TU_USUARIO/TU_EVENTO?hide_gdpr_banner=1&hide_event_type_details=1&primary_color=37B884` 
                });
              }
            }}
          >
            Solicitar auditoría gratuita
          </Button>
        </div>
      </section>
    </div>
  );
}
