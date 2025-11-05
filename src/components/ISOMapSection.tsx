import { Book } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const isoMap = [
  { domain: "A.5 — Organizacional", controls: "Políticas, Comitê, Riscos, Fornecedores, Conformidade", docs: "POL-SGSI-001/002, NRM-GR-001, PRO-REL-CON-001" },
  { domain: "A.6 — Pessoas", controls: "Recursos Humanos, Treinamento, Confidencialidade", docs: "NRM-RH-001, NRM-TRN-001, PRO-RH-TERM-001" },
  { domain: "A.7 — Físico", controls: "Segurança Física e Ambiental", docs: "NRM-SF-001" },
  { domain: "A.8 — Tecnológico", controls: "Operações, Logs, Patches, Malware, Backup, Criptografia", docs: "NRM-SO-001, PRO-LM-001, PRO-GP-001, PRO-MALWARE-001" },
  { domain: "A.9 — Acesso", controls: "Controle, Senhas, BYOD", docs: "NRM-CA-001, PRO-CA-CAL-001, PRO-CA-GS-001" },
  { domain: "A.13 / A.14 — Desenvolvimento", controls: "Publicação, SDLC Seguro, Transferência Segura", docs: "NRM-DEV-001, POL-TRANSFER-001, CHK-SDLC-SEC-001" },
  { domain: "A.17 — Continuidade", controls: "PCN, Testes de Contingência, Redundância", docs: "POL-PCN-001, PRO-TEST-CONT-001, TOC-RED-ARQ-001" },
];

export const ISOMapSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-in-progress/10 p-2 rounded-lg">
          <Book className="w-5 h-5 text-in-progress" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{t.isoMap}</h2>
          <p className="text-sm text-muted-foreground">{t.isoMapSubtitle}</p>
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
                  {t.mainControls}
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  {t.relatedDocs}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {isoMap.map((item, index) => (
                <tr key={index} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-foreground">{item.domain}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{item.controls}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground font-mono">{item.docs}</span>
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