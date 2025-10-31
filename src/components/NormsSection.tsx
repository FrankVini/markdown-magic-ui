import { Badge } from "./Badge";
import { Settings } from "lucide-react";

const norms = [
  { code: "NRM-CA-001", title: "Controle de Acesso", control: "A.9.1 – A.9.4", area: "Infra / Segurança", status: "implemented" as const, review: "Anual" },
  { code: "NRM-CI-001", title: "Classificação da Informação", control: "A.5.12 / A.5.13", area: "Segurança", status: "implemented" as const, review: "Bienal" },
  { code: "NRM-CON-001", title: "Conformidade", control: "A.5.31 – A.5.37", area: "Jurídico / SI", status: "implemented" as const, review: "Anual" },
  { code: "NRM-CONX-001", title: "Interconexões com Terceiros", control: "A.5.19 / A.8.28", area: "Segurança / Infra", status: "implemented" as const, review: "Anual" },
  { code: "NRM-CR-001", title: "Criptografia e Gestão de Chaves", control: "A.8.24 / A.8.25", area: "Segurança", status: "implemented" as const, review: "Anual" },
  { code: "NRM-DEV-001", title: "Desenvolvimento e Aquisição Segura", control: "A.8.32 / A.14.2", area: "Desenvolvimento", status: "implemented" as const, review: "Anual" },
  { code: "NRM-EUC-001", title: "Uso de Equipamentos Computacionais", control: "A.6.2 / A.8.1", area: "Infra", status: "implemented" as const, review: "Bienal" },
  { code: "NRM-GCN-001", title: "Gestão de Continuidade", control: "A.17.1 / A.17.2", area: "Segurança / Infra", status: "implemented" as const, review: "Anual" },
  { code: "NRM-GMU-001", title: "Gestão de Mudanças", control: "A.8.32 / A.12.1", area: "Infra", status: "implemented" as const, review: "Anual" },
  { code: "NRM-GPR-001", title: "Gestão de Problemas", control: "A.8.28 / A.10.1", area: "Infra / Suporte", status: "implemented" as const, review: "Anual" },
  { code: "NRM-GR-001", title: "Gestão de Riscos", control: "A.5.4 / A.5.7", area: "Segurança", status: "implemented" as const, review: "Semestral" },
  { code: "NRM-GSI-001", title: "Gestão de Incidentes", control: "A.5.25 / A.8.16", area: "Segurança", status: "implemented" as const, review: "Trimestral" },
];

export const NormsSection = () => {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-accent/10 p-2 rounded-lg">
          <Settings className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Normas (NRM)</h2>
          <p className="text-sm text-muted-foreground">Diretrizes Táticas e Técnicas</p>
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
              {norms.map((norm) => (
                <tr key={norm.code} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a 
                      href="about:blank" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-mono font-medium text-accent hover:underline cursor-pointer"
                    >
                      {norm.code}
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-card-foreground">{norm.title}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-muted-foreground font-mono">{norm.control}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{norm.area}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={norm.status}>
                      ✅ Implementado
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-muted-foreground">{norm.review}</span>
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
