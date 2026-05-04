import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-bcr py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-2">POLÍTICA DE PRIVACIDAD</h1>
          <p className="text-xl text-muted-foreground mb-8">BCR GROWTH PARTNERS S.L.</p>
          <p className="text-sm text-muted-foreground mb-12">Última actualización: 5 de enero de 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. INFORMACIÓN GENERAL</h2>
            <p>
              De conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril de 2016 (Reglamento General de Protección de Datos - RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), BCR GROWTH PARTNERS S.L. (en adelante, "la Empresa"), con domicilio social en C/Carlos de Cepeda, 3. 2A. 41005. Sevilla, España, y correo electrónico contacto@inndynamics.com, actúa como Responsable del Tratamiento de datos personales.
            </p>
            <p className="mt-4">Esta Política de Privacidad tiene por objeto informarle sobre:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Quién es responsable del tratamiento de sus datos personales</li>
              <li>Qué datos personales recabamos</li>
              <li>Por qué motivos tratamos sus datos</li>
              <li>Cuáles son sus derechos en materia de protección de datos</li>
              <li>Cómo puede ejercitar estos derechos</li>
              <li>Cualquier otra información relevante sobre el tratamiento de datos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. DATOS DE CONTACTO DEL RESPONSABLE</h2>
            <p><strong>Responsable del Tratamiento:</strong></p>
            <ul className="list-none pl-0 mt-2 space-y-1">
              <li><strong>Entidad:</strong> BCR GROWTH PARTNERS S.L.</li>
              <li><strong>Domicilio:</strong> C/Carlos de Cepeda, 3. 2A. 41005. Sevilla, España</li>
              <li><strong>Correo electrónico:</strong> contacto@inndynamics.com</li>
            </ul>
            <p className="mt-4"><strong>Delegado de Protección de Datos (DPD):</strong></p>
            <p>Para cualquier cuestión relativa a la protección de datos, puede contactar con nuestro Delegado de Protección de Datos mediante:</p>
            <ul className="list-none pl-0 mt-2 space-y-1">
              <li><strong>Correo electrónico:</strong> contacto@inndynamics.com</li>
              <li><strong>Dirección postal:</strong> C/Carlos de Cepeda, 3. 2A. 41005. Sevilla, España</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. CATEGORÍAS DE DATOS PERSONALES TRATADOS</h2>
            <p>La Empresa puede tratar las siguientes categorías de datos personales:</p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">3.1 Datos de Identificación</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nombre y apellidos</li>
              <li>Número de documento de identidad</li>
              <li>Fotografía o imagen</li>
              <li>Firma</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">3.2 Datos de Contacto</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Dirección postal</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Datos de redes sociales</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">3.3 Datos Profesionales</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Puesto de trabajo</li>
              <li>Empresa</li>
              <li>Historial profesional</li>
              <li>Datos de cualificación</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">3.4 Datos Técnicos</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Dirección IP</li>
              <li>Identificadores de dispositivo</li>
              <li>Datos de cookies</li>
              <li>Historial de navegación</li>
              <li>Información sobre el navegador y sistema operativo</li>
              <li>Datos de acceso a plataformas</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">3.5 Datos Comerciales</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Historial de compras</li>
              <li>Información de facturas</li>
              <li>Datos bancarios y de pago</li>
              <li>Información sobre transacciones</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">3.6 Datos de Interacción</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Comunicaciones con la Empresa</li>
              <li>Contenido de mensajes y correos electrónicos</li>
              <li>Datos de formularios completados</li>
              <li>Comentarios y opiniones</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. FINALIDADES DEL TRATAMIENTO</h2>
            <p>La Empresa trata sus datos personales con las siguientes finalidades:</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">4.1 Ejecución de Contratos</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Prestación de los servicios contratados</li>
              <li>Gestión de pedidos y entregas</li>
              <li>Facturación y gestión de pagos</li>
              <li>Comunicación sobre el estado de sus solicitudes</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">4.2 Cumplimiento de Obligaciones Legales</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cumplimiento de obligaciones fiscales y contables</li>
              <li>Cumplimiento de obligaciones laborales</li>
              <li>Cumplimiento de requisitos normativos</li>
              <li>Conservación de registros obligatorios</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">4.3 Intereses Legítimos</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Mejora de servicios y productos</li>
              <li>Análisis de uso y comportamiento de usuarios</li>
              <li>Prevención de fraude y abuso</li>
              <li>Seguridad de sistemas y datos</li>
              <li>Optimización de la experiencia del usuario</li>
              <li>Comunicaciones de marketing (con consentimiento previo)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">4.4 Consentimiento</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Envío de comunicaciones comerciales</li>
              <li>Perfilado y segmentación comercial</li>
              <li>Investigación de mercado</li>
              <li>Participación en encuestas y estudios</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">4.5 Otras Finalidades</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Gestión de reclamaciones y litigios</li>
              <li>Auditorías y evaluaciones internas</li>
              <li>Cumplimiento de resoluciones de autoridades</li>
              <li>Ejercicio de derechos o defensa de intereses legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. BASE LEGAL DEL TRATAMIENTO</h2>
            <p>El tratamiento de datos personales se realiza sobre la base de:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Artículo 6(1)(a) RGPD:</strong> Consentimiento del interesado</li>
              <li><strong>Artículo 6(1)(b) RGPD:</strong> Ejecución de contrato</li>
              <li><strong>Artículo 6(1)(c) RGPD:</strong> Cumplimiento de obligación legal</li>
              <li><strong>Artículo 6(1)(f) RGPD:</strong> Intereses legítimos perseguidos por el responsable</li>
              <li><strong>Artículo 9 RGPD:</strong> Cuando corresponda, para categorías especiales de datos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. DESTINATARIOS DE LOS DATOS</h2>
            <p>Los datos personales pueden ser comunicados a:</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">6.1 Destinatarios Internos</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Departamentos de administración y finanzas</li>
              <li>Equipo de atención al cliente</li>
              <li>Personal de gestión de proyectos</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">6.2 Destinatarios Externos</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Prestadores de servicios técnicos y de alojamiento</li>
              <li>Empresas de logística y envío</li>
              <li>Entidades financieras y proveedores de pago</li>
              <li>Autoridades públicas (cuando sea legalmente requerido)</li>
              <li>Asesores legales y auditores</li>
              <li>Proveedores de análisis y marketing</li>
              <li>Plataformas de redes sociales</li>
              <li>Otros prestadores de servicios en virtud de contrato de encargo de tratamiento</li>
            </ul>
            <p className="mt-4">Los receptores internacionales solo recibirán datos si cuentan con las garantías apropiadas conforme al RGPD.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. PERÍODO DE CONSERVACIÓN</h2>
            <p>Los datos personales serán conservados durante el tiempo necesario para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Cumplir con las finalidades descritas en esta política</li>
              <li>Satisfacer las obligaciones legales aplicables</li>
              <li>Resolver controversias y hacer valer derechos</li>
            </ul>
            <p className="mt-4"><strong>Períodos específicos:</strong></p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Datos comerciales y de transacciones: Según normativa fiscal (5 años mínimo)</li>
              <li>Datos de clientes activos: Duración de la relación comercial</li>
              <li>Datos de marketing: Hasta la retirada del consentimiento</li>
              <li>Datos técnicos (cookies): Según configuración específica</li>
              <li>Datos de comunicaciones: 3-5 años según tipo</li>
            </ul>
            <p className="mt-4">Después de estos períodos, los datos serán suprimidos o anonimizados, salvo que exista una obligación legal que requiera su conservación.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. TRANSFERENCIAS INTERNACIONALES</h2>
            <p>Si transferimos datos personales fuera del Espacio Económico Europeo (EEE), lo haremos bajo las siguientes garantías:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Decisión de adecuación de la Comisión Europea</li>
              <li>Cláusulas Contractuales Estándar (SCCs)</li>
              <li>Normas Corporativas Vinculantes (BCRs)</li>
              <li>Otros mecanismos permitidos por el RGPD</li>
            </ul>
            <p className="mt-4">Puede solicitar información detallada sobre transferencias internacionales mediante contacto@inndynamics.com.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. DERECHOS DEL INTERESADO</h2>
            <p>De conformidad con el RGPD y la LOPDGDD, usted tiene los siguientes derechos:</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">9.1 Derecho de Acceso</h3>
            <p>Derecho a obtener confirmación de si se están tratando sus datos personales y acceso a los mismos.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">9.2 Derecho de Rectificación</h3>
            <p>Derecho a solicitar la corrección de datos personales inexactos o incompletos.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">9.3 Derecho de Supresión</h3>
            <p>Derecho a solicitar la eliminación de sus datos personales bajo ciertas circunstancias (derecho al olvido).</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">9.4 Derecho a la Limitación del Tratamiento</h3>
            <p>Derecho a solicitar la restricción del tratamiento de sus datos en determinadas situaciones.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">9.5 Derecho a la Portabilidad</h3>
            <p>Derecho a recibir sus datos personales en formato estructurado, de uso común y legible por máquina, y a transmitirlos a otro responsable.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">9.6 Derecho de Oposición</h3>
            <p>Derecho a oponerse al tratamiento de sus datos para finalidades de marketing directo, perfilado y otras actividades.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">9.7 Derecho a No Ser Objeto de Decisiones Automatizadas</h3>
            <p>Derecho a no ser sometido a decisiones basadas únicamente en el tratamiento automatizado que produzca efectos legales sobre usted.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">9.8 Derecho a Retirar el Consentimiento</h3>
            <p>Derecho a retirar en cualquier momento el consentimiento prestado, sin que esto afecte a la legalidad del tratamiento realizado antes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. EJERCICIO DE DERECHOS</h2>
            <p>Para ejercitar cualquiera de los derechos anteriores, deberá enviar una solicitud a:</p>
            <ul className="list-none pl-0 mt-2 space-y-1">
              <li><strong>Correo electrónico:</strong> contacto@inndynamics.com</li>
              <li><strong>Dirección postal:</strong> C/Carlos de Cepeda, 3. 2A. 41005. Sevilla, España</li>
            </ul>
            <p className="mt-4"><strong>Requisitos de la solicitud:</strong></p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Incluir documentación acreditativa de su identidad</li>
              <li>Describir claramente el derecho que desea ejercitar</li>
              <li>Especificar datos personales sobre los que se refiere la solicitud</li>
              <li>Proporcionar información de contacto válida</li>
            </ul>
            <p className="mt-4">La Empresa responderá a su solicitud dentro de los plazos legales establecidos (generalmente, 30 días hábiles).</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. SEGURIDAD DE LOS DATOS</h2>
            <p>La Empresa ha implementado medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado, incluyendo:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Cifrado de datos en tránsito y en reposo</li>
              <li>Control de acceso basado en roles</li>
              <li>Autenticación multifactor</li>
              <li>Auditorías de seguridad periódicas</li>
              <li>Políticas de contraseña robustas</li>
              <li>Formación en protección de datos para empleados</li>
              <li>Evaluaciones de riesgos</li>
              <li>Procedimientos de respuesta a incidentes</li>
            </ul>
            <p className="mt-4">No obstante, ningún sistema es completamente seguro. La Empresa no puede garantizar la seguridad absoluta, pero se compromete a mantener estándares altos de protección.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. COOKIES Y TECNOLOGÍAS DE SEGUIMIENTO</h2>
            <p>La Empresa utiliza cookies y tecnologías similares en sus sitios web y aplicaciones:</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">12.1 Tipos de Cookies</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio web</li>
              <li><strong>Cookies de análisis:</strong> Para medir la actividad y mejorar servicios</li>
              <li><strong>Cookies de marketing:</strong> Para enviar publicidad personalizada</li>
              <li><strong>Cookies de terceros:</strong> Según políticas de terceros</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">12.2 Consentimiento</h3>
            <p>Las cookies no técnicas requieren su consentimiento previo. Puede gestionar sus preferencias de cookies en cualquier momento a través del gestor de consentimiento del sitio web.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">12.3 Información Adicional</h3>
            <p>Para más información sobre cookies, consulte nuestra Política de Cookies.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. INFORMACIÓN PARA MENORES DE EDAD</h2>
            <p>Los servicios de la Empresa no están dirigidos a menores de 16 años. No recabamos datos personales de menores de edad intencionadamente. Si tenemos conocimiento de que hemos recabado datos de un menor sin consentimiento parental, suprimiremos tales datos inmediatamente.</p>
            <p className="mt-4">Los menores de 16 años solo pueden proporcionar datos si cuentan con el consentimiento de sus padres o tutores legales.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">14. CAMBIOS EN ESTA POLÍTICA</h2>
            <p>La Empresa se reserva el derecho a modificar esta Política de Privacidad en cualquier momento. Las modificaciones serán efectivas al momento de su publicación en nuestro sitio web. Le recomendamos revisar periódicamente esta política para estar informado sobre cómo protegemos sus datos.</p>
            <p className="mt-4">En caso de cambios significativos, le notificaremos mediante correo electrónico o aviso destacado en nuestro sitio web.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">15. CONTACTO Y DERECHOS DE PETICIÓN</h2>
            <p>Para cualquier consulta, reclamación o para ejercitar sus derechos, puede contactar con:</p>
            <p className="mt-2"><strong>BCR GROWTH PARTNERS S.L.</strong></p>
            <ul className="list-none pl-0 mt-2 space-y-1">
              <li><strong>Correo electrónico:</strong> contacto@inndynamics.com</li>
              <li><strong>Dirección:</strong> C/Carlos de Cepeda, 3. 2A. 41005. Sevilla, España</li>
            </ul>
            <p className="mt-4"><strong>Autoridad de Control:</strong></p>
            <p>Si considera que el tratamiento de sus datos viola sus derechos, también puede presentar una reclamación ante la Autoridad de Protección de Datos competente:</p>
            <ul className="list-none pl-0 mt-2 space-y-1">
              <li><strong>Autoridad Nacional Española:</strong> Agencia Española de Protección de Datos (AEPD)</li>
              <li><strong>Dirección:</strong> C/Jorge Juan, 6. 28001. Madrid, España</li>
              <li><strong>Sitio web:</strong> www.aepd.es</li>
              <li><strong>Teléfono:</strong> +34 91 508 5900</li>
            </ul>
          </section>

          <section className="mb-8 p-6 bg-muted rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Aceptación de la Política de Privacidad</h2>
            <p>Al acceder y utilizar los servicios de BCR GROWTH PARTNERS S.L., usted acepta esta Política de Privacidad y se compromete a cumplir con sus términos. Si no está de acuerdo, por favor no utilice nuestros servicios.</p>
            <p className="mt-4 text-sm text-muted-foreground">Documento generado por BCR GROWTH PARTNERS S.L. Todos los derechos reservados. Sevilla, España - 2026.</p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
