import { useState, useEffect, useRef } from 'react';
import { Award, Users, Shield, Clock } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    icon: Clock,
    value: 15,
    suffix: '+',
    label: 'Anos de Experiência',
    description: 'Tradição no mercado automotivo'
  },
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'Clientes Satisfeitos',
    description: 'Realizando sonhos sobre duas rodas'
  },
  {
    icon: Shield,
    value: 100,
    suffix: '%',
    label: 'Garantia Honda',
    description: 'Qualidade e confiabilidade'
  },
  {
    icon: Award,
    value: 24,
    suffix: '/7',
    label: 'Suporte Técnico',
    description: 'Atendimento quando precisar'
  }
];

const Counter = ({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutCubic * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}{suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-honda-blue">
        <div className="absolute inset-0 bg-gradient-to-r from-honda-blue via-honda-dark-blue to-honda-blue opacity-90" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossa Trajetória de Sucesso
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Números que refletem nosso compromisso com a excelência e satisfação dos nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="relative">
                  {/* Icon Background */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 group-hover:bg-honda-red/20 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-10 h-10 text-white group-hover:text-white transition-colors" />
                  </div>
                  
                  {/* Animated Counter */}
                  <Counter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                  />
                  
                  {/* Label */}
                  <h3 className="text-xl font-bold text-white mt-4 mb-2">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/80 text-lg mb-6">
            Faça parte da nossa história de sucesso
          </p>
          <button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-honda-red hover:bg-honda-dark-red text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Fale Conosco Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;