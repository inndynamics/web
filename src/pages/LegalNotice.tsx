import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LegalNotice = () => {
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
          <h1 className="text-4xl font-bold mb-2">AVISO LEGAL</h1>
          <p className="text-xl text-muted-foreground mb-8">BCR GROWTH PARTNERS S.L.</p>
          <p className="text-sm text-muted-foreground mb-12">Última actualización: 5 de enero de 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. INFORMACIÓN LEGAL DE LA EMPRESA</h2>
            <p>De conformidad con lo dispuesto en la Ley 34/1988, de 11 de noviembre, de Publicidad, la Ley 34/1988, de 11 de noviembre, sobre Ordenación de la Publicidad, y la Ley 3/1991, de 10 de enero, de Competencia Desleal, se proporciona la siguiente información:</p>
            <ul className="list-none pl-0 mt-4 space-y-1">
              <li><strong>Denominación Social:</strong> BCR GROWTH PARTNERS S.L.</li>
              <li><strong>Domicilio Social:</strong> Plaza Padre Jerónimo de Córdoba, 13. 3A. 41003. Sevilla, España</li>
              <li><strong>Correo Electrónico:</strong> contacto@inndynamics.com</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. RESPONSABLE DE LA PÁGINA WEB</h2>
            <p>La página web es titularidad de BCR GROWTH PARTNERS S.L., empresa constituida conforme a las leyes españolas. Todos los derechos de propiedad intelectual, incluyendo diseño, contenidos, imágenes, textos, logotipos, gráficos, bases de datos y cualquier otro material contenido en la página web, son propiedad de BCR GROWTH PARTNERS S.L. o de terceros que han otorgado licencia para su uso.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. TÉRMINOS DE ACCESO Y USO</h2>
            <p>El acceso y utilización de este sitio web constituye la aceptación sin reservas de las condiciones generales que se recogen en el presente Aviso Legal. BCR GROWTH PARTNERS S.L. se reserva el derecho a modificar las presentes condiciones sin necesidad de previo aviso.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">3.1 Autorización de Uso</h3>
            <p>Se autoriza el acceso y uso de este sitio web únicamente para fines lícitos. El usuario se compromete a no utilizar esta página web para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Realizar actividades ilegales o que infrinjan derechos de terceros</li>
              <li>Transmitir contenido que sea ofensivo, abusivo, amenazante, difamatorio o discriminatorio</li>
              <li>Interferir con el funcionamiento normal del sitio web</li>
              <li>Introducir virus, malware u otros códigos maliciosos</li>
              <li>Realizar actos de piratería informática</li>
              <li>Realizar scraping masivo de contenidos sin autorización</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">3.2 Acceso Restringido</h3>
            <p>BCR GROWTH PARTNERS S.L. se reserva el derecho a restringir o denegar el acceso a cualquier usuario que incumpla estas condiciones, sin necesidad de justificación y con efecto inmediato.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. CONTENIDOS</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">4.1 Responsabilidad sobre Contenidos</h3>
            <p>BCR GROWTH PARTNERS S.L. realiza esfuerzos razonables para mantener la información contenida en este sitio web actualizada y precisa. Sin embargo, no garantiza la exactitud, integridad o actualización de los contenidos.</p>
            <p className="mt-2">Los contenidos de este sitio web se proporcionan únicamente con propósitos informativos. BCR GROWTH PARTNERS S.L. no asume responsabilidad por:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Errores u omisiones en los contenidos</li>
              <li>Interrupciones o retrasos en la prestación del servicio</li>
              <li>Pérdidas o daños derivados del acceso o uso de la página web</li>
              <li>Daños causados por virus u otros elementos dañinos</li>
              <li>Acciones de terceros respecto a los contenidos</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">4.2 Modificación de Contenidos</h3>
            <p>BCR GROWTH PARTNERS S.L. se reserva el derecho de modificar, eliminar o actualizar contenidos en cualquier momento, sin previo aviso y sin responsabilidad alguna.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">4.3 Contenidos de Terceros</h3>
            <p>Este sitio web puede contener enlaces a sitios web de terceros. BCR GROWTH PARTNERS S.L. no se responsabiliza del contenido, exactitud, funcionalidad o legalidad de sitios web de terceros. El acceso a estos sitios es bajo la responsabilidad exclusiva del usuario.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">5.1 Derechos de Autor</h3>
            <p>Todos los contenidos originales (textos, imágenes, diseños, logotipos, gráficos, código fuente, bases de datos y demás) son propiedad de BCR GROWTH PARTNERS S.L., o están sujetos a licencia de terceros. Están protegidos por las leyes de propiedad intelectual español y europeo.</p>
            <p className="mt-2">Se prohíbe expresamente:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Reproducir, distribuir o transmitir contenidos sin autorización escrita</li>
              <li>Modificar, adaptar o crear obras derivadas</li>
              <li>Realizar ingeniería inversa o descompilar código</li>
              <li>Vender, alquilar, arrendar o prestar contenidos</li>
              <li>Utilizar contenidos con fines comerciales sin autorización</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">5.2 Marcas Registradas</h3>
            <p>Los logotipos, nombres, marcas y signos distintivos utilizados en este sitio web están registrados y protegidos conforme a la legislación de marcas. El usuario se compromete a no utilizarlos sin consentimiento expreso.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">5.3 Licencias de Terceros</h3>
            <p>Algunos contenidos pueden estar sujetos a licencias de Creative Commons, GNU u otras licencias de software libre. En estos casos, se respetarán los términos específicos de cada licencia.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. LIMITACIÓN DE RESPONSABILIDAD</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">6.1 Descargo de Responsabilidad General</h3>
            <p>BCR GROWTH PARTNERS S.L. proporciona este sitio web "tal cual está" sin garantías de ningún tipo, ya sean expresas, implícitas o estatutarias. Sin limitación a lo anterior, BCR GROWTH PARTNERS S.L. no garantiza:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Que el sitio web sea libre de errores</li>
              <li>Que sea compatible con todos los navegadores o sistemas operativos</li>
              <li>Que sea ininterrumpido o seguro</li>
              <li>Que sea accesible en todo momento</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">6.2 Limitación de Daños</h3>
            <p>En ningún caso BCR GROWTH PARTNERS S.L. será responsable por daños directos, indirectos, incidentales, especiales o consecuentes, incluyendo pero no limitado a pérdida de ganancias, datos o interrupciones comerciales, incluso si ha sido advertida de la posibilidad de tales daños.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">6.3 Servicios de Terceros</h3>
            <p>BCR GROWTH PARTNERS S.L. no es responsable por la disponibilidad, contenido o funcionamiento de servicios de terceros, incluyendo pero no limitado a plataformas de pago, proveedores de hosting, o servicios vinculados.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. GESTIÓN DE INCIDENCIAS</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">7.1 Disponibilidad del Servicio</h3>
            <p>BCR GROWTH PARTNERS S.L. realiza esfuerzos razonables para mantener la disponibilidad del sitio web. Sin embargo, se reserva el derecho de interrumpir el servicio por:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Mantenimiento técnico</li>
              <li>Actualizaciones de seguridad</li>
              <li>Razones de fuerza mayor</li>
              <li>Problemas técnicos fuera de su control</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">7.2 Aviso de Interrupciones</h3>
            <p>BCR GROWTH PARTNERS S.L. procurará notificar con anticipación sobre interrupciones programadas, aunque no garantiza tal notificación.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. HIPERVÍNCULOS</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">8.1 Enlaces Externos</h3>
            <p>Este sitio web puede contener hipervínculos a sitios web de terceros. BCR GROWTH PARTNERS S.L.:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>No controla ni es responsable del contenido de sitios terceros</li>
              <li>No representa la privacidad, seguridad u otro aspecto de sitios terceros</li>
              <li>Puede modificar, eliminar o cambiar enlaces sin previo aviso</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">8.2 Enlaces Internos</h3>
            <p>El usuario no puede crear enlaces a páginas internas sin autorización expresa de BCR GROWTH PARTNERS S.L.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. PUBLICIDAD Y CONTENIDOS PROMOCIONALES</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">9.1 Publicidad</h3>
            <p>Este sitio web puede contener publicidad de terceros. BCR GROWTH PARTNERS S.L. no es responsable de:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Contenido de publicidad de terceros</li>
              <li>Reclamaciones sobre productos o servicios publicitados</li>
              <li>Transacciones entre usuario y anunciantes</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">9.2 Verificación de Información</h3>
            <p>El usuario debe verificar de forma independiente la precisión y legalidad de toda información y anuncios presentados en este sitio web.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. CUMPLIMIENTO DE NORMATIVAS</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">10.1 Ley de Comercio Electrónico</h3>
            <p>Este sitio web cumple con la Ley 34/1988, de 11 de noviembre, sobre Ordenación de la Publicidad, la Ley 3/1991, de 10 de enero, sobre Competencia Desleal, y las disposiciones relativas al comercio electrónico en España.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">10.2 Protección de Datos</h3>
            <p>El tratamiento de datos personales se realiza conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD). Consulte nuestra Política de Privacidad para más detalles.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">10.3 Accesibilidad</h3>
            <p>BCR GROWTH PARTNERS S.L. se compromete a mantener este sitio web accesible conforme a estándares internacionales de accesibilidad web (WCAG 2.1). Si encuentra barreras de accesibilidad, por favor contacte a contacto@inndynamics.com.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. TRANSACCIONES ELECTRÓNICAS</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">11.1 Consentimiento del Usuario</h3>
            <p>Al realizar transacciones electrónicas a través de este sitio web, el usuario:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Confirma que actúa bajo propia responsabilidad</li>
              <li>Asume todos los riesgos asociados a la transacción electrónica</li>
              <li>Garantiza que posee autoridad legal para realizar la transacción</li>
              <li>Acepta estar vinculado por los términos y condiciones de la transacción</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">11.2 Seguridad</h3>
            <p>BCR GROWTH PARTNERS S.L. implementa medidas de seguridad estándar en la industria. Sin embargo, no garantiza seguridad absoluta en transacciones electrónicas.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. CONTENIDOS ILÍCITOS</h2>
            <p>Si el usuario detecta contenidos ilícitos, ofensivos o que violen derechos de terceros, debe notificar inmediatamente a:</p>
            <p className="mt-2"><strong>Correo de Notificación de Contenidos Ilícitos:</strong> contacto@inndynamics.com</p>
            <p className="mt-4">La notificación debe incluir:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Descripción detallada del contenido ilícito</li>
              <li>URL exacta donde se encuentra el contenido</li>
              <li>Pruebas o motivos por los que considera que es ilícito</li>
              <li>Datos de contacto del denunciante</li>
              <li>Declaración de que la información es veraz</li>
            </ul>
            <p className="mt-4">BCR GROWTH PARTNERS S.L. investigará la denuncia y tomará medidas apropiadas conforme a la ley.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. INDEMNIZACIÓN</h2>
            <p>El usuario acepta indemnizar, defender y eximir a BCR GROWTH PARTNERS S.L., sus directivos, empleados y agentes de cualquier reclamación, demanda, pérdida o gasto (incluyendo honorarios legales) que surja de:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Incumplimiento de este Aviso Legal</li>
              <li>Violación de derechos de terceros</li>
              <li>Contenidos o actividades ilícitas del usuario</li>
              <li>Uso no autorizado de contenidos del sitio web</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">14. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">14.1 Ley Aplicable</h3>
            <p>Este Aviso Legal se regirá e interpretará de conformidad con la legislación española, específicamente las leyes de la Comunidad Autónoma de Andalucía.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">14.2 Jurisdicción</h3>
            <p>Todos los litigios derivados del presente Aviso Legal se someterán a la jurisdicción exclusiva de los Juzgados y Tribunales de Sevilla (España), renunciando expresamente a cualquier otra jurisdicción que pudiera corresponder.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">14.3 Resolución de Conflictos</h3>
            <p>En caso de desacuerdo o conflicto, las partes se comprometen a intentar resolverlo de manera amistosa mediante negociación previa antes de acudir a los tribunales.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">15. NULIDAD PARCIAL</h2>
            <p>Si cualquier disposición de este Aviso Legal es declarada nula, ilegal o inaplicable por cualquier motivo, tal disposición será eliminada, pero el resto del Aviso Legal permanecerá en vigor y será plenamente válido y ejecutable.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">16. RENUNCIA</h2>
            <p>La falta de ejercicio de BCR GROWTH PARTNERS S.L. de cualquiera de los derechos otorgados por este Aviso Legal no constituye una renuncia a tales derechos.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">17. MODIFICACIÓN DEL AVISO LEGAL</h2>
            <p>BCR GROWTH PARTNERS S.L. se reserva el derecho de modificar este Aviso Legal en cualquier momento. Las modificaciones serán efectivas al momento de su publicación. El uso continuado del sitio web después de tales modificaciones constituye aceptación de los términos modificados.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">18. CONTACTO</h2>
            <p>Para cualquier consulta, duda o comunicación relativa a este Aviso Legal, por favor contacte a:</p>
            <p className="mt-2"><strong>BCR GROWTH PARTNERS S.L.</strong></p>
            <ul className="list-none pl-0 mt-2 space-y-1">
              <li><strong>Correo electrónico:</strong> contacto@inndynamics.com</li>
              <li><strong>Dirección:</strong> Plaza Padre Jerónimo de Córdoba, 13. 3A. 41003. Sevilla, España</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">19. AUTORIDAD DE CONTROL</h2>
            <p>Para reclamaciones relacionadas con protección de datos, puede contactar con:</p>
            <p className="mt-2"><strong>Agencia Española de Protección de Datos (AEPD)</strong></p>
            <ul className="list-none pl-0 mt-2 space-y-1">
              <li><strong>Dirección:</strong> C/Jorge Juan, 6. 28001. Madrid, España</li>
              <li><strong>Sitio web:</strong> www.aepd.es</li>
              <li><strong>Teléfono:</strong> +34 91 508 5900</li>
            </ul>
            <p className="mt-4">Para otras reclamaciones relacionadas con comercio electrónico o prácticas comerciales desleales:</p>
            <p className="mt-2"><strong>Junta de Andalucía - Consejería de Economía, Hacienda y Administración Pública</strong></p>
          </section>

          <section className="mb-8 p-6 bg-muted rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Aceptación del Aviso Legal</h2>
            <p>El acceso y uso de este sitio web implica la aceptación completa de los términos y condiciones del presente Aviso Legal. Si no está de acuerdo con alguno de estos términos, le recomendamos que no utilice este sitio web.</p>
            <p className="mt-4 text-sm text-muted-foreground">Documento generado por BCR GROWTH PARTNERS S.L. Todos los derechos reservados. Sevilla, España - 2026.</p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default LegalNotice;
