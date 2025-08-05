const Hero = () => {
  return (
    <section id="home" className="h-[100vh] w-full flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-honda-red/10 to-honda-blue/10" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-honda-red to-white bg-clip-text text-transparent animate-fade-in">
            DIVINO HONDA
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 font-medium animate-fade-in [animation-delay:0.2s]">
            Concessionária Autorizada - Os Melhores Modelos 2025
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:0.4s]">
            Descubra a linha completa Honda com qualidade garantida,
            financiamento facilitado e atendimento especializado.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.6s]">
            <button
              onClick={() => document.getElementById('estoque')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-honda-red hover:bg-honda-dark-red text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Ver Estoque
            </button>
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Entre em Contato
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;