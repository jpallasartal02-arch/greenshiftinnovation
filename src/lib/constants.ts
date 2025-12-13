// Global constants for easy editing
export const SITE_CONFIG = {
  primaryColor: "#35b44a",
  linkedinUrl: "https://www.linkedin.com/company/greenshift1/",
  companyName: "Green^Shift",
  companyEmail: "info@greenshiftinnovation.com",
  companyPhone: "621 206 660",
  whatsappNumber: "34621206660",
  pricing: {
    message: "Escríbenos para pedir un presupuesto personalizado",
  },
} as const;

export const NAVIGATION_LINKS = [
  { name: "Inicio", href: "/" },
  { name: "Quiénes Somos", href: "/quienes-somos" },
  { name: "Servicios", href: "/servicios" },
  { name: "Proceso", href: "/proceso" },
] as const;

export const LEGAL_LINKS = [
  { name: "Aviso Legal", key: "aviso" },
  { name: "Política de Privacidad", key: "privacidad" },
  { name: "Cookies", key: "cookies" },
] as const;
