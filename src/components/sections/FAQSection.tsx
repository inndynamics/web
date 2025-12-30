import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tiempo dedica el dueño/CEO durante el proyecto?",
    answer: "Mínimo 2 horas/semana en reuniones. Si quieres ir rápido, máximo 5 horas/semana en reuniones + validaciones. Queremos que participes, pero no que el proyecto te consuma.",
  },
  {
    question: "¿Qué pasa si el proyecto no genera resultados?",
    answer: "Medimos progreso cada 2 semanas. Si algo no funciona, pivotamos en tiempo real. Si los resultados no aparecen en 6 meses, renegociamos tarifas. Queremos que esto funcione tanto como tú.",
  },
  {
    question: "¿Nos obligáis a cambiar nuestro software actual?",
    answer: "No obligamos, pero recomendamos. Analizamos ROI de cambio vs. migración. Si tu CRM actual es muy viejo, la productividad sufre. Siempre priorizamos lo que tiene más sentido económico.",
  },
  {
    question: "¿Podemos empezar solo con Digital Efficiency?",
    answer: "Sí, totalmente. Cada servicio es modular. Aunque recomendamos Diagnosis primero para saber dónde están los mayores gaps y priorizar correctamente.",
  },
  {
    question: "¿Qué pasa después de que termina el proyecto?",
    answer: "Tres opciones: (1) Parar (te quedas con todo implementado), (2) Advisory Board mensual para seguimiento, (3) Fractional Director para seguir escalando. Tú decides el nivel de acompañamiento.",
  },
  {
    question: "¿Trabajáis fuera de Andalucía?",
    answer: "Nuestro foco es Andalucía (Sevilla, Córdoba, Málaga), pero evaluamos proyectos en toda España caso por caso. La proximidad nos permite dar mejor servicio.",
  },
  {
    question: "¿Cuál es el tamaño mínimo de empresa con la que trabajáis?",
    answer: "500K€ de facturación anual. Por debajo de eso, recomendamos otras soluciones más adecuadas para tu fase. Queremos trabajar donde podamos generar máximo impacto.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-gray-light">
      <div className="container-bcr max-w-4xl">
        <h2 className="text-h2-sm lg:text-h2 text-center mb-16">
          Preguntas Frecuentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-background px-8 rounded-xl border-none"
            >
              <AccordionTrigger className="text-left text-body-lg font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
