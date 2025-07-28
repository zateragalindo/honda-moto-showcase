import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sendWhatsAppMessage } from '@/utils/whatsapp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    sendWhatsAppMessage('Olá! Gostaria de mais informações sobre as motocicletas Honda.');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-honda-blue/95 backdrop-blur-sm border-b border-honda-red/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-honda-red">
              DIVINO HONDA
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-honda-red transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('estoque')}
              className="text-white hover:text-honda-red transition-colors"
            >
              Estoque
            </button>
            <button
              onClick={() => scrollToSection('stats')}
              className="text-white hover:text-honda-red transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-white hover:text-honda-red transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button
              onClick={handleContactClick}
              className="bg-whatsapp-green hover:bg-whatsapp-green/90 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-honda-blue border-t border-honda-red/20">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-white hover:text-honda-red transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('estoque')}
                className="block w-full text-left px-3 py-2 text-white hover:text-honda-red transition-colors"
              >
                Estoque
              </button>
              <button
                onClick={() => scrollToSection('stats')}
                className="block w-full text-left px-3 py-2 text-white hover:text-honda-red transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-3 py-2 text-white hover:text-honda-red transition-colors"
              >
                Contato
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={handleContactClick}
                  className="w-full bg-whatsapp-green hover:bg-whatsapp-green/90 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;