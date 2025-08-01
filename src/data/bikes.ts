import { Bike, Category } from '../types/bike';

export const categories: Category[] = [
  {
    id: 'street',
    name: 'Street',
    icon: 'Bike',
    description: 'Motocicletas para uso urbano e dia a dia'
  },
  {
    id: 'sport',
    name: 'Sport',
    icon: 'Gauge',
    description: 'Motos esportivas de alta performance'
  },
  {
    id: 'adventure',
    name: 'Adventure',
    icon: 'Mountain',
    description: 'Para aventuras e terrenos variados'
  },
  {
    id: 'touring',
    name: 'Touring',
    icon: 'MapPin',
    description: 'Conforto para longas viagens'
  },
  {
    id: 'offroad',
    name: 'Off Road',
    icon: 'TreePine',
    description: 'Para trilhas e terrenos extremos'
  }
];

export const bikes: Bike[] = [
  // Street Category
  {
    id: 'cg-160-start',
    name: 'CG 160 Start',
    price: 'R$ 16.440,00',
    priceNumber: 16440,
    category: 'street',
    image: '/public/imgs/street/cg160start/01.webp',
    colors: [
      { name: 'Vermelha', image: '/public/imgs/street/cg160start/02.webp', colorCode: '#dc2626' },
      { name: 'Preta', image: '/public/imgs/street/cg160start/03.webp', colorCode: '#1f2937' },
      { name: 'Prata', image: '/public/imgs/street/cg160start/01.webp', colorCode: '#94a3b8' }
    ],
    description: 'A CG 160 Start combina economia, durabilidade e performance para o seu dia a dia.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHC',
      cilindrada: '162,7 cm³',
      potencia: '14,5 cv @ 8.500 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Flex',
      partida: 'Pedal'
    }
  },
  {
    id: 'cg-160-fan',
    name: 'CG 160 Fan',
    price: 'R$ 17.990,00',
    priceNumber: 17990,
    category: 'street',
    image: '/public/imgs/street/cg160fan/01.png',
    colors: [
      { name: 'azul', image: '/public/imgs/street/cg160fan/01.png', colorCode: '#0048adff' },
      { name: 'Vermelha', image: '/public/imgs/street/cg160start/02.webp', colorCode: '#dc2626' },
      { name: 'Preta', image: '/public/imgs/street/cg160start/03.webp', colorCode: '#1f2937' }
    ],
    description: 'A CG 160 Fan oferece mais conforto e tecnologia para o seu trajeto diário.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHC',
      cilindrada: '162,7 cm³',
      potencia: '14,5 cv @ 8.500 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'cg-160-titan',
    name: 'CG 160 Titan',
    price: 'R$ 19.520,00',
    priceNumber: 19520,
    category: 'street',
    image: '/public/imgs/street/cg160titan/01.webp',
    colors: [
      { name: 'Laranja', image: '/public/imgs/street/cg160titan/01.webp', colorCode: '#ee940dff' },
      { name: 'Vermelha', image: '/public/imgs/street/cg160titan/02.webp', colorCode: '#dc2626' },
      { name: 'Preta', image: '/public/imgs/street/cg160titan/03.webp', colorCode: '#1f2937' }
    ],
    description: 'A CG 160 Titan é sinônimo de resistência e performance superior.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHC',
      cilindrada: '162,7 cm³',
      potencia: '14,5 cv @ 8.000 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'cg-160-cargo',
    name: 'CG 160 Cargo',
    price: 'R$ 17.430,00',
    priceNumber: 17430,
    category: 'street',
    image: '/public/imgs/street/cg160cargo/01.webp',
    description: 'Desenvolvida especialmente para trabalho e transporte de cargas.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHC',
      cilindrada: '162,7 cm³',
      potencia: '14,5 cv @ 8.500 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Flex',
      capacidade: 'Porta-objetos 15L'
    }
  },
  {
    id: 'pop-110i-es',
    name: 'Pop 110i ES',
    price: 'R$ 10.080,00',
    priceNumber: 10080,
    category: 'street',
    image: '/public/imgs/street/pop110ies/01.webp',
    colors: [
      { name: 'Branca', image: '/public/imgs/street/pop110ies/01.webp', colorCode: '#ffffffff' },
      { name: 'Vermelha', image: '/public/imgs/street/pop110ies/02.webp', colorCode: '#dc2626' },
      { name: 'Preta', image: '/public/imgs/street/pop110ies/03.webp', colorCode: '#1f2937' }
    ],
    description: 'Economia e praticidade para quem busca mobilidade urbana eficiente.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHV',
      cilindrada: '109,2 cm³',
      potencia: '8,5 cv @ 8.000 rpm',
      transmissao: 'CVT',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'biz-125',
    name: 'Biz 125 EX',
    price: 'R$ 15.720,00',
    priceNumber: 15720,
    category: 'street',
    image: '/public/imgs/street/biz125ex/01.webp',
    colors: [
      { name: 'Branco', image: '/public/imgs/street/biz125ex/03.webp', colorCode: '#ffffffff' },
      { name: 'Azul', image: '/public/imgs/street/biz125ex/01.webp', colorCode: '#1b0bb3ff' },
      { name: 'Vermelha', image: '/public/imgs/street/biz125ex/02.webp', colorCode: '#dc2626' },
    ],
    description: 'O scooter ideal para agilidade no trânsito urbano.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHV',
      cilindrada: '124,9 cm³',
      potencia: '9,2 cv @ 7.500 rpm',
      transmissao: 'CVT',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'biz-125-2',
    name: 'Biz 125 ES',
    price: 'R$ 12.600,00',
    priceNumber: 12600,
    category: 'street',
    image: '/public/imgs/street/biz125es/01.webp',
    colors: [
      { name: 'Vermelho', image: '/public/imgs/street/biz125es/01.webp', colorCode: '#b30b0bff' },
      { name: 'Branco', image: '/public/imgs/street/biz125es/02.webp', colorCode: '#ffffffff' },
      { name: 'Preto', image: '/public/imgs/street/biz125es/03.webp', colorCode: '#070707ff' }
    ],
    description: 'O scooter ideal para agilidade no trânsito urbano.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHV',
      cilindrada: '124,9 cm³',
      potencia: '9,2 cv @ 7.500 rpm',
      transmissao: 'CVT',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'elite-125',
    name: 'Elite 125',
    price: 'R$ 13.880,00',
    priceNumber: 13880,
    category: 'street',
    image: '/public/imgs/street/elite125/01.webp',
    colors: [
      { name: 'Azul', image: '/public/imgs/street/elite125/01.webp', colorCode: '#207b8bff' },
      { name: 'Vermelho', image: '/public/imgs/street/elite125/02.webp', colorCode: '#ff0000ff' },
      { name: 'Prata', image: '/public/imgs/street/elite125/03.webp', colorCode: '#a8abacff' }
    ],
    description: 'Scooter moderno com design sofisticado e tecnologia avançada.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHV',
      cilindrada: '124,9 cm³',
      potencia: '9,2 cv @ 7.500 rpm',
      transmissao: 'CVT',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'pcx',
    name: 'PCX DLX ABS',
    price: 'R$ 20.234,00',
    priceNumber: 20234,
    category: 'street',
    image: '/public/imgs/street/pcxdlxabs/01.webp',
    description: 'O scooter premium com tecnologia Honda SMART Key.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, eSP',
      cilindrada: '149,3 cm³',
      potencia: '16 cv @ 8.500 rpm',
      transmissao: 'CVT',
      combustivel: 'Gasolina',
      partida: 'SMART Key'
    }
  },
  {
    id: 'pcx2',
    name: 'PCX ABS',
    price: 'R$ 19.773,00',
    priceNumber: 19773,
    category: 'street',
    image: '/public/imgs/street/pcxabs/01.webp',
    description: 'O scooter premium com tecnologia Honda SMART Key.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, eSP',
      cilindrada: '149,3 cm³',
      potencia: '16 cv @ 8.500 rpm',
      transmissao: 'CVT',
      combustivel: 'Gasolina',
      partida: 'SMART Key'
    }
  },
  {
    id: 'pcx3',
    name: 'PCX CBS',
    price: 'R$ 17.976,00',
    priceNumber: 17976,
    category: 'street',
    image: '/public/imgs/street/pcxcbs/01.webp',
    description: 'O scooter premium com tecnologia Honda SMART Key.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, eSP',
      cilindrada: '149,3 cm³',
      potencia: '16 cv @ 8.500 rpm',
      transmissao: 'CVT',
      combustivel: 'Gasolina',
      partida: 'SMART Key'
    }
  },
  {
    id: 'honda-adv',
    name: 'Honda ADV',
    price: 'R$ 24.534,00',
    priceNumber: 24534,
    category: 'street',
    image: '/public/imgs/street/hondaadv/01.webp',
    colors: [
      { name: 'Vermelho', image: '/public/imgs/street/hondaadv/01.webp', colorCode: '#ff0000ff' },
      { name: 'Prata', image: '/public/imgs/street/hondaadv/02.webp', colorCode: '#a3a8a8ff' },
    ],
    description: 'Scooter adventure com design robusto e versatilidade.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, eSP',
      cilindrada: '149,3 cm³',
      potencia: '12,6 cv @ 8.500 rpm',
      transmissao: 'CVT',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'x-adv',
    name: 'X-ADV',
    price: 'R$ 93.500,00',
    priceNumber: 93500,
    category: 'street',
    image: '/public/imgs/street/xadv/01.webp',
    colors: [
      { name: 'Cinza', image: '/public/imgs/street/xadv/01.webp', colorCode: '#505050ff' },
      { name: 'Azul', image: '/public/imgs/street/xadv/02.webp', colorCode: '#8babacff' },
    ],
    description: 'O maxi-scooter adventure mais avançado da Honda.',
    specs: {
      motor: 'Bicilíndrico, 4 tempos, OHC',
      cilindrada: '745 cm³',
      potencia: '54,2 cv @ 6.250 rpm',
      transmissao: 'DCT',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'cb-300f-twister',
    name: 'CB 300F Twister ABS',
    price: 'R$ 25.637,00',
    priceNumber: 25637,
    category: 'street',
    image: '/public/imgs/street/cb300ftwisterabs/01.webp',
    colors: [
      { name: 'Azul', image: '/public/imgs/street/cb300ftwisterabs/01.webp', colorCode: '#0026ffff' },
      { name: 'Vermelho', image: '/public/imgs/street/cb300ftwisterabs/02.webp', colorCode: '#ff0000ff' },
    ],
    description: 'Naked com design agressivo e performance equilibrada.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, DOHC',
      cilindrada: '286,5 cm³',
      potencia: '25,4 cv @ 8.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'cb-300f-twister2',
    name: 'CB 300F Twister CBS',
    price: 'R$ 24.657,00',
    priceNumber: 24657,
    category: 'street',
    image: '/public/imgs/street/cb300ftwistercbs/01.webp',
    colors: [
      { name: 'Vermelho', image: '/public/imgs/street/cb300ftwistercbs/01.webp', colorCode: '#ff0000ff' },
      { name: 'Cinza', image: '/public/imgs/street/cb300ftwistercbs/02.webp', colorCode: '#464646ff' },
    ],
    description: 'Naked com design agressivo e performance equilibrada.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, DOHC',
      cilindrada: '286,5 cm³',
      potencia: '25,4 cv @ 8.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'hornet-500',
    name: 'Hornet 500',
    price: 'R$ 43.040,00',
    priceNumber: 43040,
    category: 'street',
    image: '/public/imgs/street/hornet500/01.webp',
    colors: [
      { name: 'Vermelha', image: '/public/imgs/street/hornet500/01.webp', colorCode: '#dc2626' },
      { name: 'Branco', image: '/public/imgs/street/hornet500/01.webp', colorCode: '#ffffffff' },
      { name: 'Preto', image: '/public/imgs/street/hornet500/01.webp', colorCode: '#000000ff' }
    ],
    description: 'A naked de média cilindrada mais desejada.',
    specs: {
      motor: 'Bicilíndrico, 4 tempos, DOHC',
      cilindrada: '471 cm³',
      potencia: '47,6 cv @ 8.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'cb-650r',
    name: 'CB 650R E-Clutch',
    price: 'R$ 58.270,00',
    priceNumber: 58270,
    category: 'street',
    image: '/public/imgs/street/cb650reclutch/01.webp',
    colors: [
      { name: 'Vermelha', image: '/public/imgs/street/cb650reclutch/01.webp', colorCode: '#dc2626' },
      { name: 'Azul', image: '/public/imgs/street/cb650reclutch/02.webp', colorCode: '#032b63ff' },
      { name: 'Cinza', image: '/public/imgs/street/cb650reclutch/03.webp', colorCode: '#464646ff' }
    ],
    description: 'Naked de alta cilindrada com performance e tecnologia.',
    specs: {
      motor: '4 cilindros, 4 tempos, DOHC',
      cilindrada: '648,7 cm³',
      potencia: '94 cv @ 12.000 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'cb-1000r',
    name: 'CB 1000R',
    price: 'R$ 78.870,00',
    priceNumber: 78870,
    category: 'street',
    image: '/public/imgs/street/cb1000r/01.webp',
    colors: [
      { name: 'Vermelha', image: '/public/imgs/street/cb1000r/01.webp', colorCode: '#dc2626' },
      { name: 'Preto', image: '/public/imgs/street/cb1000r/02.webp', colorCode: '#050505ff' },
    ],
    description: 'Super naked com potência e tecnologia de ponta.',
    specs: {
      motor: '4 cilindros, 4 tempos, DOHC',
      cilindrada: '998 cm³',
      potencia: '145 cv @ 10.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'cb-1000r-black',
    name: 'CB 1000R Black Edition',
    price: 'R$ 87.730,00',
    priceNumber: 87730,
    category: 'street',
    image: '/public/imgs/street/cb1000rblackedition/01.webp',
    description: 'Versão exclusiva da CB 1000R com acabamento premium.',
    specs: {
      motor: '4 cilindros, 4 tempos, DOHC',
      cilindrada: '998 cm³',
      potencia: '145 cv @ 10.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },

  // Sport Category
  {
    id: 'cbr-650r',
    name: 'CBR 650R',
    price: 'R$ 55.360,00',
    priceNumber: 55360,
    category: 'sport',
    image: '/lovable-uploads/7889673e-35bf-42d0-8b30-6497966053e9.png',
    colors: [
      { name: 'Vermelha', image: '/lovable-uploads/7889673e-35bf-42d0-8b30-6497966053e9.png', colorCode: '#dc2626' },
      { name: 'Preta', image: '/lovable-uploads/1568b85e-2264-48b3-92e5-4b0b1df36b74.png', colorCode: '#1f2937' },
      { name: 'Prata', image: '/lovable-uploads/a941bebe-7d66-45d4-aabf-9738b5f2af80.png', colorCode: '#94a3b8' }
    ],
    description: 'Supersportiva com design agressivo e performance superior.',
    specs: {
      motor: '4 cilindros, 4 tempos, DOHC',
      cilindrada: '648,7 cm³',
      potencia: '94 cv @ 12.000 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'cbr-1000rr-r-fireblade-sp',
    name: 'CBR 1000RR-R FIREBLADE SP',
    price: 'R$ 189.174,00',
    priceNumber: 189174,
    category: 'sport',
    image: '/placeholder.svg',
    description: 'A supersportiva mais avançada da Honda, inspirada na MotoGP.',
    specs: {
      motor: '4 cilindros, 4 tempos, DOHC',
      cilindrada: '999,8 cm³',
      potencia: '217 cv @ 14.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },

  // Adventure Category
  {
    id: 'xr-300l-tornado',
    name: 'XR 300L Tornado',
    price: 'R$ 30.840,00',
    priceNumber: 30840,
    category: 'adventure',
    image: '/public/imgs/adventure/xr300ltornado/01.webp',
    description: 'Trail leve e versátil para qualquer terreno.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, DOHC',
      cilindrada: '292,4 cm³',
      potencia: '25,5 cv @ 8.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'nxr-160-bros',
    name: 'NXR 160 Bros ABS',
    price: 'R$ 21.820,00',
    priceNumber: 21820,
    category: 'adventure',
    image: '/public/imgs/adventure/nxr160brosabs/01.webp',
    colors: [
      { name: 'Cinza', image: '/public/imgs/adventure/nxr160brosabs/01.webp', colorCode: '#35373dff' },
      { name: 'Vermelho', image: '/public/imgs/adventure/nxr160brosabs/02.webp', colorCode: '#ff0000ff' },
    ],
    description: 'A trail mais querida do Brasil, robusta e confiável.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHC',
      cilindrada: '162,7 cm³',
      potencia: '14,9 cv @ 8.500 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'nxr-160-bros2',
    name: 'NXR 160 Bros CBS',
    price: 'R$ 20.900,00',
    priceNumber: 20900,
    category: 'adventure',
    image: '/public/imgs/adventure/nxr160broscbs/01.webp',
    colors: [
      { name: 'Preto', image: '/public/imgs/adventure/nxr160broscbs/02.webp', colorCode: '#000000ff' },
      { name: 'Vermelho', image: '/public/imgs/adventure/nxr160broscbs/01.webp', colorCode: '#ff0000ff' },
    ],
    description: 'A trail mais querida do Brasil, robusta e confiável.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHC',
      cilindrada: '162,7 cm³',
      potencia: '14,9 cv @ 8.500 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'sahara-300',
    name: 'Sahara 300 Adventure',
    price: 'R$ 31.290,00',
    priceNumber: 31290,
    category: 'adventure',
    image: '/public/imgs/adventure/sahara300adventure/01.webp',
    description: 'Adventure de média cilindrada com design moderno.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, SOHC',
      cilindrada: '292,4 cm³',
      potencia: '25,5 cv @ 8.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'sahara-3002',
    name: 'Sahara 300 Rally',
    price: 'R$ 30.240,00',
    priceNumber: 30240,
    category: 'adventure',
    image: '/public/imgs/adventure/sahara300Rally/01.webp',
    description: 'Adventure de média cilindrada com design moderno.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, SOHC',
      cilindrada: '292,4 cm³',
      potencia: '25,5 cv @ 8.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'sahara-3003',
    name: 'Sahara 300 Standard',
    price: 'R$ 29.580,00',
    priceNumber: 31290,
    category: 'adventure',
    image: '/public/imgs/adventure/sahara300standard/01.webp',
    description: 'Adventure de média cilindrada com design moderno.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, SOHC',
      cilindrada: '292,4 cm³',
      potencia: '25,5 cv @ 8.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'xre-190',
    name: 'XRE 190 Adventure',
    price: 'R$ 23.640,00',
    priceNumber: 23640,
    category: 'adventure',
    image: '/public/imgs/adventure/xre190adventure/01.webp',
    description: 'Adventure de entrada com ótimo custo-benefício.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHV',
      cilindrada: '184,4 cm³',
      potencia: '16,7 cv @ 8.000 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'xre-1902',
    name: 'XRE 190 Standard',
    price: 'R$ 23.640,00',
    priceNumber: 23120,
    category: 'adventure',
    image: '/public/imgs/adventure/xre190standard/01.webp',
    colors: [
      { name: 'Azul', image: '/public/imgs/adventure/xre190standard/02.webp', colorCode: '#213966ff' },
      { name: 'Vermelho', image: '/public/imgs/adventure/xre190standard/01.webp', colorCode: '#ff0000ff' },
    ],
    description: 'Adventure de entrada com ótimo custo-benefício.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHV',
      cilindrada: '184,4 cm³',
      potencia: '16,7 cv @ 8.000 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'nx-500',
    name: 'NX 500',
    price: 'R$ 45.800,00',
    priceNumber: 45800,
    category: 'adventure',
    image: '/public/imgs/adventure/nx500/01.webp',
    colors: [
      { name: 'Vermelho', image: '/public/imgs/adventure/nx500/01.webp', colorCode: '#ff0000ff' },
      { name: 'Branco', image: '/public/imgs/adventure/nx500/02.webp', colorCode: '#ffffffff' },
      { name: 'Preto', image: '/public/imgs/adventure/nx500/03.webp', colorCode: '#000000ff' },
    ],
    description: 'Adventure de média cilindrada com tecnologia avançada.',
    specs: {
      motor: 'Bicilíndrico, 4 tempos, DOHC',
      cilindrada: '471 cm³',
      potencia: '47,6 cv @ 8.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'nc-750x',
    name: 'NC 750X MT',
    price: 'R$ 53.730,00',
    priceNumber: 53730,
    category: 'adventure',
    image: '/public/imgs/adventure/nc750xmt/01.webp',
    colors: [
      { name: 'Vermelho', image: '/public/imgs/adventure/nc750xmt/01.webp', colorCode: '#ff0000ff' },
      { name: 'Prata', image: '/public/imgs/adventure/nc750xmt/02.webp', colorCode: '#7e7e7eff' },
    ],
    description: 'Adventure touring com câmbio DCT e design único.',
    specs: {
      motor: 'Bicilíndrico, 4 tempos, OHC',
      cilindrada: '745 cm³',
      potencia: '54,2 cv @ 6.250 rpm',
      transmissao: 'DCT (opcional)',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'nc-750x2',
    name: 'NC 750X DCT',
    price: 'R$ 59.510,00',
    priceNumber: 59510,
    category: 'adventure',
    image: '/public/imgs/adventure/nc750xdct/02.webp',
    colors: [
      { name: 'Prata', image: '/public/imgs/adventure/nc750xdct/02.webp', colorCode: '#7e7e7eff' },
      { name: 'Vermelho', image: '/public/imgs/adventure/nc750xdct/01.webp', colorCode: '#ff0000ff' },
    ],
    description: 'Adventure touring com câmbio DCT e design único.',
    specs: {
      motor: 'Bicilíndrico, 4 tempos, OHC',
      cilindrada: '745 cm³',
      potencia: '54,2 cv @ 6.250 rpm',
      transmissao: 'DCT (opcional)',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'crf-1100l-africa-twin',
    name: 'CRF 1100L Africa Twin MT',
    price: 'R$ 81.100,00',
    priceNumber: 81100,
    category: 'adventure',
    image: '/public/imgs/adventure/crf1100lafricatwinmt/01.webp',
    colors: [
      { name: 'Azul', image: '/public/imgs/adventure/crf1100lafricatwinmt/01.webp', colorCode: '#1766ddff' },
      { name: 'Preto', image: '/public/imgs/adventure/crf1100lafricatwinmt/02.webp', colorCode: '#000000ff' },
    ],
    description: 'A lendária Africa Twin com tecnologia de ponta.',
    specs: {
      motor: 'Bicilíndrico, 4 tempos, OHC',
      cilindrada: '1.084 cm³',
      potencia: '101 cv @ 7.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'crf-1100l-africa-twin2',
    name: 'CRF 1100L Africa Twin DCT',
    price: 'R$ 88.100,00',
    priceNumber: 88100,
    category: 'adventure',
    image: '/public/imgs/adventure/crf1100lafricatwindct/02.webp',
    colors: [
      { name: 'Preto', image: '/public/imgs/adventure/crf1100lafricatwindct/02.webp', colorCode: '#000000ff' },
      { name: 'Azul', image: '/public/imgs/adventure/crf1100lafricatwindct/01.webp', colorCode: '#1766ddff' },
    ],
    description: 'A lendária Africa Twin com tecnologia de ponta.',
    specs: {
      motor: 'Bicilíndrico, 4 tempos, OHC',
      cilindrada: '1.084 cm³',
      potencia: '101 cv @ 7.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'crf-1100l-africa-twin-adventure-sports',
    name: 'CRF 1100L Africa Twin Adventure Sports MT',
    price: 'R$ 102.130,00',
    priceNumber: 102130,
    category: 'adventure',
    image: '/public/imgs/adventure/crf1100lafricatwinadventuresportsmt/01.webp',
    description: 'Versão Adventure Sports com suspensões eletrônicas.',
    specs: {
      motor: 'Bicilíndrico, 4 tempos, OHC',
      cilindrada: '1.084 cm³',
      potencia: '101 cv @ 7.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'crf-1100l-africa-twin-adventure-sports2',
    name: 'CRF 1100L Africa Twin Adventure Sports DCT',
    price: 'R$ 109.130,00',
    priceNumber: 109130,
    category: 'adventure',
    image: '/public/imgs/adventure/crf1100lafricatwinadventuresportsdct/01.webp',
    description: 'Versão Adventure Sports com suspensões eletrônicas.',
    specs: {
      motor: 'Bicilíndrico, 4 tempos, OHC',
      cilindrada: '1.084 cm³',
      potencia: '101 cv @ 7.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'honda-adv5',
    name: 'Honda ADV',
    price: 'R$ 24.534,00',
    priceNumber: 24534,
    category: 'adventure',
    image: '/public/imgs/adventure/hondaadv/01.webp',
    colors: [
      { name: 'Vermelho', image: '/public/imgs/adventure/hondaadv/01.webp', colorCode: '#ff0000ff' },
      { name: 'Prata', image: '/public/imgs/adventure/hondaadv/02.webp', colorCode: '#a3a8a8ff' },
    ],
    description: 'Scooter adventure com design robusto e versatilidade.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, eSP',
      cilindrada: '149,3 cm³',
      potencia: '12,6 cv @ 8.500 rpm',
      transmissao: 'CVT',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'x-adv5',
    name: 'X-ADV',
    price: 'R$ 93.500,00',
    priceNumber: 93500,
    category: 'adventure',
    image: '/public/imgs/adventure/xadv/01.webp',
    colors: [
      { name: 'Cinza', image: '/public/imgs/adventure/xadv/01.webp', colorCode: '#505050ff' },
      { name: 'Azul', image: '/public/imgs/adventure/xadv/02.webp', colorCode: '#8babacff' },
    ],
    description: 'O maxi-scooter adventure mais avançado da Honda.',
    specs: {
      motor: 'Bicilíndrico, 4 tempos, OHC',
      cilindrada: '745 cm³',
      potencia: '54,2 cv @ 6.250 rpm',
      transmissao: 'DCT',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },

  // Touring Category
  {
    id: 'gl-1800-gold-wing-tour',
    name: 'GL 1800 Gold Wing Tour',
    price: 'R$ 304.450,00',
    priceNumber: 304450,
    category: 'touring',
    image: '/placeholder.svg',
    description: 'A touring de luxo mais avançada do mundo.',
    specs: {
      motor: '6 cilindros, 4 tempos, OHC',
      cilindrada: '1.833 cm³',
      potencia: '125 cv @ 5.500 rpm',
      transmissao: 'DCT',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },

  // Off Road Category
  {
    id: 'crf-250f',
    name: 'CRF 250F',
    price: 'R$ 23.390,00',
    priceNumber: 23390,
    category: 'offroad',
    image: '/placeholder.svg',
    description: 'Off-road de entrada para trilhas e diversão.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, DOHC',
      cilindrada: '249,4 cm³',
      potencia: '22,8 cv @ 8.500 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Gasolina',
      partida: 'Pedal'
    }
  },
  {
    id: 'linha-crf-250',
    name: 'Linha CRF 250',
    price: 'R$ 71.163,00',
    priceNumber: 71163,
    category: 'offroad',
    image: '/placeholder.svg',
    description: 'Off-road de competição com tecnologia de ponta.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, DOHC',
      cilindrada: '249,4 cm³',
      potencia: '40 cv @ 12.000 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'linha-crf-450',
    name: 'Linha CRF 450',
    price: 'R$ 74.878,00',
    priceNumber: 74878,
    category: 'offroad',
    image: '/placeholder.svg',
    description: 'Off-road de alta performance para profissionais.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, DOHC',
      cilindrada: '449,7 cm³',
      potencia: '53 cv @ 9.000 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'trx-420-fourtrax',
    name: 'TRX 420 FourTrax',
    price: 'R$ 53.550,00',
    priceNumber: 53550,
    category: 'offroad',
    image: '/placeholder.svg',
    description: 'Quadriciclo 4x4 para trabalho e lazer.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHV',
      cilindrada: '420 cm³',
      potencia: '31 cv @ 7.000 rpm',
      transmissao: 'CVT',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  }
];