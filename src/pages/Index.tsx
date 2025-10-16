import { Header } from "@/components/Header";
import { StatsCards } from "@/components/StatsCards";
import { PoliciesSection } from "@/components/PoliciesSection";
import { NormsSection } from "@/components/NormsSection";
import { ProceduresSection } from "@/components/ProceduresSection";
import { ISOMapSection } from "@/components/ISOMapSection";
import { MaturityOverview } from "@/components/MaturityOverview";
import { NextSteps } from "@/components/NextSteps";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header />
        <StatsCards />
        
        <Tabs defaultValue="documentos" className="mt-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="documentos">Documentos</TabsTrigger>
            <TabsTrigger value="maturidade">Maturidade</TabsTrigger>
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
        </Tabs>
        
        <footer className="mt-12 text-center text-sm text-muted-foreground pb-8">
          <p>Periodicidade média de revisão: 12 meses</p>
          <p>Responsável pela revisão: CGSIP / Segurança da Informação</p>
          <p>Última revisão geral: Agosto – Outubro 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
