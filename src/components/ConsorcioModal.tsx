import { X, MessageCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Bike } from '@/types/bike';
import { sendWhatsAppMessage, formatConsorcioMessage } from '@/utils/whatsapp';

interface ConsorcioModalProps {
  bike: Bike | null;
  isOpen: boolean;
  onClose: () => void;
}

const ConsorcioModal = ({ bike, isOpen, onClose }: ConsorcioModalProps) => {
  if (!bike) return null;

  const consorcioData = [
    { parcelas: 80, valor: (bike.priceNumber / 80).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) },
    { parcelas: 60, valor: (bike.priceNumber / 60).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) },
    { parcelas: 48, valor: (bike.priceNumber / 48).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) },
    { parcelas: 36, valor: (bike.priceNumber / 36).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) },
    { parcelas: 24, valor: (bike.priceNumber / 24).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) },
    { parcelas: 18, valor: (bike.priceNumber / 18).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) },
    { parcelas: 12, valor: (bike.priceNumber / 12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) },
  ];

  const handleWhatsAppClick = (parcelas: string) => {
    const message = formatConsorcioMessage(bike.name, bike.price, parcelas);
    sendWhatsAppMessage(message);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-honda-red flex items-center justify-between">
            Consórcio - {bike.name}
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Informações do Consórcio */}
          <div className="bg-honda-blue/5 p-6 rounded-lg">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-32 h-24 object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=150&fit=crop';
                  }}
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-foreground mb-2">{bike.name}</h3>
                <p className="text-2xl font-bold text-honda-red mb-1">
                  Valor do Crédito: {bike.price}
                </p>
                <p className="text-sm text-muted-foreground">
                  Realize o sonho de ter sua Honda através do consórcio
                </p>
              </div>
            </div>
          </div>

          {/* Tabela de Parcelas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              Opções de Parcelamento:
            </h4>
            
            <div className="space-y-3">
              {consorcioData.map((opcao) => (
                <div
                  key={opcao.parcelas}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <span className="font-semibold text-foreground">
                      {opcao.parcelas}x de {opcao.valor}
                    </span>
                    <p className="text-sm text-muted-foreground">
                      Sem juros, apenas taxa de administração
                    </p>
                  </div>
                  
                  <Button
                    onClick={() => handleWhatsAppClick(`${opcao.parcelas}x de ${opcao.valor}`)}
                    size="sm"
                    className="bg-whatsapp-green hover:bg-whatsapp-green/90 text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Consultar
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Informações Importantes */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <h5 className="font-semibold text-foreground mb-2">
              Informações Importantes:
            </h5>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Sem consulta ao SPC/Serasa</li>
              <li>• Sem comprovação de renda</li>
              <li>• Sem análise de crédito</li>
              <li>• Lance de até 50% do valor do bem</li>
              <li>• Contemplação por sorteio ou lance</li>
            </ul>
          </div>

          {/* Botão Principal */}
          <div className="text-center">
            <Button
              onClick={() => handleWhatsAppClick('informações gerais')}
              className="bg-honda-red hover:bg-honda-dark-red text-white px-8 py-3"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Proposta Completa
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsorcioModal;