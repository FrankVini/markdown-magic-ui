import { Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const nextSteps = [
  { icon: "📁", text: "Criar diretório Lovable/SharePoint com os 76 documentos do SGSI" },
  { icon: "📊", text: "Integrar esta base ao Framework Deloitte (atualização automática do score ISO)" },
  { icon: "🔐", text: "Definir próximos controles pendentes: PRO-ATIVOS-001/002, NRM-SF-002, NRM-SOD-001" },
  { icon: "🕒", text: "Próxima auditoria interna ISO 27001: Fevereiro/2026" },
  { icon: "📈", text: "Exportar para Power BI (controle ISO, maturidade, responsável, status, link evidência)" },
];

export const NextSteps = () => {
  const { t } = useLanguage();
  
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-info/10 p-2 rounded-lg">
          <Target className="w-5 h-5 text-info" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{t.nextSteps}</h2>
          <p className="text-sm text-muted-foreground">{t.nextStepsSubtitle}</p>
        </div>
      </div>
      
      <div className="bg-card border border-border rounded-2xl p-6 shadow-md space-y-4">
        {nextSteps.map((step, index) => (
          <div key={index} className="flex gap-3 items-start">
            <span className="text-2xl flex-shrink-0">{step.icon}</span>
            <p className="text-sm text-card-foreground pt-1">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
