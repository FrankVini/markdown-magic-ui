import { Badge } from "./Badge";
import { Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const procedures = [
  { code: "PRO-CA-CAL-001", titleKey: "procLogicalAccessControl" as const, control: "A.9.2", areaKey: "areaInfraSecurity" as const, status: "implemented" as const, reviewKey: "annual" as const },
  { code: "PRO-CAE-001", titleKey: "procExceptionalAccess" as const, control: "A.9.2 / A.9.4", areaKey: "areaInfra" as const, status: "implemented" as const, reviewKey: "semiannual" as const },
  { code: "PRO-CA-GS-001", titleKey: "procPasswordManagement" as const, control: "A.9.2 / A.8.9", areaKey: "areaInfra" as const, status: "implemented" as const, reviewKey: "annual" as const },
  { code: "PRO-BCK-CHG-001", titleKey: "procBackupRequest" as const, control: "A.8.13", areaKey: "areaInfra" as const, status: "implemented" as const, reviewKey: "annual" as const },
  { code: "PRO-BCK-RET-001", titleKey: "procBackupRetention" as const, control: "A.8.13 / A.17.1", areaKey: "areaInfra" as const, status: "implemented" as const, reviewKey: "annual" as const },
  { code: "PRO-CRYPTO-001", titleKey: "procCryptoKeyManagement" as const, control: "A.8.24 / A.8.25", areaKey: "areaSecurity" as const, status: "implemented" as const, reviewKey: "annual" as const },
  { code: "PRO-EMAIL-SEC-001", titleKey: "procEmailProtection" as const, control: "A.8.10 / A.8.28", areaKey: "areaSupportIS" as const, status: "implemented" as const, reviewKey: "annual" as const },
  { code: "PRO-INC-001", titleKey: "procIncidentResponse" as const, control: "A.5.25 / A.8.16", areaKey: "areaSecurity" as const, status: "implemented" as const, reviewKey: "quarterly" as const },
  { code: "PRO-MALWARE-001", titleKey: "procMalwareResponse" as const, control: "A.8.7 / A.8.8", areaKey: "areaSecurity" as const, status: "implemented" as const, reviewKey: "quarterly" as const },
  { code: "PRO-GP-001", titleKey: "procPatchManagement" as const, control: "A.8.8", areaKey: "areaInfra" as const, status: "implemented" as const, reviewKey: "quarterly" as const },
  { code: "PRO-GMU-001", titleKey: "procChangeExecution" as const, control: "A.8.32 / A.12.1", areaKey: "areaInfra" as const, status: "implemented" as const, reviewKey: "annual" as const },
  { code: "PRO-KPI-INC-001", titleKey: "procIncidentIndicators" as const, control: "A.5.4 / A.5.25", areaKey: "areaSecurity" as const, status: "implemented" as const, reviewKey: "quarterly" as const },
];

export const ProceduresSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg" style={{ backgroundColor: 'hsl(207 26% 54% / 0.1)' }}>
          <Wrench className="w-5 h-5" style={{ color: 'hsl(207 26% 54%)' }} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{t.procedures}</h2>
          <p className="text-sm text-muted-foreground">{t.proceduresSubtitle}</p>
        </div>
      </div>
      
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  {t.code}
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  {t.title}
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  {t.isoControl}
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  {t.area}
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  {t.maturity}
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  {t.review}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {procedures.map((proc) => (
                <tr key={proc.code} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a 
                      href="about:blank" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-mono font-medium hover:underline cursor-pointer dark:text-white"
                      style={{ color: 'hsl(207 26% 54%)' }}
                    >
                      {proc.code}
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-card-foreground">{t[proc.titleKey]}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-muted-foreground font-mono">{proc.control}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{t[proc.areaKey]}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={proc.status} showLabel>
                      {t.implemented}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-muted-foreground">{t[proc.reviewKey]}</span>
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