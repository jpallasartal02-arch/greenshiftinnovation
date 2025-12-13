import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LegalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LEGAL_INFO = {
  company: "Green Shift",
  parentOrg: "ASSOCIATION JUNIOR ENTERPRISE NEW PLOTT",
  nif: "G72734650",
  address: "Uribitarte nº 6, 1º, 48011 Bilbo, Vizcaya",
  email: "info@greenshiftinnovation.com",
  lastUpdated: "Diciembre 2025",
};

export const AvisoLegalModal = ({ open, onOpenChange }: LegalModalProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-3xl max-h-[85vh]">
      <DialogHeader>
        <DialogTitle className="text-2xl">Aviso Legal</DialogTitle>
      </DialogHeader>
      <ScrollArea className="h-[60vh] pr-4">
        <div className="space-y-6 text-sm text-muted-foreground">
          <p className="text-xs">Última actualización: {LEGAL_INFO.lastUpdated}</p>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">1. Identificación del titular</h3>
            <p>
              En cumplimiento del deber de información establecido en la Ley 34/2002 de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa que el presente sitio web es titularidad de:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Denominación:</strong> {LEGAL_INFO.company}, proyecto de {LEGAL_INFO.parentOrg}</li>
              <li><strong>NIF:</strong> {LEGAL_INFO.nif}</li>
              <li><strong>Domicilio social:</strong> {LEGAL_INFO.address}</li>
              <li><strong>Correo electrónico:</strong> {LEGAL_INFO.email}</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">2. Propiedad intelectual e industrial</h3>
            <p>
              Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de {LEGAL_INFO.company} o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual.
            </p>
            <p className="mt-2">
              Las marcas, nombres comerciales o signos distintivos son titularidad de {LEGAL_INFO.company} o de terceros, sin que pueda entenderse que el acceso al sitio web atribuya ningún derecho sobre los mismos.
            </p>
            <p className="mt-2">
              Queda prohibida la reproducción, transformación, distribución, comunicación pública, puesta a disposición del público y, en general, cualquier otra forma de explotación, parcial o total de los elementos referidos en el apartado anterior. La infracción de estos derechos puede constituir un delito contra la propiedad intelectual e industrial.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">3. Responsabilidad sobre contenidos</h3>
            <p>
              {LEGAL_INFO.company} no se hace responsable de la legalidad de otros sitios web de terceros desde los que pueda accederse al portal. Tampoco responde de la legalidad de otros sitios web de terceros, que pudieran estar vinculados o enlazados desde este sitio web.
            </p>
            <p className="mt-2">
              {LEGAL_INFO.company} se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que estos aparezcan presentados o localizados en su portal.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">4. Enlaces externos</h3>
            <p>
              Las páginas del sitio web pueden contener enlaces (links) a otras páginas de terceros. Por tanto, {LEGAL_INFO.company} no asume responsabilidad por el contenido que pueda aparecer en páginas de terceros.
            </p>
            <p className="mt-2">
              Los enlaces que aparecen en esta web tienen finalidad meramente informativa y en ningún caso implican apoyo, aprobación, comercialización o relación alguna entre {LEGAL_INFO.company} y las personas o entidades titulares de dichos contenidos o sitios web.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">5. Actualización y modificación del sitio web</h3>
            <p>
              {LEGAL_INFO.company} se reserva el derecho de modificar, actualizar o eliminar la información contenida en su sitio web, así como su configuración o presentación, en cualquier momento, sin previo aviso y sin asumir responsabilidad alguna por ello.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">6. Legislación aplicable y jurisdicción</h3>
            <p>
              La relación entre {LEGAL_INFO.company} y el usuario se regirá por la normativa española vigente, siendo competentes para la resolución de cualquier controversia los Juzgados y Tribunales de Bilbao, salvo que la ley aplicable disponga otra cosa.
            </p>
          </section>
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

export const PrivacidadModal = ({ open, onOpenChange }: LegalModalProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-3xl max-h-[85vh]">
      <DialogHeader>
        <DialogTitle className="text-2xl">Política de Privacidad</DialogTitle>
      </DialogHeader>
      <ScrollArea className="h-[60vh] pr-4">
        <div className="space-y-6 text-sm text-muted-foreground">
          <p className="text-xs">Última actualización: {LEGAL_INFO.lastUpdated}</p>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">1. Responsable del tratamiento</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Identidad:</strong> {LEGAL_INFO.company}, proyecto de {LEGAL_INFO.parentOrg}</li>
              <li><strong>NIF:</strong> {LEGAL_INFO.nif}</li>
              <li><strong>Dirección:</strong> {LEGAL_INFO.address}</li>
              <li><strong>Correo electrónico:</strong> {LEGAL_INFO.email}</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">2. Finalidad del tratamiento de datos</h3>
            <p>En {LEGAL_INFO.company} tratamos los datos personales que nos faciliten los interesados con las siguientes finalidades:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Gestionar la participación en dinámicas de innovación abierta y retos de sostenibilidad.</li>
              <li>Atender consultas, solicitudes y peticiones de información de empresas, participantes y colaboradores.</li>
              <li>Gestionar la relación comercial con empresas interesadas en nuestros servicios.</li>
              <li>Enviar comunicaciones relacionadas con nuestras actividades, eventos y novedades (previo consentimiento).</li>
              <li>Gestionar la participación en programas educativos y de innovación.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">3. Legitimación del tratamiento</h3>
            <p>La base legal para el tratamiento de sus datos es:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>El consentimiento del interesado para una o varias finalidades específicas.</li>
              <li>La ejecución de un contrato o la aplicación de medidas precontractuales.</li>
              <li>El cumplimiento de obligaciones legales aplicables.</li>
              <li>El interés legítimo del responsable (ej. prevención de fraude, seguridad).</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">4. Destinatarios de los datos</h3>
            <p>
              Los datos personales no serán cedidos a terceros salvo obligación legal. En el caso de dinámicas de innovación, los datos de los participantes podrán ser compartidos con las empresas organizadoras de los retos, siempre bajo las condiciones de confidencialidad establecidas y con el consentimiento previo del interesado.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">5. Conservación de los datos</h3>
            <p>
              Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recabaron y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">6. Derechos del interesado</h3>
            <p>De conformidad con el Reglamento General de Protección de Datos (RGPD) y la LOPDGDD, el usuario tiene derecho a:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Acceso:</strong> Conocer si se están tratando sus datos personales.</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos.</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos.</li>
              <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento.</li>
              <li><strong>Portabilidad:</strong> Recibir los datos en formato estructurado.</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos.</li>
            </ul>
            <p className="mt-2">
              Para ejercer estos derechos, puede contactar con nosotros en {LEGAL_INFO.email}, indicando su solicitud y acompañando copia de su documento de identidad.
            </p>
            <p className="mt-2">
              Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">7. Medidas de seguridad</h3>
            <p>
              {LEGAL_INFO.company} ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad e integridad de los datos personales, evitando su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>
          </section>
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

export const CookiesModal = ({ open, onOpenChange }: LegalModalProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-3xl max-h-[85vh]">
      <DialogHeader>
        <DialogTitle className="text-2xl">Política de Cookies</DialogTitle>
      </DialogHeader>
      <ScrollArea className="h-[60vh] pr-4">
        <div className="space-y-6 text-sm text-muted-foreground">
          <p className="text-xs">Última actualización: {LEGAL_INFO.lastUpdated}</p>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">1. ¿Qué son las cookies?</h3>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web almacenan en el navegador del usuario. Permiten que el sitio web recuerde información sobre su visita, como su idioma preferido y otras opciones, lo que puede facilitar su próxima visita y hacer que el sitio le resulte más útil.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">2. Tipos de cookies que utilizamos</h3>
            
            <h4 className="font-medium text-foreground mt-4 mb-2">Cookies técnicas (necesarias)</h4>
            <p>
              Son aquellas que permiten al usuario la navegación a través del sitio web y la utilización de las diferentes opciones o servicios que en ella existen. Son imprescindibles para el correcto funcionamiento del sitio.
            </p>

            <h4 className="font-medium text-foreground mt-4 mb-2">Cookies analíticas (Google Analytics)</h4>
            <p>
              Utilizamos Google Analytics para recopilar información sobre cómo los visitantes usan nuestro sitio web. Esta información nos ayuda a mejorar el sitio web y la experiencia del usuario. Las cookies de Google Analytics recopilan información de forma anónima, incluyendo el número de visitantes del sitio, de dónde han venido los visitantes y las páginas que visitaron.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>_ga:</strong> Se utiliza para distinguir usuarios. Duración: 2 años.</li>
              <li><strong>_gid:</strong> Se utiliza para distinguir usuarios. Duración: 24 horas.</li>
              <li><strong>_gat:</strong> Se utiliza para limitar el porcentaje de solicitudes. Duración: 1 minuto.</li>
            </ul>

            <h4 className="font-medium text-foreground mt-4 mb-2">Cookies de terceros (Google Maps)</h4>
            <p>
              Si el sitio web incluye mapas de Google Maps, este servicio puede establecer cookies propias. Google Maps utiliza cookies para recordar las preferencias de visualización del mapa y mejorar la experiencia del usuario.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">3. Gestión de cookies</h3>
            <p>
              El usuario puede configurar su navegador para aceptar, rechazar o eliminar las cookies. A continuación, se proporcionan enlaces a las instrucciones de los navegadores más comunes:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
            <p className="mt-2">
              Si el usuario desactiva las cookies, es posible que algunas funcionalidades del sitio web no estén disponibles o no funcionen correctamente.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">4. Actualizaciones de esta política</h3>
            <p>
              {LEGAL_INFO.company} puede actualizar esta Política de Cookies para adaptarla a novedades legislativas o cambios en nuestras prácticas. Le recomendamos revisar esta página periódicamente para estar informado sobre cómo usamos las cookies.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">5. Contacto</h3>
            <p>
              Si tiene alguna pregunta sobre nuestra Política de Cookies, puede contactarnos en: {LEGAL_INFO.email}
            </p>
          </section>
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);
