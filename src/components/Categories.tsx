import { useState } from 'react';
import { Bike, Mountain, MapPin, TreePine, Gauge } from 'lucide-react';
import { categories } from '@/data/bikes';
import { Category } from '@/types/bike';

interface CategoriesProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const iconMap = {
  Bike,
  Gauge,
  Mountain,
  MapPin,
  TreePine
};

const Categories = ({ selectedCategory, onCategorySelect }: CategoriesProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Escolha Sua Categoria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre a motocicleta Honda perfeita para o seu estilo de vida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const isSelected = selectedCategory === category.id;
            
            return (
              <div
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`
                  group cursor-pointer p-6 rounded-xl transition-all duration-300 hover:scale-105
                  ${isSelected 
                    ? 'bg-gradient-category text-white shadow-hover' 
                    : 'bg-card hover:bg-gradient-category hover:text-white shadow-card'
                  }
                `}
              >
                <div className="text-center">
                  <div className={`
                    inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-colors
                    ${isSelected 
                      ? 'bg-white/20' 
                      : 'bg-honda-red/10 group-hover:bg-white/20'
                    }
                  `}>
                    <IconComponent className={`
                      w-8 h-8 transition-colors
                      ${isSelected 
                        ? 'text-white' 
                        : 'text-honda-red group-hover:text-white'
                      }
                    `} />
                  </div>
                  
                  <h3 className={`
                    text-xl font-bold mb-2 transition-colors
                    ${isSelected 
                      ? 'text-white' 
                      : 'text-foreground group-hover:text-white'
                    }
                  `}>
                    {category.name}
                  </h3>
                  
                  <p className={`
                    text-sm transition-colors
                    ${isSelected 
                      ? 'text-white/80' 
                      : 'text-muted-foreground group-hover:text-white/80'
                    }
                  `}>
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;