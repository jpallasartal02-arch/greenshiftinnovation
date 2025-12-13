import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, Target, TrendingUp, GitBranch, Lightbulb } from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";
import { ContactSection } from "@/components/ContactSection";

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
      title: "Dinámicas In-In",
      description: "Equipos 100% internos de la misma institución —empresa, universidad o departamento— trabajando juntos en retos estratégicos con metodologías ágiles.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Dinámicas In-Out",
      description: "Equipos mixtos que combinan participantes internos con perfiles externos seleccionados, aportando diversidad de perspectivas e ideas frescas a los retos.",
    },
  ];

  // Partner logos
  const partners = [
    { name: "Partner 1", logo: "https://i.imgur.com/qNR6NPF.jpg" },
    { name: "Partner 2", logo: "https://i.imgur.com/ox4U967.jpg" },
    { name: "Partner 3", logo: "https://i.imgur.com/CJw96F4.jpg" },
    { name: "Partner 4", logo: "https://i.imgur.com/5COMx21.jpg" },
    { name: "Partner 5", logo: "https://i.imgur.com/4tKlK46.jpg" },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 min-h-[600px]">
        <HeroSlideshow />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Dinámicas de innovación abierta para acelerar decisiones y resultados
              </h1>
              <p className="text-lg lg:text-xl text-white/90 max-w-xl">
                Definimos retos, facilitamos equipos y entregamos prototipos accionables en días, no meses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" onClick={scrollToContact}>
                  Solicitar auditoría gratuita
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-gray-300 text-gray-300 hover:border-gray-100 hover:text-white hover:bg-transparent">
                  <Link to="/servicios">Ver servicios</Link>
                </Button>
              </div>
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nuestro enfoque de Open Innovation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trabajamos tanto con talento interno como con perfiles externos para enriquecer los retos de innovación y generar soluciones de alto impacto.
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

      {/* Visual Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://i.imgur.com/0PX4us2.jpg" 
                alt="Dinámica de innovación colaborativa"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://i.imgur.com/vxw7htu.jpg" 
                alt="Sesión de trabajo en equipo"
                className="w-full h-72 object-cover"
              />
            </div>
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
                className="flex items-center justify-center p-4 h-32"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

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
            onClick={scrollToContact}
          >
            Solicitar auditoría gratuita
          </Button>
        </div>
      </section>
    </div>
  );
}
