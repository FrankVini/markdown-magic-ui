import { Shield, Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-lg">DOMONET</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Soluções em segurança da informação e conformidade ISO/IEC 27001.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Contato</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:contato@domonet.com.br" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contato@domonet.com.br</span>
              </a>
              <a 
                href="tel:+5511999999999" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(11) 9 9999-9999</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Links Úteis</h3>
            <nav className="space-y-3 text-sm">
              <a 
                href="https://domonet.com.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Site Institucional
              </a>
              <a 
                href="https://domonet.com.br/servicos" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Nossos Serviços
              </a>
              <a 
                href="https://domonet.com.br/sobre" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Sobre Nós
              </a>
            </nav>
          </div>

          {/* Policies & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Políticas</h3>
            <nav className="space-y-3 text-sm mb-6">
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Privacidade
              </a>
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Termos de Uso
              </a>
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Segurança
              </a>
            </nav>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Redes Sociais</h4>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com/company/domonet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://facebook.com/domonet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com/domonet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="space-y-4 text-center">
          <div className="text-sm text-muted-foreground space-y-2">
            <p>Periodicidade média de revisão: 12 meses</p>
            <p>Responsável pela revisão: CGSIP / Segurança da Informação</p>
            <p>Última revisão geral: Agosto – Outubro 2025</p>
          </div>
          <Separator className="my-4" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DOMONET. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
