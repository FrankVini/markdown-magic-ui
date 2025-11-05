import { Badge } from "./Badge";
import { Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const norms = [
  { code: "NRM-CA-001", titleKey: "normAccessControl" as const, control: "A.9.1 – A.9.4", areaKey: "areaInfraSecurity" as const, status: "implemented" as const, reviewKey: "annual" as const },
  { code: "NRM-CI-001", titleKey: "normInfoClassification" as const, control: "A.5.12 / A.5.13", areaKey: "areaSecurity" as const, status: "implemented" as const, reviewKey: "biennial" as const },
  { code: "NRM-CON-001", titleKey: "normCompliance" as const, control: "A.5.31 – A.5.37", areaKey: "areaLegalIS" as const, status: "implemented" as const, reviewKey: "annual" as const },
  { code: "NRM-CONX-001", titleKey: "normThirdPartyConnections" as const, control: "A.5.19 / A.8.28", areaKey: "areaSecurityInfraShort" as const, status: "implemented" as const, reviewKey: "annual" as const },
  { code: "NRM-CR-001", titleKey: "normCryptography" as const, control: "A.8.24 / A.8.25", areaKey: "areaSecurity" as const, status: "implemented" as const, reviewKey: "annual" as const },
  { code: "NRM-DEV-001", titleKey: "normSecureDevelopment" as const, control: "A.8.32 / A.14.2", areaKey: "areaDevelopment" as const, status: "implemented" as const, reviewKey: "annual" as const },
  { code: "NRM-EUC-001", titleKey: "normEquipmentUse" as const, control: "A.6.2 / A.8.1", areaKey: "areaInfra" as const, status: "implemented" as const, reviewKey: "biennial" as const },
  { code: "NRM-GCN-001", titleKey: "normContinuityManagement" as const, control: "A.17.1 / A.17.2", areaKey: "areaSecurityInfraShort" as const, status: "implemented" as const, reviewKey: "annual" as const },
  { code: "NRM-GMU-001", titleKey: "normChangeManagement" as const, control: "A.8.32 / A.12.1", areaKey: "areaInfra" as const, status: "implemented" as const, reviewKey: "annual" as const },
  { code: "NRM-GPR-001", titleKey: "normProblemManagement" as const, control: "A.8.28 / A.10.1", areaKey: "areaInfraSupport" as const, status: "implemented" as const, reviewKey: "annual" as const },
  { code: "NRM-GR-001", titleKey: "normRiskManagement" as const, control: "A.5.4 / A.5.7", areaKey: "areaSecurity" as const, status: "implemented" as const, reviewKey: "semiannual" as const },
  { code: "NRM-GSI-001", titleKey: "normIncidentManagement" as const, control: "A.5.25 / A.8.16", areaKey: "areaSecurity" as const, status: "implemented" as const, reviewKey: "quarterly" as const },
];

export const NormsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg" style={{ backgroundColor: 'hsl(207 26% 54% / 0.1)' }}>
          <Settings className="w-5 h-5" style={{ color: 'hsl(207 26% 54%)' }} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{t.norms}</h2>
          <p className="text-sm text-muted-foreground">{t.normsSubtitle}</p>
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
              {norms.map((norm) => (
                <tr key={norm.code} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a 
                      href="about:blank" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-mono font-medium hover:underline cursor-pointer dark:text-white"
                      style={{ color: 'hsl(207 26% 54%)' }}
                    >
                      {norm.code}
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-card-foreground">{t[norm.titleKey]}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-muted-foreground font-mono">{norm.control}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{t[norm.areaKey]}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={norm.status} showLabel>
                      {t.implemented}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-muted-foreground">{t[norm.reviewKey]}</span>
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