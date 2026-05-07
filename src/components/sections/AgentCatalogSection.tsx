import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

interface Agent {
  name: string;
  subtitle: string;
  desc: string;
  roi: string;
}

interface Sector {
  label: string;
  agents: Agent[];
}

const sectors: Sector[] = [
  {
    label: "Salud / Clínicas",
    agents: [
      { name: "RecepcionIA", subtitle: "Virtual 24/7", desc: "Gestiona booking, confirmaciones, recordatorios y FAQ.", roi: "2.8x" },
      { name: "TriajeBot", subtitle: "Pre-evaluación", desc: "Clasifica urgencias y deriva al especialista correcto.", roi: "10x+" },
      { name: "SeguimientoDoc", subtitle: "Post-tratamiento", desc: "Mensajes programados, encuestas y alertas automáticas.", roi: "1.5-2x" },
      { name: "VetAssist", subtitle: "Veterinarias", desc: "FAQ veterinario, booking y seguimiento post-cirugía.", roi: "2-3x" },
      { name: "EstheticaBot", subtitle: "Estética", desc: "Cualificación, presupuestos y gestión de before/after.", roi: "5-6x" },
    ],
  },
  {
    label: "Legal / Abogados",
    agents: [
      { name: "IntakeLegal", subtitle: "Captación 24/7", desc: "Cualificación, recopilación documentación inicial y agenda consultas.", roi: "5-9x" },
      { name: "PlazosGuard", subtitle: "Gestor de Plazos", desc: "Calendario de plazos, alertas automáticas escalonadas e informes.", roi: "3-5x" },
      { name: "DocuLegal", subtitle: "Generador Documental", desc: "Genera borradores, revisa cláusulas y compara versiones.", roi: "3-4x" },
      { name: "FiscalBot", subtitle: "Asesoría Fiscal", desc: "FAQ fiscal, cálculo orientativo de impuestos y recordatorio de plazos.", roi: "2-4x" },
    ],
  },
  {
    label: "Inmobiliario",
    agents: [
      { name: "LeadHunter", subtitle: "Cualificador 24/7", desc: "Respuesta inmediata, cualificación, matching y agenda de visita.", roi: "7-12x" },
      { name: "PropertyMatch", subtitle: "Matching Inteligente", desc: "Análisis de preferencias, matching automático y notificaciones.", roi: "4-7x" },
      { name: "DescriptoIA", subtitle: "Generador de Descripciones", desc: "Descripciones multidioma con SEO, análisis de fotos y adaptación por portal.", roi: "6-10x" },
      { name: "TenantCare", subtitle: "Property Management", desc: "Recepción de incidencias 24/7, clasificación y coordinación de técnicos.", roi: "1.5-2.5x" },
    ],
  },
  {
    label: "Hospitality / Hoteles",
    agents: [
      { name: "ConciergeAI", subtitle: "Concierge Virtual", desc: "FAQ hotel, recomendaciones personalizadas, upselling y room service.", roi: "3-5x" },
      { name: "BookingDirect", subtitle: "Reservas Anti-OTA", desc: "Motor conversacional con comparación OTAs e incentivos directos.", roi: "3-5x" },
      { name: "RestoBot", subtitle: "Restaurantes", desc: "Reservas 24/7, lista de espera, menú del día, alérgenos y upselling.", roi: "3-5x" },
      { name: "TourGuide AI", subtitle: "Tours y Experiencias", desc: "Info multidioma, booking, recomendación por perfil y seguimiento.", roi: "3-5x" },
      { name: "ReviewManager", subtitle: "Reputación Online", desc: "Monitoreo en Google y TripAdvisor con respuestas personalizadas.", roi: "3-5x" },
    ],
  },
  {
    label: "E-commerce / Retail",
    agents: [
      { name: "ShopAssist", subtitle: "Asistente de Compra", desc: "Recomendaciones, comparación de productos, guía de tallas.", roi: "8-15x" },
      { name: "CartRescue", subtitle: "Recuperación de Carritos", desc: "Detección de abandono, mensaje personalizado e incentivo dinámico.", roi: "12-18x" },
      { name: "RevenueBoost", subtitle: "Upselling/Cross-selling", desc: "Recomendaciones contextuales en tiempo real y bundles dinámicos.", roi: "26-40x" },
      { name: "PostSale", subtitle: "Gestión Post-venta", desc: "Gestión de devoluciones, tracking, resolución de incidencias.", roi: "18-28x" },
      { name: "StockAlert", subtitle: "Inventario Inteligente", desc: "Alertas de stock bajo, predicción de demanda y reposición.", roi: "5-10x" },
      { name: "ReviewHarvest", subtitle: "Recolección de Reseñas", desc: "Solicitud automática post-compra, incentivos y análisis de sentimiento.", roi: "4-8x" },
    ],
  },
  {
    label: "Educación / Academias",
    agents: [
      { name: "TutorIA", subtitle: "Tutor Personalizado", desc: "Resolución de dudas 24/7 con explicaciones adaptativas.", roi: "5-10x" },
      { name: "CourseAdvisor", subtitle: "Recomendador de Cursos", desc: "Test de nivel, recomendación personalizada y proceso guiado.", roi: "12-20x" },
      { name: "OnboardStudent", subtitle: "Onboarding Alumnos", desc: "Guía de bienvenida, configuración de plataforma y FAQ.", roi: "3-5x" },
      { name: "ExamBot", subtitle: "Evaluación Automatizada", desc: "Generación de preguntas, corrección auto y detección de plagio.", roi: "4-8x" },
      { name: "TeacherAssist", subtitle: "Asistente Profesores", desc: "Generación de materiales, planificación de clases e informes.", roi: "3-5x" },
      { name: "AlumniConnect", subtitle: "Red Alumni", desc: "Newsletter personalizada, eventos, networking y cursos avanzados.", roi: "5-10x" },
    ],
  },
  {
    label: "Finanzas / Banca",
    agents: [
      { name: "FinAdvisor", subtitle: "Asesor Financiero IA", desc: "Análisis de cartera, recomendaciones y alertas de mercado.", roi: "3-6x" },
      { name: "ClaimAssist", subtitle: "Gestión de Siniestros", desc: "Apertura de siniestros 24/7, recopilación documental y estimación.", roi: "5-10x" },
      { name: "KYCFlow", subtitle: "Onboarding KYC", desc: "Verificación de identidad, documentación y checks automáticos.", roi: "4-8x" },
      { name: "FraudWatch", subtitle: "Detección de Fraude", desc: "Monitoreo en tiempo real, scoring de riesgo y bloqueo preventivo.", roi: "10-50x" },
      { name: "InsurBot", subtitle: "FAQ Seguros", desc: "FAQ inteligente, cotización orientativa y renovación guiada.", roi: "5-10x" },
      { name: "PortfolioBot", subtitle: "Robo-Advisor Lite", desc: "Perfil de riesgo, recomendación de cartera y rebalanceo.", roi: "3-5x" },
    ],
  },
  {
    label: "Recursos Humanos",
    agents: [
      { name: "TalentScreen", subtitle: "Screening de CVs", desc: "Parsing de CVs, scoring automático y ranking de candidatos.", roi: "5-10x" },
      { name: "InterviewScheduler", subtitle: "Programación", desc: "Propuesta de horarios, confirmación automática y recordatorios.", roi: "4-8x" },
      { name: "OnboardBuddy", subtitle: "Onboarding Empleados", desc: "Guía paso a paso, FAQ empresa, checklist y presentación del equipo.", roi: "3-6x" },
      { name: "HRHelper", subtitle: "FAQ RRHH Interno", desc: "FAQ inteligente sobre vacaciones, nóminas y procesos de baja.", roi: "4-8x" },
      { name: "PulseCheck", subtitle: "Clima Laboral", desc: "Micro-encuestas semanales, análisis de sentimiento y alertas.", roi: "3-5x" },
      { name: "ExitInsight", subtitle: "Entrevistas de Salida", desc: "Entrevista estructurada y análisis de patrones de rotación.", roi: "5-15x" },
    ],
  },
  {
    label: "Logística / Transporte",
    agents: [
      { name: "TrackBot", subtitle: "Tracking Inteligente", desc: "Tracking en tiempo real, notificaciones proactivas y reagendamiento.", roi: "7-13x" },
      { name: "RouteOptimizer", subtitle: "Optimización de Rutas", desc: "Optimización diaria, recálculo en tiempo real y reporting.", roi: "5-10x" },
      { name: "SupplierConnect", subtitle: "Coordinación Proveedores", desc: "Órdenes automáticas, seguimiento de entregas y alertas de retrasos.", roi: "3-6x" },
      { name: "DemandPredict", subtitle: "Predicción de Demanda", desc: "Forecast histórico + tendencias, alertas y recomendaciones.", roi: "5-15x" },
    ],
  },
  {
    label: "SaaS / Tecnología",
    agents: [
      { name: "SupportAI L1", subtitle: "Soporte Nivel 1", desc: "Resolución de tickets comunes con RAG sobre base de conocimientos.", roi: "8-15x" },
      { name: "ChurnGuard", subtitle: "Prevención de Churn", desc: "Scoring de riesgo, alertas tempranas e intervención proactiva.", roi: "10-20x" },
      { name: "DemoBot", subtitle: "Asistente de Demos", desc: "Demo self-service, cualificación durante la demo y agenda de call.", roi: "5-10x" },
      { name: "DocuBot", subtitle: "Documentación Interactiva", desc: "Búsqueda conversacional, ejemplos de código y tutoriales guiados.", roi: "4-8x" },
    ],
  },
  {
    label: "Construcción",
    agents: [
      { name: "ObraTracker", subtitle: "Seguimiento de Obra", desc: "Registro diario de avance, análisis de fotos y alertas de desviación.", roi: "3-6x" },
      { name: "PresupuestoBot", subtitle: "Control de Costes", desc: "Tracking costes vs presupuesto, alertas y predicción de sobrecoste.", roi: "4-8x" },
      { name: "SubcontractCoord", subtitle: "Coordinación Subcontratas", desc: "Calendario de trabajos, notificaciones y confirmación de disponibilidad.", roi: "2-4x" },
      { name: "BuyerAssist", subtitle: "Atención al Comprador", desc: "Info de promociones, planos, agenda de visita y simulación hipoteca.", roi: "5-10x" },
    ],
  },
  {
    label: "Automotive",
    agents: [
      { name: "AutoLeadQual", subtitle: "Cualificación de Leads", desc: "Respuesta inmediata, cualificación y agenda de test drive.", roi: "10-15x" },
      { name: "ServiceBot", subtitle: "Post-venta", desc: "Recordatorio de revisiones, cita taller e historial del vehículo.", roi: "5-10x" },
      { name: "CarConfig", subtitle: "Configurador IA", desc: "Configuración guiada por chat, extras, comparativa y presupuesto final.", roi: "3-6x" },
      { name: "RentAssist", subtitle: "Rent-a-Car", desc: "Disponibilidad en tiempo real, upselling y check-in digital.", roi: "3-6x" },
    ],
  },
  {
    label: "Operaciones Internas",
    agents: [
      { name: "SalesProspector", subtitle: "Prospección Outbound", desc: "Scraping LinkedIn, redacción personalizada y seguimiento automático.", roi: "10x" },
      { name: "SalesCloser", subtitle: "Cierre de Ventas", desc: "Chat de cualificación 24/7, manejo de objeciones y cierre de demos.", roi: "15x" },
      { name: "InvoiceBot", subtitle: "Procesamiento de Facturas", desc: "OCR avanzado, validación de datos y conciliación bancaria automática.", roi: "5x" },
      { name: "ReportGenerator", subtitle: "Generador de Informes", desc: "Conexión a APIs, consolidación de datos, visualización y resumen.", roi: "6x" },
    ],
  },
];

