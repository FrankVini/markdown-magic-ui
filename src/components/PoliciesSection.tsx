import { Badge } from "./Badge";
import { FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const policies = [
  {
    code: "POL-SGSI-001",
    titleKey: "policyInfoSecurity" as const,
    control: "A.5.1 / A.5.2",
    areaKey: "areaInfoSecurity" as const,
    status: "implemented" as const,
    reviewKey: "annual" as const
  },
  {
    code: "POL-SGSI-002",
    titleKey: "policyCommittee" as const,
    control: "A.5.2 / A.5.3",
    areaKey: "areaInfoSecurity" as const,
    status: "implemented" as const,
    reviewKey: "annual" as const
  },
  {
    code: "POL-PCN-001",
    titleKey: "policyBusinessContinuity" as const,
    control: "A.17.1 / A.17.2",
    areaKey: "areaSecurityInfra" as const,
    status: "implemented" as const,
    reviewKey: "annual" as const
  },
  {
    code: "POL-RET-001",
    titleKey: "policyDataRetention" as const,
    control: "A.5.33 / A.8.10",
    areaKey: "areaLegalIS" as const,
    status: "implemented" as const,
    reviewKey: "biennial" as const
  },
  {
    code: "POL-MAL-001",
    titleKey: "policyMalwareProtection" as const,
    control: "A.8.7 / A.8.8",
    areaKey: "areaSecuritySupport" as const,
    status: "implemented" as const,
    reviewKey: "annual" as const
  },
  {
    code: "POL-PASS-001",
    titleKey: "policyPasswords" as const,
    control: "A.9.2 / A.9.4",
    areaKey: "areaInfraSecurity" as const,
    status: "implemented" as const,
    reviewKey: "annual" as const
  },
  {
    code: "POL-TRANSFER-001",
    titleKey: "policySecureTransfer" as const,
    control: "A.13.2 / A.5.10",
    areaKey: "areaSecurityInfraShort" as const,
    status: "implemented" as const,
    reviewKey: "annual" as const
  },
  {
    code: "POL-EUC-001",
    titleKey: "policyEndUserControl" as const,
    control: "A.8.32 / A.9.4",
    areaKey: "areaDevelopmentIS" as const,
    status: "review" as const,
    reviewKey: "annual" as const
  },
  {
    code: "POL-DEV-MASK-001",
    titleKey: "policyTestData" as const,
    control: "A.8.10 / A.14.2",
    areaKey: "areaDevelopmentIS" as const,
    status: "implemented" as const,
    reviewKey: "annual" as const
  },
  {
    code: "POL-SOFT-001",
    titleKey: "policySoftwareUse" as const,
    control: "A.8.9 / A.8.28",
    areaKey: "areaInfraSupport" as const,
    status: "implemented" as const,
    reviewKey: "biennial" as const
  }
];

export const PoliciesSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg" style={{ backgroundColor: 'hsl(207 26% 54% / 0.1)' }}>
          <FileText className="w-5 h-5" style={{ color: 'hsl(207 26% 54%)' }} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{t.policies}</h2>
          <p className="text-sm text-muted-foreground">{t.policiesSubtitle}</p>
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
                  {t.responsibleArea}
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
              {policies.map((policy, index) => (
                <tr key={policy.code} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a 
                      href={index === 0 ? "/documents/Politica_Iongrade_1.pdf" : "about:blank"}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-mono font-medium hover:underline cursor-pointer dark:text-white inline-flex items-center gap-2"
                      style={{ color: 'hsl(207 26% 54%)' }}
                    >
                      {policy.code === "POL-EUC-001" && (
                        <span className="inline-flex w-6 h-6 rounded-full bg-review"></span>
                      )}
                      <span>{policy.code}</span>
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-card-foreground">{t[policy.titleKey]}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-muted-foreground font-mono">{policy.control}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{t[policy.areaKey]}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={policy.status} showLabel>
                      {policy.status === "implemented" ? t.implemented : t.inReview}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-muted-foreground">{t[policy.reviewKey]}</span>
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
