import { Badge } from "./Badge";
import { Wrench } from "lucide-react";

const procedures = [
  { code: "PRO-CA-CAL-001", title: "Controle de Acesso Lógico", control: "A.9.2", area: "Infra / Segurança", status: "implemented" as const, review: "Anual" },
  { code: "PRO-CAE-001", title: "Acessos Excepcionais", control: "A.9.2 / A.9.4", area: "Infra", status: "implemented" as const, review: "Semestral" },
  { code: "PRO-CA-GS-001", title: "Gestão de Senhas", control: "A.9.2 / A.8.9", area: "Infra", status: "implemented" as const, review: "Anual" },
  { code: "PRO-BCK-CHG-001", title: "Solicitação/Alteração de Backups", control: "A.8.13", area: "Infra", status: "implemented" as const, review: "Anual" },
  { code: "PRO-BCK-RET-001", title: "Retenção de Backups", control: "A.8.13 / A.17.1", area: "Infra", status: "implemented" as const, review: "Anual" },
  { code: "PRO-CRYPTO-001", title: "Gestão de Chaves Criptográficas", control: "A.8.24 / A.8.25", area: "Segurança", status: "implemented" as const, review: "Anual" },
  { code: "PRO-EMAIL-SEC-001", title: "Proteção de E-mails", control: "A.8.10 / A.8.28", area: "Suporte / SI", status: "implemented" as const, review: "Anual" },
  { code: "PRO-INC-001", title: "Resposta a Incidentes", control: "A.5.25 / A.8.16", area: "Segurança", status: "implemented" as const, review: "Trimestral" },
  { code: "PRO-MALWARE-001", title: "Contenção e Resposta a Malware", control: "A.8.7 / A.8.8", area: "Segurança", status: "implemented" as const, review: "Trimestral" },
  { code: "PRO-GP-001", title: "Gestão de Patches", control: "A.8.8", area: "Infra", status: "implemented" as const, review: "Trimestral" },
  { code: "PRO-GMU-001", title: "Execução de Mudanças", control: "A.8.32 / A.12.1", area: "Infra", status: "implemented" as const, review: "Anual" },
  { code: "PRO-KPI-INC-001", title: "Indicadores de Incidentes", control: "A.5.4 / A.5.25", area: "Segurança", status: "implemented" as const, review: "Trimestral" },
];

export const ProceduresSection = () => {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-info/10 p-2 rounded-lg">
          <Wrench className="w-5 h-5 text-info" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Procedimentos (PRO)</h2>
          <p className="text-sm text-muted-foreground">Execução Operacional</p>
        </div>
      </div>
      
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  Código
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  Título
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  Controle ISO
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  Área
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  Maturidade
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  Revisão
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {procedures.map((proc) => (
                <tr key={proc.code} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-mono font-medium text-info">{proc.code}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-card-foreground">{proc.title}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-muted-foreground font-mono">{proc.control}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{proc.area}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={proc.status}>
                      ✅ Implementado
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-muted-foreground">{proc.review}</span>
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
