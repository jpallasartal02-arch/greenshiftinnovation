import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, Linkedin, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contacto() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [educationFormData, setEducationFormData] = useState({
    name: "",
    email: "",
    location: "",
    studyArea: "",
    motivation: "",
    availability: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Contact form submitted:", formData);
    
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos en 1–2 días laborables.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  const handleEducationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Education form submitted:", educationFormData);
    
    toast({
      title: "Solicitud enviada",
      description: "Gracias por tu interés. Te contactaremos pronto con más información.",
    });

    setEducationFormData({
      name: "",
      email: "",
      location: "",
      studyArea: "",
      motivation: "",
      availability: "",
    });
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-background py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contacto
          </h1>
          <p className="text-sm text-muted-foreground">
            Respondemos en 1–2 días laborables
          </p>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Business Form */}
            <Card className="border-border">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Mail className="h-6 w-6 text-primary" />
                  Empresas: Envíanos un mensaje
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
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
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe tu situación y cómo podemos ayudarte"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Education Form */}
            <Card className="border-border">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Área de Educación
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Participa en nuestros programas de innovación
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleEducationSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="edu-name">Nombre *</Label>
                    <Input
                      id="edu-name"
                      type="text"
                      required
                      value={educationFormData.name}
                      onChange={(e) => setEducationFormData({ ...educationFormData, name: e.target.value })}
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="edu-email">Email *</Label>
                    <Input
                      id="edu-email"
                      type="email"
                      required
                      value={educationFormData.email}
                      onChange={(e) => setEducationFormData({ ...educationFormData, email: e.target.value })}
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="edu-location">Ciudad / País *</Label>
                    <Input
                      id="edu-location"
                      type="text"
                      required
                      value={educationFormData.location}
                      onChange={(e) => setEducationFormData({ ...educationFormData, location: e.target.value })}
                      placeholder="Tu ciudad o país"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="edu-study">Área de estudios *</Label>
                    <Input
                      id="edu-study"
                      type="text"
                      required
                      value={educationFormData.studyArea}
                      onChange={(e) => setEducationFormData({ ...educationFormData, studyArea: e.target.value })}
                      placeholder="Ej: Ingeniería, Diseño, Negocios..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="edu-motivation">Motivación para participar *</Label>
                    <Textarea
                      id="edu-motivation"
                      rows={4}
                      required
                      value={educationFormData.motivation}
                      onChange={(e) => setEducationFormData({ ...educationFormData, motivation: e.target.value })}
                      placeholder="Cuéntanos por qué te interesa participar en nuestros programas"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="edu-availability">Disponibilidad *</Label>
                    <Select 
                      value={educationFormData.availability} 
                      onValueChange={(value) => setEducationFormData({ ...educationFormData, availability: value })}
                      required
                    >
                      <SelectTrigger id="edu-availability">
                        <SelectValue placeholder="Selecciona tu disponibilidad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="online">Online</SelectItem>
                        <SelectItem value="presencial">Presencial</SelectItem>
                        <SelectItem value="ambas">Ambas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Quiero participar
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div className="mt-16 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              También puedes encontrarnos en
            </h3>
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
            >
              <Linkedin className="h-6 w-6 text-primary" />
              <span className="font-medium text-foreground">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
