const WHATSAPP_NUMBER = '5531996853838';

export const sendWhatsAppMessage = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, '_blank');
};

export const formatBikeInterestMessage = (bikeName: string, price: string) => {
  return `Olá! Tenho interesse na ${bikeName} por ${price}. Gostaria de mais informações.`;
};

export const formatConsorcioMessage = (bikeName: string, price: string, parcelas: string) => {
  return `Olá! Gostaria de informações sobre o consórcio da ${bikeName} (${price}) em ${parcelas}.`;
};

export const formatFinanciamentoMessage = (bikeName: string, formData: any) => {
  return `Olá! Gostaria de simular o financiamento da ${bikeName}.

Dados para simulação:
- Nome: ${formData.nome}
- CPF: ${formData.cpf}
- Telefone: ${formData.telefone}
- Data de Nascimento: ${formData.dataNascimento}
- Valor de Entrada: ${formData.valorEntrada}
- Possui Habilitação: ${formData.possuiHabilitacao}
- Possui Restrição: ${formData.possuiRestricao}
- Renda Comprovada: ${formData.rendaComprovada}
- Profissão: ${formData.profissao}

Aguardo retorno para prosseguir com a simulação.`;
};