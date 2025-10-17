import { Card, CardContent } from "@/components/ui/card";
import { Award, Eye, Zap } from "lucide-react";

export default function QuienesSomos() {
  const team = [
    { name: "Javier Pallás", role: "Director de Relaciones B2B" },
    { name: "Ida Karkkäinen", role: "Experta en Sostenibilidad" },
    { name: "Liher Palacio", role: "Experto en Metodología de Innovación Abierta" },
    { name: "Zoe Grimalt", role: "Experta en Design Thinking" },
    { name: "Raquel Acosta", role: "Facilitadora y Coordinadora de Talento" },
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Juventud",
      description: "Energía fresca y perspectivas renovadas en cada proyecto.",
    },
    {
      icon: <Eye className="h-8 w-8 text-accent" />,
      title: "Innovación",
      description: "Soluciones creativas que desafían el statu quo.",
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Disruptividad",
      description: "Transformación real que genera impacto duradero.",
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-background py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestro equipo
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Especialistas en diseñar y facilitar dinámicas de innovación abierta con impacto real.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  {/* Placeholder for photo */}
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <div className="text-4xl font-bold text-muted-foreground">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nuestros valores
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="text-2xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality Note */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
            Trabajamos bajo acuerdos de confidencialidad cuando es necesario.
          </p>
        </div>
      </section>
    </div>
  );
}
