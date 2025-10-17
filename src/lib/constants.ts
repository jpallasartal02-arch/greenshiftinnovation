// Global constants for easy editing
export const SITE_CONFIG = {
  calendlyUrl: "https://calendly.com/TU_USUARIO/TU_EVENTO?hide_gdpr_banner=1&hide_event_type_details=1",
  primaryColor: "#1E88E5",
  formEndpoint: "#", // Cambiar al endpoint real (EmailJS, FormSubmit, etc.)
  linkedinUrl: "https://www.linkedin.com/company/greenshift",
  companyName: "Green^Shift",
  companyEmail: "contacto@greenshift.com",
  pricing: {
    basePrice: "1.200 €",
  },
} as const;

export const NAVIGATION_LINKS = [
  { name: "Inicio", href: "/" },
  { name: "Quiénes Somos", href: "/quienes-somos" },
  { name: "Servicios", href: "/servicios" },
  { name: "Proceso", href: "/proceso" },
  { name: "Auditoría Gratuita", href: "/auditoria-gratuita" },
  { name: "Contacto", href: "/contacto" },
] as const;

export const LEGAL_LINKS = [
  { name: "Aviso legal", href: "#" },
  { name: "Privacidad", href: "#" },
  { name: "Cookies", href: "#" },
] as const;
