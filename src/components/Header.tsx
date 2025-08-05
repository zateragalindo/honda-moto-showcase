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
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-honda-red/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('home')}
            id='home'
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 700 110"
              className="h-8 w-auto md:h-10"
              aria-label="Honda Logo"
            >
              <g fill="#c00">
                <path d="M260.5 93.3v-32c0-3.5 2.4-5.5 5.5-5.5l6.8-.8v-8h-49v8l7 .8c3 0 5.5 2.2 5.5 5.2v10.5H198V61.2c0-3 2-5.2 5-5.2l7.4-1v-8h-49v8l7.4 1c3 0 5 2.3 5 5.4V94c0 3-2 5-5 5l-7.3.8v8h49v-8L203 99c-3.2-.4-4.8-2-4.8-5V83.5h38v10c0 3-2.2 5.3-5.3 5.3l-7.2.7v8.2h49v-8.3L266 99c-4-.2-5.5-2.7-5.5-5.7zM447 55l6.8.7c3 0 5.3 1.8 5.3 4.8v31.8L428 51l-.5-1c-1.6-2-2.6-3.2-6-3.2h-43v8l7 1c3.4.2 5.3 2 5.3 5v32.6c0 3-1.5 5-5 5.4l-7.3.7v8.2H417v-8.3l-6.3-.6c-3 0-5.5-1.8-5.5-4.8V62.4l31.6 41.8c1.7 2.2 3.2 3.6 6 3.6h31V60.6c0-3 2.2-5 5.2-5l6-.7v-8h-38v8zM325.2 44.7c-31-.5-49.7 11.2-50 32.5 0 21.7 19 33.2 50.3 32.7 30.8.5 49.4-10.8 50-31.8V78c0-21.8-19-33.8-50.3-33.3zM347.5 80c0 12-8.5 18.2-18.4 18.2h-7.8c-10 0-17.6-7.3-17.6-18.2v-5.3c0-10.5 7.5-18.5 18.4-18.5h6.2c11 0 19.3 7 19.3 18.5V80zM554.8 47h-64v8l6.8.8c2.8.3 4.7 1.7 4.7 4.7V94c0 3-1.8 4.6-5 5l-7.3.4v8.4h64.7c19.2 0 36.7-9.7 36.7-30.4 0-20-16.5-30.4-36.6-30.4zm-6.5 49h-22V58.5h22c6.2 0 14 2 14 19s-7.8 18.7-14 18.7z" />
                <path d="M696 99c-3.2 0-5.6-1.8-7.2-4.2L661.6 53l-2-2.7c-1.6-2.4-3.3-3.3-6.4-3.3H607v8l9.5 1.2c2.4.4 4.2.8 4.2 3.2 0 1-.6 2.2-1 3l-20.5 33c-1.6 2.4-3 3.3-6.5 3.6l-7 .5v8.4h39v-8.5l-5.2-.5c-2 0-4-1-4-3 0-.7.2-1.3.5-2l3.2-5H657l2 3.6s1.7 1.8 1.2 4.4c-.3 1.6-3.4 2-3.4 2l-8 .5v8.4H700v-8.5l-4-.5zm-70-20.6l11.5-19 12.2 19H626zM12.4 79l2 1.7L44.2 73c-.6-.2-.8-1.8.2-2.2l2-.6 81-22C138 46 139.8 40.4 142 36.4l4.6-8.3L14 72c-5.2 2-3 5.7-1.6 7zM23 88.7l35.5-7c-.6-.2-.8-1.8.2-2.2 1-.3 55.8-10.7 55.8-10.7 8.5-1.6 10.7-4.4 12.3-6.6l7-10L16 82.2l7 6.5zM33 97.8l42.7-5.6c-1-.4-.8-1.8.2-2.2 1-.4 25-4 25-4 5-1 7.4-2.3 10.4-5.3 3.2-3.2 7.5-8 7.5-8L24.5 90 33 98zM34.5 99.4l9 8.3h57L78.7 94.4" />
                <path d="M9.7 62c-14 5.7-10 17.8-5 22l15.5 15.6c5.2 5 5.7 8 5.7 8h13.6L10.6 81c-5-5.5-2.6-9.8 1.7-11.6 0 0 78.4-27.4 128.5-45.3 10-3.4 12.5-10 17.5-24 0 0-14 7.2-37.2 17-8.4 3.7-72.5 29.4-111.3 45z" />
              </g>
            </svg>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-black hover:text-honda-red transition-colors duration-200 font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('estoque')}
              className="text-black hover:text-honda-red transition-colors duration-200 font-medium"
            >
              Estoque
            </button>
            <button
              onClick={() => scrollToSection('stats')}
              className="text-black hover:text-honda-red transition-colors duration-200 font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-black hover:text-honda-red transition-colors duration-200 font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button
              onClick={handleContactClick}
              className="bg-whatsapp-green hover:bg-whatsapp-green/90 text-white transition-all duration-200 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black hover:text-honda-red transition-colors duration-200"
            aria-label="Toggle menu"
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
                className="block w-full text-left px-3 py-2 text-white hover:text-honda-red hover:bg-white/10 rounded transition-all duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('estoque')}
                className="block w-full text-left px-3 py-2 text-white hover:text-honda-red hover:bg-white/10 rounded transition-all duration-200"
              >
                Estoque
              </button>
              <button
                onClick={() => scrollToSection('stats')}
                className="block w-full text-left px-3 py-2 text-white hover:text-honda-red hover:bg-white/10 rounded transition-all duration-200"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-3 py-2 text-white hover:text-honda-red hover:bg-white/10 rounded transition-all duration-200"
              >
                Contato
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={handleContactClick}
                  className="w-full bg-whatsapp-green hover:bg-whatsapp-green/90 text-white transition-all duration-200"
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