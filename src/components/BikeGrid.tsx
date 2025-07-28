import { useState } from 'react';
import { bikes } from '@/data/bikes';
import { Bike } from '@/types/bike';
import BikeCard from './BikeCard';
import Categories from './Categories';

interface BikeGridProps {
  onBikeSelect: (bike: Bike) => void;
}

const BikeGrid = ({ onBikeSelect }: BikeGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState('street');

  const filteredBikes = bikes.filter(bike => bike.category === selectedCategory);

  return (
    <section id="estoque" className="py-16 bg-muted/30">
      <Categories 
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      
      <div className="container mx-auto px-4 mt-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            {selectedCategory === 'street' && 'Motocicletas Street'}
            {selectedCategory === 'sport' && 'Motocicletas Sport'}
            {selectedCategory === 'adventure' && 'Motocicletas Adventure'}
            {selectedCategory === 'touring' && 'Motocicletas Touring'}
            {selectedCategory === 'offroad' && 'Motocicletas Off Road'}
          </h3>
          <p className="text-muted-foreground">
            {filteredBikes.length} modelos disponíveis
          </p>
        </div>

        {filteredBikes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBikes.map((bike) => (
              <BikeCard
                key={bike.id}
                bike={bike}
                onInterestClick={onBikeSelect}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Nenhuma motocicleta encontrada nesta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BikeGrid;