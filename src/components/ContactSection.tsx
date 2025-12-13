import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  const email = "info@greenshiftinnovation.com";
  const phone = "621 206 660";
  const whatsappNumber = "34621206660";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un reto de innovación? Escríbenos o llámanos.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-border space-y-6">
            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {email}
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:+34${phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Teléfono</p>
                <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {phone}
                </p>
              </div>
            </a>

            {/* WhatsApp Button */}
            <div className="pt-4">
              <Button
                onClick={openWhatsApp}
                size="lg"
                className="w-full gap-3"
              >
                <MessageCircle className="h-5 w-5" />
                Escríbenos por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
