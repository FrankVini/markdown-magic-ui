import { Shield, LogOut, User, Sun, Moon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Session } from "@supabase/supabase-js";

export const Header = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCompany, setSelectedCompany] = useState("none");
  const [session, setSession] = useState<Session | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState("pt");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) {
        navigate("/auth");
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (!session && event === "SIGNED_OUT") {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Erro ao sair",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Logout realizado com sucesso!",
      });
    }
  };

  return (
    <div className="mb-8 space-y-4">
      <header className="bg-gradient-primary text-primary-foreground py-8 px-6 rounded-2xl shadow-xl">
        <div className="flex items-center gap-4 mb-4 flex-wrap">
          <div className="bg-primary-foreground/20 p-3 rounded-xl">
            <Shield className="w-8 h-8" />
          </div>
          <div className="flex-1 min-w-[200px]">
            <h1 className="text-3xl font-bold">DOMONET {selectedCompany !== "none" ? selectedCompany : ""}</h1>
            <p className="text-primary-foreground/90 text-sm">Sumário Consolidado ISO/IEC 27001:2022</p>
          </div>
          <div className="flex items-center gap-3">
            <Select value={selectedCompany} onValueChange={setSelectedCompany}>
              <SelectTrigger className="w-[200px] bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                <SelectValue placeholder="Selecione a empresa" />
              </SelectTrigger>
              <SelectContent className="bg-background z-50">
                <SelectItem value="none">Selecione a empresa</SelectItem>
                <SelectItem value="IONGRADE">IONGRADE</SelectItem>
                <SelectItem value="DOMONET">DOMONET</SelectItem>
                <SelectItem value="TECHBOARD">TECHBOARD</SelectItem>
              </SelectContent>
            </Select>
            {session && (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 bg-primary-foreground/10 px-3 py-2 rounded-lg">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{session.user.email}</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleSignOut}
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20"
                  title="Sair"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>
      
      <div className="flex items-center gap-6 px-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-foreground">Modo:</span>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="gap-2"
          >
            {theme === "light" ? (
              <>
                <Sun className="w-4 h-4" />
                Claro
              </>
            ) : (
              <>
                <Moon className="w-4 h-4" />
                Escuro
              </>
            )}
          </Button>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-foreground">Linguagem:</span>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-background z-50">
              <SelectItem value="pt">
                <div className="flex items-center gap-2">
                  <span>🇧🇷</span>
                  <span>Português</span>
                </div>
              </SelectItem>
              <SelectItem value="en">
                <div className="flex items-center gap-2">
                  <span>🇺🇸</span>
                  <span>English</span>
                </div>
              </SelectItem>
              <SelectItem value="es">
                <div className="flex items-center gap-2">
                  <span>🇪🇸</span>
                  <span>Español</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
