import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Target, Wrench, Zap, TrendingUp } from "lucide-react";

export default function Proceso() {
  const steps = [
    {
      number: 1,
      icon: <Search className="h-8 w-8 text-primary-foreground" />,
      title: "Auditoría gratuita",
      description: "Comprendemos el contexto de tu organización, identificamos oportunidades y valoramos el encaje de un hackathon con tus objetivos estratégicos.",
    },
    {
      number: 2,
      icon: <Target className="h-8 w-8 text-primary-foreground" />,
      title: "Identificación de retos",
      description: "Priorizamos retos por impacto y viabilidad, definiendo objetivos claros y medibles alineados con tu estrategia de negocio.",
    },
    {
      number: 3,
      icon: <Wrench className="h-8 w-8 text-primary-foreground" />,
      title: "Diseño del evento",
      description: "Desarrollamos la agenda detallada, preparamos materiales, seleccionamos mentores y definimos criterios de evaluación.",
    },
    {
      number: 4,
      icon: <Zap className="h-8 w-8 text-primary-foreground" />,
      title: "Dinámica de innovación abierta",
      description: "Facilitamos el evento completo: ideación, prototipado rápido, presentación de soluciones y evaluación conjunta con tu equipo.",
    },
    {
      number: 5,
      icon: <TrendingUp className="h-8 w-8 text-primary-foreground" />,
      title: "Finalización del proceso",
      description: "Entregamos un documento con las ideas generadas, reporte de resultados e insights principales del evento.",
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-background py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Proceso
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestra metodología probada en 5 pasos para transformar retos en resultados tangibles mediante dinámicas de innovación abierta.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-10 top-24 w-0.5 h-12 bg-border"></div>
                )}
                
                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon Circle */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                          {step.icon}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-primary">PASO {step.number}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Comenzar con una auditoría gratuita
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Sin coste ni compromiso. Descubre cómo una dinámica de innovación abierta puede acelerar tus objetivos.
          </p>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary bg-primary-foreground hover:bg-primary-foreground/90">
            <Link to="/auditoria-gratuita">Solicitar auditoría gratuita</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
