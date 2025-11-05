import { Badge } from "./Badge";
import { FileText } from "lucide-react";

const policies = [
  {
    code: "POL-SGSI-001",
    title: "Política de Segurança da Informação",
    control: "A.5.1 / A.5.2",
    area: "Segurança da Informação",
    status: "implemented" as const,
    review: "Anual"
  },
  {
    code: "POL-SGSI-002",
    title: "Comitê de Segurança da Informação e Privacidade",
    control: "A.5.2 / A.5.3",
    area: "Segurança da Informação",
    status: "implemented" as const,
    review: "Anual"
  },
  {
    code: "POL-PCN-001",
    title: "Política de Continuidade de Negócios",
    control: "A.17.1 / A.17.2",
    area: "Segurança / Infraestrutura",
    status: "implemented" as const,
    review: "Anual"
  },
  {
    code: "POL-RET-001",
    title: "Política de Retenção de Dados",
    control: "A.5.33 / A.8.10",
    area: "Jurídico / SI",
    status: "implemented" as const,
    review: "Bienal"
  },
  {
    code: "POL-MAL-001",
    title: "Política de Proteção contra Códigos Maliciosos",
    control: "A.8.7 / A.8.8",
    area: "Segurança / Suporte",
    status: "implemented" as const,
    review: "Anual"
  },
  {
    code: "POL-PASS-001",
    title: "Política de Senhas",
    control: "A.9.2 / A.9.4",
    area: "Infraestrutura / Segurança",
    status: "implemented" as const,
    review: "Anual"
  },
  {
    code: "POL-TRANSFER-001",
    title: "Política de Transferência Segura de Informações",
    control: "A.13.2 / A.5.10",
    area: "Segurança / Infra",
    status: "implemented" as const,
    review: "Anual"
  },
  {
    code: "POL-EUC-001",
    title: "Política de Controle de Computação do Usuário Final",
    control: "A.8.32 / A.9.4",
    area: "Desenvolvimento / SI",
    status: "review" as const,
    review: "Anual"
  },
  {
    code: "POL-DEV-MASK-001",
    title: "Política de Uso de Dados em Ambientes de Teste",
    control: "A.8.10 / A.14.2",
    area: "Desenvolvimento / SI",
    status: "implemented" as const,
    review: "Anual"
  },
  {
    code: "POL-SOFT-001",
    title: "Política de Uso de Software",
    control: "A.8.9 / A.8.28",
    area: "Infra / Suporte",
    status: "implemented" as const,
    review: "Bienal"
  }
];

export const PoliciesSection = () => {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg" style={{ backgroundColor: 'hsl(207 26% 54% / 0.1)' }}>
          <FileText className="w-5 h-5" style={{ color: 'hsl(207 26% 54%)' }} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Políticas (POL)</h2>
          <p className="text-sm text-muted-foreground">Diretrizes Estratégicas</p>
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
                  Área Responsável
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
              {policies.map((policy, index) => (
                <tr key={policy.code} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a 
                      href={index === 0 ? "/documents/Politica_Iongrade_1.pdf" : "about:blank"}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-mono font-medium hover:underline cursor-pointer dark:text-white"
                      style={{ color: 'hsl(207 26% 54%)' }}
                    >
                      {policy.code}
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-card-foreground">{policy.title}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-muted-foreground font-mono">{policy.control}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{policy.area}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={policy.status}>
                      {policy.status === "implemented" ? "✅ Implementado" : "🟡 Em Revisão"}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-muted-foreground">{policy.review}</span>
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
