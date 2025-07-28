import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Award, Clock, MessageCircle, TrendingUp, Users } from 'lucide-react';
import { seller } from '@/data/seller';
import { sendWhatsAppMessage } from '@/utils/whatsapp';

const SellerProfile = () => {
  const handleContactClick = () => {
    const message = `Olá ${seller.name}! Vi seu perfil no site da Honda e gostaria de conversar sobre as motos disponíveis. Você pode me ajudar? 😊`;
    sendWhatsAppMessage(message);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-honda-red to-honda-blue bg-clip-text text-transparent">
            Seu Consultor Especializado
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça quem vai te ajudar a realizar o sonho da sua Honda
          </p>
        </div>

        <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-3 gap-0">
              {/* Perfil Principal */}
              <div className="md:col-span-1 bg-gradient-to-br from-honda-red/10 to-honda-blue/10 p-8 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img
                    src={seller.avatar}
                    alt={seller.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2">{seller.name}</h3>
                <p className="text-honda-blue font-semibold mb-4">{seller.position}</p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(seller.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-bold text-lg">{seller.rating}</span>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-honda-red" />
                    <span>{seller.totalSales}+ vendas realizadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-honda-blue" />
                    <span>{seller.experience} anos de experiência</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-green-500" />
                    <span>Responde em {seller.responseTime}</span>
                  </div>
                </div>

                <Button
                  onClick={handleContactClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar com {seller.name.split(' ')[0]}
                </Button>
              </div>

              {/* Estatísticas e Bio */}
              <div className="md:col-span-2 p-8">
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-gradient-to-br from-honda-red/10 to-transparent rounded-lg">
                    <div className="text-2xl font-bold text-honda-red mb-1">
                      {seller.monthlyStats.clientsServed}
                    </div>
                    <div className="text-sm text-muted-foreground">Clientes este mês</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-honda-blue/10 to-transparent rounded-lg">
                    <div className="text-2xl font-bold text-honda-blue mb-1">
                      {seller.monthlyStats.bikesSold}
                    </div>
                    <div className="text-sm text-muted-foreground">Motos vendidas</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-transparent rounded-lg">
                    <div className="text-2xl font-bold text-green-500 mb-1">
                      {seller.monthlyStats.avgRating}
                    </div>
                    <div className="text-sm text-muted-foreground">Avaliação média</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Sobre mim</h4>
                  <p className="text-muted-foreground leading-relaxed">{seller.bio}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Especialidades</h4>
                  <div className="flex flex-wrap gap-2">
                    {seller.specialties.map((specialty, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-honda-red/10 text-honda-red border-honda-red/20"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Certificações</h4>
                  <div className="space-y-2">
                    {seller.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-honda-blue" />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SellerProfile;