import { Shield } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-gradient-primary text-primary-foreground py-8 px-6 rounded-2xl shadow-xl mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-primary-foreground/20 p-3 rounded-xl">
          <Shield className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">SGSI IONGRADE</h1>
          <p className="text-primary-foreground/90 text-sm">Sumário Consolidado ISO/IEC 27001:2022</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-xl">
          <p className="text-sm text-primary-foreground/80">Versão</p>
          <p className="text-lg font-semibold">1.0</p>
        </div>
        <div className="bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-xl">
          <p className="text-sm text-primary-foreground/80">Emissão</p>
          <p className="text-lg font-semibold">Out/2025</p>
        </div>
        <div className="bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-xl">
          <p className="text-sm text-primary-foreground/80">Aprovado por</p>
          <p className="text-lg font-semibold">CGSIP</p>
        </div>
        <div className="bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-xl">
          <p className="text-sm text-primary-foreground/80">Responsável</p>
          <p className="text-lg font-semibold">Franklin Vinicius</p>
        </div>
      </div>
    </header>
  );
};
