import { Shield } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export const Header = () => {
  const [selectedCompany, setSelectedCompany] = useState("none");

  return (
    <header className="bg-gradient-primary text-primary-foreground py-8 px-6 rounded-2xl shadow-xl mb-8">
      <div className="flex items-center gap-4 mb-4 flex-wrap">
        <div className="bg-primary-foreground/20 p-3 rounded-xl">
          <Shield className="w-8 h-8" />
        </div>
        <div className="flex-1 min-w-[200px]">
          <h1 className="text-3xl font-bold">DOMONET {selectedCompany !== "none" ? selectedCompany : ""}</h1>
          <p className="text-primary-foreground/90 text-sm">Sumário Consolidado ISO/IEC 27001:2022</p>
        </div>
        <Select value={selectedCompany} onValueChange={setSelectedCompany}>
          <SelectTrigger className="w-[200px] bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
            <SelectValue placeholder="Selecione a empresa" />
          </SelectTrigger>
          <SelectContent className="bg-background z-50">
            <SelectItem value="none">Selecione a empresa</SelectItem>
            <SelectItem value="IONGRADE">IONGRADE</SelectItem>
            <SelectItem value="EMPRESA A">EMPRESA A</SelectItem>
            <SelectItem value="EMPRESA B">EMPRESA B</SelectItem>
            <SelectItem value="EMPRESA C">EMPRESA C</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
};
