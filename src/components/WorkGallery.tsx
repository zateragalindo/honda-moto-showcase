import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, Bike } from 'lucide-react';
import { workGallery } from '@/data/seller';

const WorkGallery = () => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meu Trabalho</h2>
          <p className="text-muted-foreground text-lg">
            Momentos especiais das entregas realizadas - Cada cliente é único!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {workGallery.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={item.image}
                  alt={`Entrega ${item.bikeModel} para ${item.client}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-semibold text-sm mb-1">{item.bikeModel}</p>
                    <p className="text-xs opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="w-4 h-4 text-honda-blue" />
                    <span className="font-medium">{item.client}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Bike className="w-4 h-4 text-honda-red" />
                    <span className="text-muted-foreground">{item.bikeModel}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{formatDate(item.date)}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-gradient-to-r from-honda-red/10 to-honda-blue/10 border-0">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold mb-2">Quer ser o próximo?</h3>
              <p className="text-muted-foreground mb-4">
                Vamos juntos encontrar a Honda perfeita para você!
              </p>
              <Button className="bg-honda-red hover:bg-honda-dark-red">
                Começar Minha Jornada
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;