export const cpfMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const phoneMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
};

export const currencyMask = (value: string): string => {
  const numericValue = value.replace(/\D/g, '');
  const formattedValue = (parseInt(numericValue) / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  return formattedValue;
};

export const removeMask = (value: string): string => {
  return value.replace(/\D/g, '');
};