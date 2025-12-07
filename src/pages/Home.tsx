import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, Target, Users, TrendingUp, GitBranch, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import "@/styles/hero-video.css";

export default function Home() {
  const benefits = [
    "Acelera la toma de decisiones",
    "Fomenta la colaboración entre áreas",
    "Genera quick-wins y soluciones tangibles",
    "Refuerza la cultura de innovación",
  ];

  const solutions = [
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Velocidad y enfoque",
      description: "Retos claros y medibles que generan resultados rápidos.",
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Prototipos y pruebas",
      description: "Evidencias tangibles para tomar decisiones informadas.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Alineación al negocio",
      description: "Impacto directo en eficiencia o ingresos.",
    },
  ];

  const audiences = [
    {
      icon: <GitBranch className="h-10 w-10 text-primary" />,
      title: "Equipos internos",
      description: "Dinámicas de innovación abierta internas para acelerar la ejecución de proyectos estratégicos.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Con talento universitario",
      description: "Integramos estudiantes seleccionados que aportan nuevas perspectivas.",
    },
  ];

  const methodology = [
    "Auditoría",
    "Retos",
    "Diseño",
    "Hackathon",
    "Seguimiento",
  ];

  // Partner logos
  const partners = [
    { name: "Partner 1", logo: "https://i.imgur.com/qNR6NPF.jpg" },
    { name: "Partner 2", logo: "https://i.imgur.com/ox4U967.jpg" },
    { name: "Partner 3", logo: "https://i.imgur.com/CJw96F4.jpg" },
    { name: "Partner 4", logo: "https://i.imgur.com/5COMx21.jpg" },
    { name: "Partner 5", logo: "https://i.imgur.com/4tKlK46.jpg" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="hero relative overflow-hidden py-20 lg:py-32">
        <div className="hero-media">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Dinámicas de innovación abierta para acelerar decisiones y resultados
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
                Definimos retos, facilitamos equipos y entregamos prototipos accionables en días, no meses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).Calendly) {
                    (window as any).Calendly.initPopupWidget({ 
                      url: `https://calendly.com/TU_USUARIO/TU_EVENTO?hide_gdpr_banner=1&hide_event_type_details=1&primary_color=37B884` 
                    });
                  }
                }}>
                  Solicitar auditoría gratuita
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/servicios">Ver servicios</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg bg-primary/5">
              {/* Espacio reservado para contenido visual adicional si es necesario */}
            </div>
          </div>
        </div>
      </section>

      {/* What We Solve */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Qué resolvemos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transformamos retos empresariales en soluciones tangibles
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center">{solution.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Para quién
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Adaptamos nuestras dinámicas de innovación abierta a las necesidades de tu organización
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {audiences.map((audience, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-center mb-4">{audience.icon}</div>
                  <h3 className="text-2xl font-semibold text-foreground text-center">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground text-center">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Beneficios
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-lg text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Empresas con las que hemos colaborado
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 h-24"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Explora si una dinámica de innovación abierta encaja en tus objetivos empresariales
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
