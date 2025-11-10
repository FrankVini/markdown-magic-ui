import { TrendingUp } from "lucide-react";
import { Badge } from "./Badge";
import { useLanguage } from "@/contexts/LanguageContext";

const maturityData = [
  { domain: "A.5 — Política e Organização", score: 8.5, status: "implemented" as const, docs: "POL-SGSI-001 / POL-SGSI-002 / NRM-GR-001", nextAction: "Criar repositório acessível e registrar atas CGSIP" },
  { domain: "A.6 — Recursos Humanos e Papéis", score: 8.0, status: "implemented" as const, docs: "NRM-RH-001 / PRO-RH-TERM-001 / NRM-TRN-001", nextAction: "Digitalizar termos e treinamentos anuais" },
  { domain: "A.7 — Segurança Física e Ambiental", score: 6.5, status: "review" as const, docs: "NRM-SF-001", nextAction: "Atualizar checklist físico e evidências de inspeção" },
  { domain: "A.8 — Gestão Operacional e Ativos", score: 7.8, status: "implemented" as const, docs: "NRM-SO-001 / PRO-LM-001 / POL-BCK-001", nextAction: "Automatizar inventário de ativos e auditoria de logs" },
  { domain: "A.9 — Controle de Acesso", score: 7.0, status: "review" as const, docs: "NRM-CA-001 / PRO-CA-CAL-001 / PRO-CAE-001", nextAction: "Implementar IAM e matriz SoD automatizada" },
  { domain: "A.10 — Criptografia", score: 7.5, status: "implemented" as const, docs: "NRM-CR-001 / PRO-CRYPTO-001", nextAction: "Implantar cofre de chaves e logs de rotação" },
  { domain: "A.11 — Segurança Física e Infraestrutura", score: 6.0, status: "review" as const, docs: "NRM-SF-001 / TOC-RED-ARQ-001", nextAction: "Revalidar redundâncias e evidências de failover" },
  { domain: "A.12 — Operações Seguras e Monitoramento", score: 8.5, status: "implemented" as const, docs: "PRO-GMU-001 / PRO-GP-001 / PRO-MALWARE-001", nextAction: "Implantar auditoria aleatória contínua" },
  { domain: "A.13 — Comunicação e Transferência Segura", score: 8.0, status: "implemented" as const, docs: "POL-TRANSFER-001 / PRO-EMAIL-SEC-001", nextAction: "Implementar DLP e revisar logs de envio seguro" },
  { domain: "A.14 — Desenvolvimento Seguro e Aquisição", score: 8.5, status: "implemented" as const, docs: "NRM-DEV-001 / CHK-SDLC-SEC-001", nextAction: "Auditoria de código e revisão VA contínua" },
  { domain: "A.15 — Fornecedores e Contratos", score: 8.0, status: "implemented" as const, docs: "NRM-NGF-001 / CHK-FORN-SW-001", nextAction: "Automatizar revisão anual de contratos" },
  { domain: "A.16 — Gestão de Incidentes", score: 8.2, status: "implemented" as const, docs: "NRM-GSI-001 / PRO-INC-001 / PRO-KPI-INC-001", nextAction: "Criar matriz de severidade e priorização" },
  { domain: "A.17 — Continuidade de Negócios", score: 8.5, status: "implemented" as const, docs: "POL-PCN-001 / PRO-TEST-CONT-001", nextAction: "Registrar resultados de testes no CGSIP" },
  { domain: "A.18 — Conformidade e Auditoria", score: 8.0, status: "implemented" as const, docs: "PRO-AUD-001 / MAP-REQ-LEGAIS-001", nextAction: "Incluir calendário de auditorias técnicas" },
];

const getStatusColor = (status: "implemented" | "review"): string => {
  return status === "implemented" ? "hsl(146, 72%, 42%)" : "hsl(207, 89%, 68%)";
};

const getStatusIcon = (status: "implemented" | "review"): string => {
  return status === "implemented" ? "✅" : "👁️‍🗨️";
};

export const MaturityOverview = () => {
  const { t } = useLanguage();
  const avgScore = (maturityData.reduce((acc, item) => acc + item.score, 0) / maturityData.length).toFixed(1);

  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-success/10 p-2 rounded-lg">
          <TrendingUp className="w-5 h-5 text-success" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{t.maturityOverview}</h2>
          <p className="text-sm text-muted-foreground">{t.avgScore}: <span className="font-semibold text-success">{avgScore}/10</span></p>
        </div>
      </div>
      
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  {t.domain}
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  {t.maturity}
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  {t.status}
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  {t.keyDocs}
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  {t.nextAction}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {maturityData.map((item, index) => (
                <tr key={index} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-foreground">{item.domain}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <span 
                        className="inline-flex w-6 h-6 rounded-full flex-shrink-0" 
                        style={{ backgroundColor: getStatusColor(item.status) }}
                      ></span>
                      <span className="text-sm font-bold" style={{ color: getStatusColor(item.status) }}>{item.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <span className="text-xl flex-shrink-0">{getStatusIcon(item.status)}</span>
                      <span 
                        className="text-xs font-medium" 
                        style={{ color: getStatusColor(item.status) }}
                      >
                        {item.status === "implemented" ? t.implemented : t.inReview}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground font-mono">{item.docs}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{item.nextAction}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