const AgentCatalogSection = () => {
  const [activeSector, setActiveSector] = useState(0);

  const parseRoi = (roi: string) => {
    const num = parseFloat(roi.replace(/[^0-9.]/g, ""));
    return num;
  };

  return (
    <section id="agentes" className="section-padding">
      <div className="container-bcr">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">79 Agentes IA para 13 Sectores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Guía estratégica de implementación para cualquier industria. Stack tecnológico: <span className="font-mono text-primary">Gemini Flash-Lite / Pro + ADK Go</span>.
            </p>
          </div>
        </ScrollReveal>

        {/* Sector tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-hide">
          {sectors.map((sector, i) => (
            <button
              key={i}
              onClick={() => setActiveSector(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeSector === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {sector.label}
            </button>
          ))}
        </div>

        {/* Agent cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors[activeSector].agents.map((agent, i) => {
            const roiNum = parseRoi(agent.roi);
            return (
              <div
                key={`${activeSector}-${i}`}
                className="card-dark-hover p-6 relative group"
              >
                {/* ROI badge */}
                <div className={`absolute top-4 right-4 text-xs font-mono px-2 py-1 rounded-full ${
                  roiNum >= 5 ? "bg-success/10 text-success" : "bg-primary/10 text-primary"
                }`}>
                  ROI: {agent.roi}
                </div>

                <h4 className="font-bold text-base mb-1 pr-20">{agent.name}</h4>
                <p className="text-xs text-primary/80 font-medium mb-3">{agent.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{agent.desc}</p>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline group/link"
                >
                  Solicitar demo
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgentCatalogSection;
