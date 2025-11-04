import { Target, Calendar } from "lucide-react";

const nextSteps = [
  { icon: "📁", text: "Criar diretório Lovable/SharePoint com os 76 documentos do SGSI" },
  { icon: "📊", text: "Integrar esta base ao Framework Deloitte (atualização automática do score ISO)" },
  { icon: "🔐", text: "Definir próximos controles pendentes: PRO-ATIVOS-001/002, NRM-SF-002, NRM-SOD-001" },
  { icon: "🕒", text: "Próxima auditoria interna ISO 27001: Fevereiro/2026" },
  { icon: "📈", text: "Exportar para Power BI (controle ISO, maturidade, responsável, status, link evidência)" },
];

const metrics = [
  { label: "Controles ISO Implementados", value: "71 / 83 (86%)" },
  { label: "Controles em Revisão", value: "12 (14%)" },
  { label: "Controles Planejados", value: "4 (5%)" },
  { label: "Maturidade Média Global", value: "8.1 / 10" },
  { label: "Próxima Revisão Geral", value: "Março/2026" },
];

export const NextSteps = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      {/* Próximas Etapas */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-info/10 p-2 rounded-lg">
            <Target className="w-5 h-5 text-info dark:text-info" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Próximas Etapas Estratégicas</h2>
            <p className="text-sm text-muted-foreground">Roadmap de Implementação</p>
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

      {/* Indicadores Gerais */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-accent/10 p-2 rounded-lg">
            <Calendar className="w-5 h-5 text-accent dark:text-accent" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Indicadores Gerais</h2>
            <p className="text-sm text-muted-foreground">Métricas do SGSI</p>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-md">
          <table className="w-full">
            <tbody className="divide-y divide-border">
              {metrics.map((metric, index) => (
                <tr key={index} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{metric.label}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm font-semibold text-foreground">{metric.value}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
