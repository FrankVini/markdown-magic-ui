import { Shield, Mail, Phone, MapPin, Linkedin } from "lucide-react";
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
                href="mailto:soc@domonet.com.br" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>soc@domonet.com.br</span>
              </a>
              <a 
                href="tel:+551155060097" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(11) 5506-0097</span>
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
                  href="https://www.linkedin.com/company/domomed/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://domonet.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-colors"
                  aria-label="Website"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
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
