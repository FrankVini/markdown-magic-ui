import { Header } from "@/components/Header";
import { StatsCards } from "@/components/StatsCards";
import { PoliciesSection } from "@/components/PoliciesSection";
import { NormsSection } from "@/components/NormsSection";
import { ProceduresSection } from "@/components/ProceduresSection";
import { ISOMapSection } from "@/components/ISOMapSection";
import { MaturityOverview } from "@/components/MaturityOverview";
import { NextSteps } from "@/components/NextSteps";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
              <div className="space-y-4">
                <div className="bg-accent/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Próximos Testes Programados</h3>
                  <p className="text-muted-foreground">Conteúdo em desenvolvimento.</p>
                </div>
                <div className="bg-accent/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Histórico de Pentests</h3>
                  <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Sistema Accelero</li>
                    <li>Sistema Ozone</li>
                    <li>Gateway Iongrade</li>
                    <li>Domocan</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="lgpd" className="space-y-8">
            <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Lei Geral de Proteção de Dados (LGPD)</h2>
              <div className="space-y-4">
                <div className="bg-accent/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Status de Conformidade</h3>
                  <p className="text-muted-foreground">Conteúdo em desenvolvimento.</p>
                </div>
                <div className="bg-accent/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Dados Pessoais Mapeados</h3>
                  <p className="text-muted-foreground">Conteúdo em desenvolvimento.</p>
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
