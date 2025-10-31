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

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header />
        <StatsCards />
        
        <Tabs defaultValue="documentos" className="mt-8">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="documentos">Documentos</TabsTrigger>
            <TabsTrigger value="maturidade">Maturidade</TabsTrigger>
            <TabsTrigger value="pentest">Pentest</TabsTrigger>
            <TabsTrigger value="lgpd">LGPD</TabsTrigger>
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
              <h2 className="text-2xl font-bold mb-6 text-foreground">Testes de Penetração (Pentest)</h2>
              <div className="space-y-6">
                <div className="p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-lg mb-4">Cobertura Geral de Testes</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progresso: 75%</span>
                      <span className="text-xs text-muted-foreground">15 de 20 sistemas testados</span>
                    </div>
                    <div className="relative h-6 w-full overflow-hidden rounded-full bg-secondary">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-500"
                        style={{ width: '75%' }}
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white drop-shadow-md">
                        75%
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg border border-border">
                    <h3 className="font-semibold text-lg mb-4 text-green-600">Pentests Concluídos</h3>
                    <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                      <li>Sistema Accelero</li>
                      <li>Sistema Ozone</li>
                      <li>Gateway Iongrade</li>
                      <li>Placa Facial</li>
                      <li>Domocam</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 rounded-lg border border-border">
                    <h3 className="font-semibold text-lg mb-4 text-yellow-600">Pentest em Progresso</h3>
                    <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                      <li>DomoFacial</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="lgpd" className="space-y-8">
            <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Lei Geral de Proteção de Dados (LGPD)</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-lg mb-4 text-foreground">Status de Conformidade</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Mapeamento de Dados</span>
                      <Badge variant="implemented">✅ Completo</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Políticas de Privacidade</span>
                      <Badge variant="implemented">✅ Completo</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Consentimento</span>
                      <Badge variant="review">🟡 Em Revisão</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Relatórios de Impacto</span>
                      <Badge variant="review">🟡 Em Andamento</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-lg mb-4 text-foreground">Dados Pessoais Mapeados</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Dados Cadastrais</span>
                      <span className="text-xs font-medium text-primary">Cliente/Funcionário</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Dados Financeiros</span>
                      <span className="text-xs font-medium text-primary">Cliente</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Logs de Acesso</span>
                      <span className="text-xs font-medium text-primary">Usuários</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Imagens (CFTV)</span>
                      <span className="text-xs font-medium text-primary">Visitantes</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-4 text-foreground">Ações e Prazos</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-secondary">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-foreground uppercase">Ação</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-foreground uppercase">Responsável</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-foreground uppercase">Prazo</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-foreground uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-secondary/50 transition-colors">
                        <td className="px-4 py-3 text-sm">Atualizar Política de Privacidade</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Jurídico</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Q1 2025</td>
                        <td className="px-4 py-3"><Badge variant="review">🟡 Em Andamento</Badge></td>
                      </tr>
                      <tr className="hover:bg-secondary/50 transition-colors">
                        <td className="px-4 py-3 text-sm">Revisar Contratos com Terceiros</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Jurídico / SI</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Q2 2025</td>
                        <td className="px-4 py-3"><Badge variant="review">🟡 Planejado</Badge></td>
                      </tr>
                      <tr className="hover:bg-secondary/50 transition-colors">
                        <td className="px-4 py-3 text-sm">Treinamento LGPD - Equipe</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">RH / SI</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Trimestral</td>
                        <td className="px-4 py-3"><Badge variant="implemented">✅ Ativo</Badge></td>
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
