import { Seller, WorkGallery } from '@/types/seller';

export const seller: Seller = {
  id: '1',
  name: 'Divino Honda',
  avatar: './perfil.jpg',
  position: 'Consultor de Vendas Honda',
  rating: 4.8,
  totalSales: 847,
  experience: 8,
  bio: 'Especialista em motos Honda há 8 anos. Ajudo você a encontrar a moto perfeita para seu estilo de vida e orçamento. Atendimento personalizado e as melhores condições do mercado!',
  specialties: ['Expert em Aventura', 'Financiamento Especializado', 'Primeira Habilitação'],
  certifications: ['Certificado Honda Master', 'Especialista em Crédito', 'Consultor Técnico'],
  phone: '5531996853838',
  responseTime: '15 min',
  monthlyStats: {
    clientsServed: 89,
    bikesSold: 23,
    avgRating: 4.9
  }
};

export const workGallery: WorkGallery[] = [
  {
    id: '1',
    image: './vendidos/01.png',
    client: 'Suzana',
    bikeModel: 'Honda Biz',
    description: 'Obrigado pela preferência você merece essa conquista em vida',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
  },
  {
    id: '2',
    image: './vendidos/02.png',
    client: 'Cardoso',
    bikeModel: 'Honda CG 160 Fan',
    description: 'Mais um sonho realizado!',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
  },
  {
    id: '3',
    image: './vendidos/03.png',
    client: '',
    bikeModel: 'Honda Biz',
    description: 'Economia e confiabilidade em uma só moto!',
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  },
  {
    id: '4',
    image: './vendidos/04.png',
    client: 'Tiago',
    bikeModel: 'Honda XRE',
    description: 'Perfeita para o dia a dia!',
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)
  }
];