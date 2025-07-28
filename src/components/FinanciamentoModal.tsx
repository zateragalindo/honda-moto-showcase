import { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bike } from '@/types/bike';
import { FinanciamentoForm } from '@/types/bike';
import { cpfMask, phoneMask, currencyMask } from '@/utils/masks';
import { sendWhatsAppMessage, formatFinanciamentoMessage } from '@/utils/whatsapp';

interface FinanciamentoModalProps {
  bike: Bike | null;
  isOpen: boolean;
  onClose: () => void;
}

const FinanciamentoModal = ({ bike, isOpen, onClose }: FinanciamentoModalProps) => {
  const [formData, setFormData] = useState<FinanciamentoForm>({
    valorEntrada: '',
    dataNascimento: '',
    cpf: '',
    nome: '',
    telefone: '',
    possuiHabilitacao: '',
    possuiRestricao: '',
    rendaComprovada: '',
    profissao: ''
  });

  if (!bike) return null;

  const handleInputChange = (field: keyof FinanciamentoForm, value: string) => {
    let processedValue = value;

    // Apply masks
    if (field === 'cpf') {
      processedValue = cpfMask(value);
    } else if (field === 'telefone') {
      processedValue = phoneMask(value);
    } else if (field === 'valorEntrada' || field === 'rendaComprovada') {
      processedValue = currencyMask(value);
    }

    setFormData(prev => ({
      ...prev,
      [field]: processedValue
    }));
  };

  const handleSelectChange = (field: keyof FinanciamentoForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['nome', 'cpf', 'telefone', 'dataNascimento', 'possuiHabilitacao', 'possuiRestricao', 'rendaComprovada', 'profissao'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof FinanciamentoForm]);
    
    if (missingFields.length > 0) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const message = formatFinanciamentoMessage(bike.name, formData);
    sendWhatsAppMessage(message);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-honda-red flex items-center justify-between">
            Financiamento - {bike.name}
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Informações da Moto */}
          <div className="bg-honda-blue/5 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-20 h-16 object-cover rounded"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=150&fit=crop';
                }}
              />
              <div>
                <h3 className="font-bold text-foreground">{bike.name}</h3>
                <p className="text-honda-red font-semibold">{bike.price}</p>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Valor de Entrada */}
            <div>
              <Label htmlFor="valorEntrada">Valor de Entrada *</Label>
              <Input
                id="valorEntrada"
                value={formData.valorEntrada}
                onChange={(e) => handleInputChange('valorEntrada', e.target.value)}
                placeholder="R$ 0,00"
                required
              />
            </div>

            {/* Nome e Data de Nascimento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nome">Nome Completo *</Label>
                <Input
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              <div>
                <Label htmlFor="dataNascimento">Data de Nascimento *</Label>
                <Input
                  id="dataNascimento"
                  type="date"
                  value={formData.dataNascimento}
                  onChange={(e) => handleInputChange('dataNascimento', e.target.value)}
                  required
                />
              </div>
            </div>

            {/* CPF e Telefone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cpf">CPF *</Label>
                <Input
                  id="cpf"
                  value={formData.cpf}
                  onChange={(e) => handleInputChange('cpf', e.target.value)}
                  placeholder="000.000.000-00"
                  maxLength={14}
                  required
                />
              </div>
              <div>
                <Label htmlFor="telefone">Telefone *</Label>
                <Input
                  id="telefone"
                  value={formData.telefone}
                  onChange={(e) => handleInputChange('telefone', e.target.value)}
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                  required
                />
              </div>
            </div>

            {/* Habilitação e Restrição */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="possuiHabilitacao">Possui Habilitação? *</Label>
                <Select onValueChange={(value) => handleSelectChange('possuiHabilitacao', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sim">Sim</SelectItem>
                    <SelectItem value="nao">Não</SelectItem>
                    <SelectItem value="processo">Em processo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="possuiRestricao">Possui Restrição no Nome? *</Label>
                <Select onValueChange={(value) => handleSelectChange('possuiRestricao', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sim">Sim</SelectItem>
                    <SelectItem value="nao">Não</SelectItem>
                    <SelectItem value="nao-sei">Não sei</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Renda e Profissão */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="rendaComprovada">Renda Comprovada *</Label>
                <Input
                  id="rendaComprovada"
                  value={formData.rendaComprovada}
                  onChange={(e) => handleInputChange('rendaComprovada', e.target.value)}
                  placeholder="R$ 0,00"
                  required
                />
              </div>
              <div>
                <Label htmlFor="profissao">Profissão *</Label>
                <Input
                  id="profissao"
                  value={formData.profissao}
                  onChange={(e) => handleInputChange('profissao', e.target.value)}
                  placeholder="Sua profissão"
                  required
                />
              </div>
            </div>

            {/* Informações Importantes */}
            <div className="bg-muted/50 p-4 rounded-lg">
              <h5 className="font-semibold text-foreground mb-2">
                Documentos necessários:
              </h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• RG e CPF</li>
                <li>• Comprovante de renda</li>
                <li>• Comprovante de residência</li>
                <li>• CNH (se possuir)</li>
              </ul>
            </div>

            {/* Botões */}
            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-whatsapp-green hover:bg-whatsapp-green/90 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Enviar via WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FinanciamentoModal;