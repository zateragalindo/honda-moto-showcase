import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, Clock } from 'lucide-react';
import { Bike } from '@/types/bike';

interface BikeCardProps {
  bike: Bike;
  onInterestClick: (bike: Bike) => void;
}

const BikeCard = ({ bike, onInterestClick }: BikeCardProps) => {
  const getRandomViews = () => Math.floor(Math.random() * 50) + 10;
  const getRandomDaysAgo = () => Math.floor(Math.random() * 7) + 1;
  const isPopular = Math.random() > 0.7;

  return (
    <Card className="group overflow-hidden hover:shadow-hover transition-all duration-300 hover:scale-105 bg-card border-border">
      <div className="relative">
        {/* Price Tag */}
        <div className="absolute top-4 left-4 z-10 bg-honda-red text-white px-3 py-1 rounded-lg font-bold text-sm shadow-lg">
          {bike.price}
        </div>

        {/* Heart/Save Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-4 right-4 z-10 bg-white/80 hover:bg-white text-honda-red"
        >
          <Heart className="w-4 h-4" />
        </Button>

        {/* Bike Image */}
        <div className="relative h-48 bg-gradient-to-br from-honda-blue/5 to-honda-red/5 flex items-center justify-center overflow-hidden">
          <img
            src={bike.image}
            alt={bike.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop';
            }}
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-category opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
            <Button
              variant="secondary"
              className="bg-white text-honda-blue hover:bg-white/90 font-semibold"
              onClick={() => onInterestClick(bike)}
            >
              Ver Detalhes
            </Button>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-honda-red transition-colors">
          {bike.name}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {bike.description}
        </p>

        {/* Social Stats */}
        <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            <span>{getRandomViews()} visualizações</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>Vendido há {getRandomDaysAgo()} dias</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            onClick={() => onInterestClick(bike)}
            className="w-full bg-honda-red hover:bg-honda-dark-red text-white font-semibold transition-all duration-300"
          >
            Tenho Interesse
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            *Preço público sugerido. Frete não incluso.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BikeCard;