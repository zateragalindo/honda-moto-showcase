import { useState } from 'react';
import { X, MessageCircle, FileText, CreditCard } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Bike } from '@/types/bike';
import { sendWhatsAppMessage, formatBikeInterestMessage } from '@/utils/whatsapp';

interface BikeModalProps {
  bike: Bike | null;
  isOpen: boolean;
  onClose: () => void;
  onConsorcioClick: (bike: Bike) => void;
  onFinanciamentoClick: (bike: Bike) => void;
}

const colors = [
  { name: 'Vermelho', value: '#e74c3c' },
  { name: 'Azul', value: '#3498db' },
  { name: 'Preto', value: '#2c3e50' },
  { name: 'Branco', value: '#ecf0f1' }
];

const BikeModal = ({ bike, isOpen, onClose, onConsorcioClick, onFinanciamentoClick }: BikeModalProps) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  if (!bike) return null;

  const handleWhatsAppClick = () => {
    const message = formatBikeInterestMessage(bike.name, bike.price);
    sendWhatsAppMessage(message);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-honda-red flex items-center justify-between">
            {bike.name}
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Imagem da Moto */}
          <div className="space-y-4">
            <div className="relative h-64 lg:h-80 bg-gradient-to-br from-honda-blue/5 to-honda-red/5 rounded-lg overflow-hidden">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop';
                }}
              />
            </div>

            {/* Seletor de Cores */}
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Cores Disponíveis:</h4>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`
                      w-8 h-8 rounded-full border-2 transition-all
                      ${selectedColor.value === color.value 
                        ? 'border-honda-red scale-110' 
                        : 'border-border hover:scale-105'
                      }
                    `}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Cor selecionada: {selectedColor.name}
              </p>
            </div>
          </div>

          {/* Informações da Moto */}
          <div className="space-y-6">
            {/* Preço */}
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-honda-red mb-2">
                {bike.price}
              </div>
              <p className="text-sm text-muted-foreground">
                *Preço público sugerido. Frete não incluso.
              </p>
            </div>

            {/* Descrição */}
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Descrição:</h4>
              <p className="text-muted-foreground">{bike.description}</p>
            </div>

            {/* Botões de Ação */}
            <div className="grid grid-cols-1 gap-3">
              <Button
                onClick={() => onConsorcioClick(bike)}
                className="bg-honda-blue hover:bg-honda-dark-blue text-white flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Consórcio
              </Button>
              
              <Button
                onClick={() => onFinanciamentoClick(bike)}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground flex items-center justify-center gap-2"
              >
                <CreditCard className="w-4 h-4" />
                Financiamento
              </Button>
              
              <Button
                onClick={handleWhatsAppClick}
                className="bg-whatsapp-green hover:bg-whatsapp-green/90 text-white flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </div>

            {/* Especificações Técnicas */}
            {bike.specs && (
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Especificações Técnicas:</h4>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  {bike.specs.motor && (
                    <div className="flex justify-between py-1 border-b border-border">
                      <span className="text-muted-foreground">Motor:</span>
                      <span className="text-foreground font-medium">{bike.specs.motor}</span>
                    </div>
                  )}
                  {bike.specs.cilindrada && (
                    <div className="flex justify-between py-1 border-b border-border">
                      <span className="text-muted-foreground">Cilindrada:</span>
                      <span className="text-foreground font-medium">{bike.specs.cilindrada}</span>
                    </div>
                  )}
                  {bike.specs.potencia && (
                    <div className="flex justify-between py-1 border-b border-border">
                      <span className="text-muted-foreground">Potência:</span>
                      <span className="text-foreground font-medium">{bike.specs.potencia}</span>
                    </div>
                  )}
                  {bike.specs.transmissao && (
                    <div className="flex justify-between py-1 border-b border-border">
                      <span className="text-muted-foreground">Transmissão:</span>
                      <span className="text-foreground font-medium">{bike.specs.transmissao}</span>
                    </div>
                  )}
                  {bike.specs.combustivel && (
                    <div className="flex justify-between py-1 border-b border-border">
                      <span className="text-muted-foreground">Combustível:</span>
                      <span className="text-foreground font-medium">{bike.specs.combustivel}</span>
                    </div>
                  )}
                  {bike.specs.partida && (
                    <div className="flex justify-between py-1 border-b border-border">
                      <span className="text-muted-foreground">Partida:</span>
                      <span className="text-foreground font-medium">{bike.specs.partida}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BikeModal;