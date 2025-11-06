import { Header } from "@/components/Header";
import { StatsCards } from "@/components/StatsCards";
import { PoliciesSection } from "@/components/PoliciesSection";
import { NormsSection } from "@/components/NormsSection";
import { ProceduresSection } from "@/components/ProceduresSection";
import { ISOMapSection } from "@/components/ISOMapSection";
import { MaturityOverview } from "@/components/MaturityOverview";
import { NextSteps } from "@/components/NextSteps";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header />
        <StatsCards />
        
        <Tabs defaultValue="documentos" className="mt-8">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="documentos">{t.tabDocuments}</TabsTrigger>
            <TabsTrigger value="maturidade">{t.tabMaturity}</TabsTrigger>
            <TabsTrigger value="pentest">{t.tabPentest}</TabsTrigger>
            <TabsTrigger value="lgpd">{t.tabLgpd}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="documentos" className="space-y-8">
            <PoliciesSection />
            <NormsSection />
            <ProceduresSection />
            <ISOMapSection />
          </TabsContent>
          
          <TabsContent value="maturidade" className="space-y-8">
            <MaturityOverview />
            <NextSteps />
          </TabsContent>
          
          <TabsContent value="pentest" className="space-y-8">
            <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">{t.pentestTitle}</h2>
              <p className="text-muted-foreground mb-6">
                {t.pentestDesc}
              </p>
              <div className="space-y-6">
                <div className="p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="font-semibold text-lg" style={{ color: 'hsl(25, 100%, 51%)' }}>{t.pentestInProgress}</h3>
                  </div>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(25, 100%, 51%)' }} />
                      {t.pentestDomoFacial}
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="font-semibold text-lg" style={{ color: 'hsl(120, 100%, 37%)' }}>{t.pentestCompleted}</h3>
                  </div>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(120, 100%, 37%)' }} />
                      {t.pentestSystemAccelero}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(120, 100%, 37%)' }} />
                      {t.pentestSystemOzone}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(120, 100%, 37%)' }} />
                      {t.pentestGateway}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(120, 100%, 37%)' }} />
                      {t.pentestFacialPlate}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(120, 100%, 37%)' }} />
                      {t.pentestDomocam}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="lgpd" className="space-y-8">
            <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">{t.lgpdTitle}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-lg mb-4 text-foreground">{t.complianceStatus}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{t.dataMapping}</span>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex w-6 h-6 rounded-full" style={{ backgroundColor: 'hsl(120, 100%, 37%)' }}></span>
                        <span className="text-xs font-medium text-foreground">{t.complete}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{t.privacyPolicies}</span>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex w-6 h-6 rounded-full" style={{ backgroundColor: 'hsl(120, 100%, 37%)' }}></span>
                        <span className="text-xs font-medium text-foreground">{t.complete}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{t.consent}</span>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex w-6 h-6 rounded-full" style={{ backgroundColor: 'hsl(288, 100%, 50%)' }}></span>
                        <span className="text-xs font-medium text-foreground">{t.inReview}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{t.impactReports}</span>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex w-6 h-6 rounded-full" style={{ backgroundColor: 'hsl(25, 100%, 51%)' }}></span>
                        <span className="text-xs font-medium text-foreground">{t.inProgress}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-lg mb-4 text-foreground">{t.dataMapped}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{t.registrationData}</span>
                      <span className="text-xs font-medium text-primary">{t.dataTypeClientEmployee}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{t.financialData}</span>
                      <span className="text-xs font-medium text-primary">{t.dataTypeClient}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{t.accessLogs}</span>
                      <span className="text-xs font-medium text-primary">{t.dataTypeUsers}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{t.images}</span>
                      <span className="text-xs font-medium text-primary">{t.dataTypeVisitors}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-4 text-foreground">{t.actions}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-secondary">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-foreground uppercase">{t.action}</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-foreground uppercase">{t.responsible}</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-foreground uppercase">{t.status}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-secondary/50 transition-colors">
                        <td className="px-4 py-3 text-sm">{t.lgpdUpdatePrivacyPolicy}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{t.areaLegalIS}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex w-6 h-6 rounded-full" style={{ backgroundColor: 'hsl(25, 100%, 51%)' }}></span>
                            <span className="text-xs font-medium text-foreground">{t.inProgress}</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-secondary/50 transition-colors">
                        <td className="px-4 py-3 text-sm">{t.lgpdReviewContracts}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{t.areaLegalIS} / {t.areaInfoSecurity}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex w-6 h-6 rounded-full" style={{ backgroundColor: 'hsl(232, 100%, 53%)' }}></span>
                            <span className="text-xs font-medium text-foreground">{t.planned}</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-secondary/50 transition-colors">
                        <td className="px-4 py-3 text-sm">{t.lgpdTraining}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{t.areaHRIS}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex w-6 h-6 rounded-full" style={{ backgroundColor: 'hsl(120, 100%, 37%)' }}></span>
                            <span className="text-xs font-medium text-foreground">{t.active}</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
