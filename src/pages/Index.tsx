import { Header } from "@/components/Header";
import { StatsCards } from "@/components/StatsCards";
import { PoliciesSection } from "@/components/PoliciesSection";
import { NormsSection } from "@/components/NormsSection";
import { ProceduresSection } from "@/components/ProceduresSection";
import { ISOMapSection } from "@/components/ISOMapSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header />
        <StatsCards />
        <PoliciesSection />
        <NormsSection />
        <ProceduresSection />
        <ISOMapSection />
        
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
