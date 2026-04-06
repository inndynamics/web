import ScrollReveal from "@/components/ScrollReveal";

const categories = [
  { name: "IA & LLMs", items: ["Claude", "Gemini Flash", "GPT-4", "ADK Go"] },
  { name: "CRM", items: ["HubSpot", "Salesforce", "Pipedrive"] },
  { name: "ERP", items: ["SAP", "Oracle", "Holded"] },
  { name: "Comunicación", items: ["WhatsApp Business API", "Slack", "Gmail", "Outlook"] },
  { name: "E-commerce", items: ["Shopify", "WooCommerce", "Magento"] },
  { name: "Marketing", items: ["Google Ads", "Meta Ads", "Google Analytics"] },
  { name: "Calendarios", items: ["Google Calendar", "Outlook Calendar", "Calendly"] },
  { name: "LMS", items: ["Moodle", "Canvas", "Google Classroom"] },
];

const IntegrationsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-bcr">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Integración perfecta con tu ecosistema</h2>
            <p className="text-muted-foreground text-sm">Nos conectamos con las herramientas que ya usas.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="card-dark p-5">
                <h4 className="text-xs font-mono text-primary tracking-wider uppercase mb-3">{cat.name}</h4>
                <div className="space-y-2">
                  {cat.items.map((item, j) => (
                    <p key={j} className="text-sm text-foreground">{item}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
