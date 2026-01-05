import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
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
          <h1 className="text-4xl font-bold mb-2">TÉRMINOS Y CONDICIONES</h1>
          <p className="text-xl text-muted-foreground mb-8">BCR GROWTH PARTNERS S.L.</p>
          <p className="text-sm text-muted-foreground mb-12">Última actualización: 5 de enero de 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. OBJETO Y ACEPTACIÓN</h2>
            <p>Los presentes Términos y Condiciones (en adelante, "Términos") regulan el uso de los servicios y productos ofrecidos por BCR GROWTH PARTNERS S.L., empresa domiciliada en C/Carlos de Cepeda, 3. 2A. 41005. Sevilla, España, con correo electrónico contacto@bcrgrowth.com (en adelante, "la Empresa" o "Proveedor").</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">1.1 Aceptación de los Términos</h3>
            <p>Al acceder, registrarse o utilizar cualquier servicio de BCR GROWTH PARTNERS S.L., incluyendo pero no limitado a su sitio web, aplicaciones móviles, plataformas online, o comunicarse con la Empresa, el usuario (en adelante, "Usuario" o "Usted") acepta sin reservas todos los términos, condiciones y políticas aquí establecidas.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">1.2 Cambios en los Términos</h3>
            <p>La Empresa se reserva el derecho de modificar estos Términos en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación. El uso continuado de los servicios después de la publicación de cambios constituye aceptación de los términos modificados.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">1.3 Aviso de Cambios Importantes</h3>
            <p>Para cambios sustanciales que afecten derechos fundamentales o responsabilidades del Usuario, la Empresa procurará enviar notificación por correo electrónico con al menos 30 días de anticipación.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. DEFINICIONES</h2>
            <p>Para los propósitos de estos Términos:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>"Usuario":</strong> Cualquier persona física o jurídica que accede a los servicios de la Empresa</li>
              <li><strong>"Servicios":</strong> Todos los servicios, productos, contenidos y funcionalidades ofrecidos por la Empresa</li>
              <li><strong>"Sitio Web":</strong> www.bcrgrowth.com y todos sus subdominios</li>
              <li><strong>"Contenido":</strong> Todo material, incluyendo textos, imágenes, vídeos, software y datos</li>
              <li><strong>"Datos Personales":</strong> Información que identifica o puede identificar a un Usuario, según la legislación de protección de datos</li>
              <li><strong>"Cuenta":</strong> Perfil de Usuario registrado en los servicios de la Empresa</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. SERVICIOS OFRECIDOS</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">3.1 Descripción General</h3>
            <p>BCR GROWTH PARTNERS S.L. ofrece servicios de consultoría empresarial y transformación digital. Los servicios pueden incluir:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Acceso a plataformas digitales</li>
              <li>Herramientas de software</li>
              <li>Consultoría y asesoramiento</li>
              <li>Contenidos educativos o informativos</li>
              <li>Productos o servicios digitales</li>
              <li>Otros servicios según se especifique en ofertas particulares</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">3.2 Variación de Servicios</h3>
            <p>La Empresa se reserva el derecho de:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Modificar, suspender o descontinuar servicios o funcionalidades</li>
              <li>Implementar nuevas características o limitaciones</li>
              <li>Variar la disponibilidad geográfica de servicios</li>
              <li>Cambiar formas de acceso o interfaz de usuario</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">3.3 Servicios en Fase Beta</h3>
            <p>Algunos servicios pueden ofrecerse en fase beta, experimental o "tal como está". La Empresa no garantiza que tales servicios sean:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Estables o sin errores</li>
              <li>Completos o finales</li>
              <li>Disponibles para uso comercial</li>
              <li>Sujetos a los mismos términos de soporte que servicios finales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. REGISTRO Y CUENTA DE USUARIO</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">4.1 Requisitos de Registro</h3>
            <p>Para acceder a ciertos servicios, el Usuario debe crear una cuenta proporcionando:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Información de identificación válida</li>
              <li>Dirección de correo electrónico funcional</li>
              <li>Contraseña segura</li>
              <li>Datos de contacto precisos</li>
            </ul>
            <p className="mt-2">El Usuario debe ser mayor de edad (18 años) o contar con autorización parental.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">4.2 Información Precisión</h3>
            <p>El Usuario garantiza que toda la información proporcionada es:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Veraz, precisa y actual</li>
              <li>Completa y no engañosa</li>
              <li>Representativa de su identidad</li>
            </ul>
            <p className="mt-2">El Usuario se responsabiliza de mantener actualizada su información de cuenta.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">4.3 Responsabilidad de la Contraseña</h3>
            <p>El Usuario es responsable de:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Mantener la confidencialidad de su contraseña</li>
              <li>Todas las actividades realizadas bajo su cuenta</li>
              <li>Notificar inmediatamente a la Empresa de acceso no autorizado</li>
            </ul>
            <p className="mt-2">La Empresa no será responsable por acceso no autorizado resultante de negligencia del Usuario.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">4.4 Políticas de Cuenta</h3>
            <p>La Empresa puede:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Suspender o cancelar cuentas que violen estos Términos</li>
              <li>Rescindir cuentas inactivas conforme a políticas específicas</li>
              <li>Eliminar cuentas y datos asociados según regulaciones</li>
              <li>Denegar acceso a nuevas cuentas si el Usuario ha violado estos Términos previamente</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. DERECHOS DE PROPIEDAD INTELECTUAL</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">5.1 Propiedad de Contenidos</h3>
            <p>Todos los contenidos originales del Sitio Web y Servicios, incluyendo pero no limitado a:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Textos, artículos y documentación</li>
              <li>Gráficos, imágenes y diseños</li>
              <li>Logo y marcas comerciales</li>
              <li>Software, código fuente y aplicaciones</li>
              <li>Bases de datos y compilaciones</li>
              <li>Vídeos y multimedia</li>
            </ul>
            <p className="mt-2">Son propiedad exclusiva de BCR GROWTH PARTNERS S.L. o están licenciados de terceros. Están protegidos por leyes de derechos de autor, marcas, patentes y otras leyes de propiedad intelectual.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">5.2 Licencia de Uso Limitado</h3>
            <p>La Empresa otorga al Usuario una licencia limitada, no exclusiva, intransferible y revocable para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Acceder a los Servicios para uso personal no comercial</li>
              <li>Ver y descargar contenidos para uso privado</li>
              <li>Utilizar funcionalidades de los Servicios conforme a estos Términos</li>
            </ul>
            <p className="mt-4">Esta licencia NO autoriza al Usuario a:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Reproducir o copiar contenidos para distribución</li>
              <li>Modificar, adaptar u crear obras derivadas</li>
              <li>Usar contenidos con fines comerciales sin autorización</li>
              <li>Transferir licencia a terceros</li>
              <li>Hacer ingeniería inversa o descompilar software</li>
              <li>Remover marcas de propiedad intelectual</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">5.3 Contenido del Usuario</h3>
            <p>El Usuario retiene la propiedad de contenidos que crea o sube a los Servicios ("Contenido del Usuario"). Al cargar Contenido del Usuario, el Usuario otorga a la Empresa:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Licencia mundial, perpetua, irrevocable, no exclusiva y libre de royalties</li>
              <li>Derecho a usar, reproducir, distribuir, adaptar y exhibir Contenido del Usuario</li>
              <li>Derecho a sublicenciar a terceros proveedores necesarios para prestar Servicios</li>
              <li>Derecho a eliminar Contenido del Usuario violatorio</li>
            </ul>
            <p className="mt-2">El Usuario es responsable de asegurar que posee derechos sobre Contenido del Usuario y que su uso cumple leyes aplicables.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">5.4 Comentarios y Sugerencias</h3>
            <p>Cualquier comentario, sugerencia o retroalimentación que el Usuario proporcione a la Empresa se considerará no confidencial y podrá ser usado libremente por la Empresa sin restricción o compensación.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. RESTRICCIONES DE USO</h2>
            <p>El Usuario se compromete a NO utilizar los Servicios para:</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">6.1 Actividades Ilegales</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Violar leyes o regulaciones aplicables</li>
              <li>Realizar fraude, estafa o engaño</li>
              <li>Lavado de dinero o financiación de terrorismo</li>
              <li>Tráfico de sustancias controladas</li>
              <li>Evasión de impuestos</li>
              <li>Violación de derechos de terceros</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">6.2 Contenidos Ofensivos</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Contenido ilegal, obsceno, ofensivo o difamatorio</li>
              <li>Acoso, bullying o amenazas</li>
              <li>Discriminación por raza, género, religión, nacionalidad u orientación sexual</li>
              <li>Contenido de abuso infantil o explotación sexual</li>
              <li>Violencia extrema o contenido gráfico perturbador</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">6.3 Interferencia Técnica</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Introducir virus, malware, gusanos u otros códigos dañinos</li>
              <li>Intentar acceder sin autorización a sistemas o cuentas</li>
              <li>Interferir con la disponibilidad o seguridad de Servicios</li>
              <li>Realizar ataques de denegación de servicio (DDoS)</li>
              <li>Realizar web scraping masivo sin autorización</li>
              <li>Alteración de datos o sabotaje técnico</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">6.4 Prácticas Comerciales Desleales</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Reventa de acceso sin autorización</li>
              <li>Publicidad o marketing no solicitado (spam)</li>
              <li>Phishing, social engineering o engaño</li>
              <li>Recopilación de información de otros Usuarios sin consentimiento</li>
              <li>Usar bots o automatización no autorizada</li>
              <li>Arbitrage de dominios o dominios de la Empresa</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">6.5 Violación de Privacidad</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Publicación de información privada de terceros sin consentimiento</li>
              <li>Violación de privacidad o confidencialidad</li>
              <li>Violación de derechos de terceros</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. PAGOS Y FACTURACIÓN</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">7.1 Precios</h3>
            <p>Los precios de los Servicios se indican en el Sitio Web y están sujetos a cambios. La Empresa notificará cambios de precio con anticipación razonable.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">7.2 Método de Pago</h3>
            <p>El Usuario acepta pagar mediante los métodos de pago aceptados:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Tarjeta de crédito/débito</li>
              <li>Transferencia bancaria</li>
              <li>Monederos digitales</li>
              <li>Otros métodos según se especifique</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">7.3 Términos de Pago</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pagos deben ser realizados conforme al calendario establecido</li>
              <li>Moneda por defecto: Euro (EUR)</li>
              <li>Impuestos: El Usuario es responsable de impuestos aplicables</li>
              <li>Impago: La Empresa puede suspender Servicios por impago después de aviso</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">7.4 Ciclos de Facturación</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Suscripciones mensuales: Renovación automática el mismo día del mes</li>
              <li>Suscripciones anuales: Renovación automática 12 meses después</li>
              <li>Servicios bajo demanda: Facturación según uso real</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">7.5 Cancelación y Reembolsos</h3>
            <p>La política de reembolsos se especifica en planes particulares. Generalmente:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Servicios pagados por adelantado no son reembolsables excepto por incumplimiento material de la Empresa</li>
              <li>Solicitudes de reembolso deben ser presentadas dentro del plazo establecido de la compra</li>
              <li>Reembolsos se procesarán al método de pago original</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">7.6 Cambios de Plan</h3>
            <p>El Usuario puede cambiar o actualizar su plan en cualquier momento:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Cambios a plan superior: Se aplican cargos prorrateados</li>
              <li>Cambios a plan inferior: Cambios efectivos en siguiente período de facturación</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. DISPONIBILIDAD Y MANTENIMIENTO</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">8.1 Disponibilidad de Servicios</h3>
            <p>La Empresa realiza esfuerzos razonables para mantener disponibilidad de Servicios 24/7. Sin embargo:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>No garantiza disponibilidad ininterrumpida del 100%</li>
              <li>Puede realizar mantenimiento sin notificación previa en emergencias</li>
              <li>Procurará realizar mantenimiento programado en horarios de menor uso</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">8.2 Mantenimiento Programado</h3>
            <p>La Empresa puede realizar mantenimiento, actualizaciones y mejoras que requieran:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Interrupciones del servicio</li>
              <li>Reducción de funcionalidad temporal</li>
              <li>Indisponibilidad de características específicas</li>
            </ul>
            <p className="mt-2">Cuando sea posible, se notificará con 48 horas de anticipación.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">8.3 Fuerza Mayor</h3>
            <p>La Empresa no será responsable por interrupciones debidas a:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Desastres naturales, terremotos, inundaciones</li>
              <li>Guerra, terrorismo, actos de violencia</li>
              <li>Huelgas, conflictos laborales</li>
              <li>Pandemias o emergencias sanitarias</li>
              <li>Fallos de infraestructura de terceros (proveedores ISP, hosting)</li>
              <li>Sabotaje cibernético masivo</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. SOPORTE TÉCNICO</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">9.1 Disponibilidad de Soporte</h3>
            <p>La Empresa proporciona soporte mediante:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Correo electrónico:</strong> contacto@bcrgrowth.com</li>
              <li>Otros canales según se especifique</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">9.2 Alcance del Soporte</h3>
            <p>La Empresa proporciona soporte para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Problemas técnicos con los Servicios</li>
              <li>Asistencia con funcionalidades</li>
              <li>Cuestiones de cuenta y facturación</li>
            </ul>
            <p className="mt-4">La Empresa NO proporciona soporte para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Configuración de dispositivos del Usuario</li>
              <li>Problemas de conexión de Internet del Usuario</li>
              <li>Software de terceros integrado</li>
              <li>Usos personalizados fuera del alcance original</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">9.3 Tiempo de Respuesta</h3>
            <p>Los tiempos de respuesta indicativos son:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Crítico (servicio down): 2 horas</li>
              <li>Alto (funcionalidad limitada): 4 horas</li>
              <li>Medio (inconveniente menor): 1 día laboral</li>
              <li>Bajo (consulta general): 2-3 días laborales</li>
            </ul>
            <p className="mt-2">Estos son objetivos únicamente y no garantías vinculantes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. GARANTÍAS Y DESCARGOS</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">10.1 Garantía Limitada</h3>
            <p>La Empresa garantiza que los Servicios:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Serán proporcionados de forma profesional</li>
              <li>Cumplirán con estándares de industria razonables</li>
              <li>No violarán derechos de terceros</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">10.2 Descargo de Responsabilidad</h3>
            <p>EXCEPTO DONDE EXPLÍCITAMENTE GARANTIZADO, LOS SERVICIOS SE PROPORCIONAN "TAL COMO ESTÁN" SIN GARANTÍAS DE NINGÚN TIPO, YA SEAN EXPRESAS O IMPLÍCITAS, INCLUYENDO PERO NO LIMITADO A:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Garantías de comercialidad</li>
              <li>Idoneidad para un propósito particular</li>
              <li>Precisión, integridad o no infracción</li>
              <li>Disponibilidad o seguridad</li>
              <li>Ausencia de errores o interrupciones</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">10.3 Precisión de Contenidos</h3>
            <p>El Usuario reconoce que:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Contenidos pueden contener errores, inexactitudes u omisiones</li>
              <li>Contenidos se proporcionan únicamente con propósitos informativos</li>
              <li>La Empresa no proporciona asesoramiento profesional (legal, financiero, médico, etc.)</li>
              <li>Usuarios deben verificar independientemente información crítica</li>
              <li>La Empresa no es responsable por decisiones basadas en contenidos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. LIMITACIÓN DE RESPONSABILIDAD</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">11.1 Límite de Responsabilidad Máxima</h3>
            <p>EXCEPTO POR VIOLACIONES DE CONFIDENCIALIDAD O PROTECCIÓN DE DATOS, EN NINGÚN CASO LA RESPONSABILIDAD TOTAL DE LA EMPRESA POR DAÑOS, INCLUIDOS DIRECTOS, INDIRECTOS, INCIDENTALES, ESPECIALES O CONSECUENTES, EXCEDERÁ:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Para servicios pagados: La cantidad total pagada por el Usuario en los 12 meses anteriores</li>
              <li>Para servicios gratuitos: Cero (sin responsabilidad)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">11.2 Exclusión de Daños Indirectos</h3>
            <p>LA EMPRESA NO SERÁ RESPONSABLE POR:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Pérdida de ganancias, ingresos o ahorros</li>
              <li>Pérdida de datos, corrupción de datos o recuperación</li>
              <li>Pérdida de negocios u oportunidades</li>
              <li>Pérdida de reputación o buena voluntad</li>
              <li>Daños indirectos, incidentales, especiales o consecuentes</li>
            </ul>
            <p className="mt-2">INCLUSO SI HA SIDO ADVERTIDA DE LA POSIBILIDAD DE TALES DAÑOS Y AUNQUE SEA PREVISIBLE.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">11.3 Causa Última</h3>
            <p>Esta limitación se aplica a todas las causas de acción, incluyendo negligencia, incumplimiento de contrato, responsabilidad estricta y otros.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. INDEMNIZACIÓN</h2>
            <p>El Usuario acepta indemnizar, defender y eximir de responsabilidad a BCR GROWTH PARTNERS S.L. y sus directivos, empleados, agentes y proveedores de:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Cualquier reclamación, demanda, pérdida o gasto</li>
              <li>Honorarios legales y costos de litigio</li>
              <li>Daños, multas o sanciones</li>
            </ul>
            <p className="mt-4">Que resulten de:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Incumplimiento de estos Términos por parte del Usuario</li>
              <li>Violación de leyes o derechos de terceros</li>
              <li>Contenido del Usuario que sea ilegal o infractor</li>
              <li>Uso no autorizado de Servicios</li>
              <li>Reclamaciones de terceros contra el Usuario</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. PRIVACIDAD Y PROTECCIÓN DE DATOS</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">13.1 Política de Privacidad</h3>
            <p>El tratamiento de datos personales está regulado por nuestra Política de Privacidad separada, que forma parte integral de estos Términos.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">13.2 Consentimiento para Recopilar Datos</h3>
            <p>Al utilizar los Servicios, el Usuario consiente el tratamiento de sus datos personales conforme a la Política de Privacidad.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">13.3 Cumplimiento Normativo</h3>
            <p>La Empresa cumple con:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Reglamento (UE) 2016/679 (RGPD)</li>
              <li>Ley Orgánica 3/2018 (LOPDGDD)</li>
              <li>Leyes de protección de datos de España</li>
              <li>Otras regulaciones de privacidad aplicables</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">14. COMUNICACIONES</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">14.1 Notificaciones</h3>
            <p>La Empresa puede enviar notificaciones mediante:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Correo electrónico a la dirección registrada</li>
              <li>Publicación en Sitio Web</li>
              <li>Mensaje a través de los Servicios</li>
              <li>Correo postal</li>
            </ul>
            <p className="mt-2">Las notificaciones se consideran efectivas cuando se envían.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">14.2 Comunicaciones del Usuario</h3>
            <p>El Usuario puede contactar a la Empresa mediante:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Correo electrónico:</strong> contacto@bcrgrowth.com</li>
              <li><strong>Dirección postal:</strong> C/Carlos de Cepeda, 3. 2A. 41005. Sevilla, España</li>
              <li>Formularios en Sitio Web</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">14.3 Comunicaciones Comerciales</h3>
            <p>El Usuario puede optar por no recibir comunicaciones comerciales no transaccionales en su configuración de cuenta. Sin embargo, la Empresa puede seguir enviando:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Avisos relacionados con la cuenta</li>
              <li>Notificaciones sobre cambios de Términos o Servicios</li>
              <li>Comunicaciones requeridas por ley</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">15. TERMINACIÓN</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">15.1 Cancelación por el Usuario</h3>
            <p>El Usuario puede cancelar su cuenta en cualquier momento:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Mediante configuración de cuenta</li>
              <li>Por correo electrónico a contacto@bcrgrowth.com</li>
              <li>Por carta a la dirección postal</li>
            </ul>
            <p className="mt-2">La cancelación será efectiva al final del período de facturación actual.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">15.2 Terminación por la Empresa</h3>
            <p>La Empresa puede suspender o cancelar la cuenta del Usuario inmediatamente sin aviso previo si:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Viola estos Términos</li>
              <li>Incurre en actividades ilegales</li>
              <li>Incumple con pagos y no rectifica en 30 días</li>
              <li>El Usuario es amenaza para seguridad o derechos de otros</li>
              <li>Es requerido por ley</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">15.3 Efectos de la Terminación</h3>
            <p>Tras terminación:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>El acceso a los Servicios cesa inmediatamente</li>
              <li>Datos asociados a la cuenta pueden ser eliminados conforme a política de retención</li>
              <li>Obligaciones de pago se mantienen en vigor</li>
              <li>Disposiciones sobre confidencialidad, indemnización y responsabilidad permanecen</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">15.4 Datos Residuales</h3>
            <p>Datos pueden permanecer en sistemas de respaldo por 30-90 días después de cancelación, aunque no serán accesibles.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">16. CONFIDENCIALIDAD</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">16.1 Información Confidencial</h3>
            <p>Si la Empresa comparte información confidencial o datos comerciales sensibles, el Usuario se compromete a:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Mantener confidencialidad</li>
              <li>No divulgar a terceros sin consentimiento escrito</li>
              <li>Usar únicamente para propósitos autorizados</li>
              <li>Implementar medidas de seguridad apropiadas</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">16.2 Información Pública</h3>
            <p>No se consideran confidenciales:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Información públicamente disponible</li>
              <li>Información desarrollada independientemente</li>
              <li>Información que debe divulgarse por ley</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">17. CUMPLIMIENTO NORMATIVO</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">17.1 Leyes Aplicables</h3>
            <p>Los servicios cumplen con leyes de España y la Unión Europea, incluyendo:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Leyes de protección de datos</li>
              <li>Leyes de comercio electrónico</li>
              <li>Leyes de competencia desleal</li>
              <li>Regulaciones de consumidor</li>
              <li>Leyes de accesibilidad digital</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">17.2 Consideraciones Geográficas</h3>
            <p>Ciertos servicios pueden no estar disponibles en todas las jurisdicciones debido a restricciones legales. El Usuario es responsable de asegurar cumplimiento con leyes de su jurisdicción.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">17.3 Sanciones Internacionales</h3>
            <p>La Empresa cumple con sanciones internacionales y puede denegar servicios a usuarios en países sancionados.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">18. LEGISLACIÓN Y JURISDICCIÓN</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">18.1 Ley Aplicable</h3>
            <p>Estos Términos se rigen por las leyes de España, específicamente la Comunidad Autónoma de Andalucía, sin consideración de conflictos de leyes.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">18.2 Solución de Controversias</h3>
            <p>Las partes se comprometen a resolver controversias:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Negociación amistosa:</strong> Intentar resolver mediante comunicación directa dentro de 30 días</li>
              <li><strong>Mediación:</strong> Si no se resuelve, participar en mediación</li>
              <li><strong>Jurisdicción:</strong> Los litigios se someterán a juzgados de Sevilla, España</li>
            </ul>
            <p className="mt-2">El Usuario renuncia a cualquier reclamo que no sea presentado dentro de 1 año después de surgir la causa.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">18.3 Renuncia de Jurisdicción</h3>
            <p>El Usuario acepta someterse exclusivamente a la jurisdicción de tribunales españoles y renuncia a cualquier otro foro legal.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">19. DISPOSICIONES GENERALES</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">19.1 Acuerdo Completo</h3>
            <p>Estos Términos, junto con la Política de Privacidad y Aviso Legal, constituyen el acuerdo completo entre las partes. Prevalecen sobre comunicaciones, ofertas o entendimientos previos.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">19.2 Enmiendas</h3>
            <p>No hay enmiendas a estos Términos excepto mediante documento escrito firmado por ambas partes o mediante publicación oficial por la Empresa.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">19.3 Divisibilidad</h3>
            <p>Si alguna disposición es nula o inaplicable, la disposición será eliminada pero el resto permanecerá válido.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">19.4 No Renuncia</h3>
            <p>El incumplimiento de la Empresa de hacer valer un derecho no constituye renuncia a tal derecho.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">19.5 Relación de Partes</h3>
            <p>Nada en estos Términos crea una sociedad, agencia, empleo u otra relación entre las partes excepto una relación de Usuario-Proveedor.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">19.6 Asignación</h3>
            <p>La Empresa puede asignar estos Términos y Servicios a terceros. El Usuario no puede asignar sin consentimiento escrito.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">19.7 Supervivencia</h3>
            <p>Disposiciones que por su naturaleza deben sobrevivir terminación (confidencialidad, indemnización, limitación de responsabilidad) sobrevivirán terminación o cancelación de estos Términos.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">20. CONTACTO Y RECLAMOS</h2>
            <p>Para cualquier pregunta, reclamación o comunicación relativa a estos Términos:</p>
            <p className="mt-2"><strong>BCR GROWTH PARTNERS S.L.</strong></p>
            <ul className="list-none pl-0 mt-2 space-y-1">
              <li><strong>Correo electrónico:</strong> contacto@bcrgrowth.com</li>
              <li><strong>Dirección:</strong> C/Carlos de Cepeda, 3. 2A. 41005. Sevilla, España</li>
            </ul>

            <p className="mt-4"><strong>Autoridades de Protección de Datos:</strong></p>
            <ul className="list-none pl-0 mt-2 space-y-1">
              <li>Agencia Española de Protección de Datos (AEPD): www.aepd.es, +34 91 508 5900</li>
            </ul>

            <p className="mt-4"><strong>Autoridades de Defensa del Consumidor:</strong></p>
            <ul className="list-none pl-0 mt-2 space-y-1">
              <li>Instituto Nacional del Consumo (INC): www.consumo.es</li>
            </ul>
          </section>

          <section className="mb-8 p-6 bg-muted rounded-lg">
            <h2 className="text-2xl font-bold mb-4">21. ACEPTACIÓN FINAL</h2>
            <p className="font-semibold">EL USO DE LOS SERVICIOS IMPLICA ACEPTACIÓN TOTAL DE ESTOS TÉRMINOS. SI NO ESTÁ DE ACUERDO CON ALGUNA DISPOSICIÓN, NO UTILICE LOS SERVICIOS.</p>
            <p className="mt-4 text-sm text-muted-foreground">Documento generado por BCR GROWTH PARTNERS S.L. Todos los derechos reservados. Sevilla, España - 2026</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Última actualización: 5 de enero de 2026<br />
              Versión: 1.0<br />
              Idioma: Español<br />
              Jurisdicción: España (Andalucía - Sevilla)
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default TermsAndConditions;
