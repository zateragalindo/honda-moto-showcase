import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { sendWhatsAppMessage } from '@/utils/whatsapp';

const Footer = () => {
  const handleWhatsAppClick = () => {
    sendWhatsAppMessage('Olá! Gostaria de mais informações sobre a Divino Honda.');
  };

  const handleSocialClick = (platform: string) => {
    // Placeholder for social media links
    console.log(`Redirect to ${platform}`);
  };

  return (
    <footer id="contato" className="bg-honda-blue text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-honda-red mb-4">
                DIVINO HONDA
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Sua concessionária Honda de confiança. Oferecemos os melhores modelos, 
                financiamento facilitado e atendimento especializado para realizar o seu sonho.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-3">Siga-nos nas Redes Sociais</h4>
              <div className="flex gap-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-10 h-10 bg-whatsapp-green hover:bg-whatsapp-green/80 rounded-full flex items-center justify-center transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleSocialClick('Facebook')}
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                  title="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleSocialClick('Instagram')}
                  className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 rounded-full flex items-center justify-center transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Informações de Contato</h4>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-honda-red mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Endereço</p>
                <p className="text-white/80 text-sm">
                  Consulte nossa localização
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-honda-red flex-shrink-0" />
              <div>
                <p className="font-medium">Telefone</p>
                <a 
                  href="tel:+5531996853838"
                  className="text-white/80 text-sm hover:text-white transition-colors"
                >
                  (31) 99685-3838
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-honda-red flex-shrink-0" />
              <div>
                <p className="font-medium">E-mail</p>
                <a 
                  href="mailto:contato@divinohonda.com.br"
                  className="text-white/80 text-sm hover:text-white transition-colors"
                >
                  contato@divinohonda.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Horário de Funcionamento</h4>
            
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-honda-red mt-1 flex-shrink-0" />
              <div className="space-y-2">
                <div>
                  <p className="font-medium">Segunda a Sexta</p>
                  <p className="text-white/80 text-sm">8h às 18h</p>
                </div>
                <div>
                  <p className="font-medium">Sábado</p>
                  <p className="text-white/80 text-sm">8h às 16h</p>
                </div>
                <div>
                  <p className="font-medium">Domingo</p>
                  <p className="text-white/80 text-sm">Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/80 hover:text-white transition-colors text-sm"
              >
                Início
              </button>
              <button
                onClick={() => document.getElementById('estoque')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/80 hover:text-white transition-colors text-sm"
              >
                Nosso Estoque
              </button>
              <button
                onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/80 hover:text-white transition-colors text-sm"
              >
                Sobre Nós
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="block text-white/80 hover:text-white transition-colors text-sm"
              >
                Fale Conosco
              </button>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-whatsapp-green hover:bg-whatsapp-green/90 text-white px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm">
                © 2025 Divino Honda. Todos os direitos reservados.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Concessionária autorizada Honda | CNPJ: XX.XXX.XXX/XXXX-XX
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white/60 text-xs">
                Desenvolvido com ❤️ para oferecer a melhor experiência Honda
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;