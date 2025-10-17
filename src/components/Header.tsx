import { Shield } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export const Header = () => {
  const [selectedCompany, setSelectedCompany] = useState("IONGRADE");

  return (
    <header className="bg-gradient-primary text-primary-foreground py-8 px-6 rounded-2xl shadow-xl mb-8">
      <div className="flex items-center gap-4 mb-4 flex-wrap">
        <div className="bg-primary-foreground/20 p-3 rounded-xl">
          <Shield className="w-8 h-8" />
        </div>
        <div className="flex-1 min-w-[200px]">
          <h1 className="text-3xl font-bold">SGSI {selectedCompany}</h1>
          <p className="text-primary-foreground/90 text-sm">Sumário Consolidado ISO/IEC 27001:2022</p>
        </div>
        <Select value={selectedCompany} onValueChange={setSelectedCompany}>
          <SelectTrigger className="w-[200px] bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
            <SelectValue placeholder="Selecione a empresa" />
          </SelectTrigger>
          <SelectContent className="bg-background z-50">
            <SelectItem value="IONGRADE">IONGRADE</SelectItem>
            <SelectItem value="EMPRESA A">EMPRESA A</SelectItem>
            <SelectItem value="EMPRESA B">EMPRESA B</SelectItem>
            <SelectItem value="EMPRESA C">EMPRESA C</SelectItem>
          </SelectContent>
        </Select>
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
