import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MessageCircle } from 'lucide-react';
import { testimonials } from '@/data/seller';

const Testimonials = () => {
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'hoje';
    if (diffInDays === 1) return 'ontem';
    if (diffInDays < 30) return `há ${diffInDays} dias`;
    const diffInMonths = Math.floor(diffInDays / 30);
    return `há ${diffInMonths} ${diffInMonths === 1 ? 'mês' : 'meses'}`;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">O que dizem nossos clientes</h2>
          <p className="text-muted-foreground text-lg">
            Depoimentos reais de pessoas que realizaram o sonho da Honda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Header com cliente */}
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.clientAvatar} alt={testimonial.clientName} />
                    <AvatarFallback>
                      {testimonial.clientName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{testimonial.clientName}</h3>
                    <p className="text-sm text-muted-foreground">{formatDate(testimonial.date)}</p>
                  </div>
                </div>

                {/* Avaliação */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{testimonial.rating}.0</span>
                </div>

                {/* Moto comprada */}
                <div className="bg-honda-red/10 text-honda-red px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {testimonial.bikeModel}
                </div>

                {/* Comentário */}
                <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </blockquote>

                {/* Resposta do vendedor */}
                {testimonial.sellerResponse && (
                  <div className="border-l-4 border-honda-blue pl-4 bg-muted/50 p-3 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageCircle className="w-4 h-4 text-honda-blue" />
                      <span className="text-sm font-medium text-honda-blue">Resposta do vendedor</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      {testimonial.sellerResponse}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-gradient-to-r from-honda-red/10 to-honda-blue/10 border-0">
            <CardContent className="p-0 text-center">
              <h3 className="text-xl font-bold mb-2">Seja o próximo cliente satisfeito!</h3>
              <p className="text-muted-foreground">
                Junte-se aos mais de 800 clientes que realizaram o sonho da Honda conosco
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;