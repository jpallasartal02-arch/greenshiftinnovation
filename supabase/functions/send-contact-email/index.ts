import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");



const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  type: "business" | "education";
  name: string;
  email: string;
  company?: string;
  message?: string;
  location?: string;
  studyArea?: string;
  motivation?: string;
  availability?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received contact form submission");
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactEmailRequest = await req.json();
    console.log("Form data received:", { type: data.type, name: data.name, email: data.email });

    let subject: string;
    let htmlContent: string;

    if (data.type === "business") {
      subject = `[GreenShift] Nuevo contacto empresa: ${data.name}`;
      htmlContent = `
        <h2>Nuevo contacto de empresa</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Empresa:</strong> ${data.company}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${data.message}</p>
      `;
    } else {
      subject = `[GreenShift] Nueva solicitud educación: ${data.name}`;
      htmlContent = `
        <h2>Nueva solicitud para programas de innovación</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Ciudad/País:</strong> ${data.location}</p>
        <p><strong>Área de estudios:</strong> ${data.studyArea}</p>
        <p><strong>Disponibilidad:</strong> ${data.availability}</p>
        <p><strong>Motivación:</strong></p>
        <p>${data.motivation}</p>
      `;
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "GreenShift <onboarding@resend.dev>",
        to: ["info@greenshiftinnovation.com"],
        subject: subject,
        html: htmlContent,
      }),
    });

    const emailResponse = await res.json();
    console.log("Email response:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
