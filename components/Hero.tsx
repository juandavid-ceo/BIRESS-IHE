
import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-950 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/10 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <span className="inline-block bg-orange-500/20 text-orange-400 font-bold py-1 px-4 rounded-full text-sm uppercase tracking-widest mb-6 animate-bounce">
          Experiencia que Genera Confianza
        </span>
        <h1 className="font-teko text-6xl md:text-8xl font-bold uppercase tracking-tight leading-none mb-6">
          Más de 20 Años <br className="hidden md:block" /> 
          <span className="text-orange-500">Mantenimiento de Alto Nivel</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Especialistas en sistemas hidráulicos y electromecánicos. Aseguramos la operatividad vital de su infraestructura con precisión técnica.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href="#services" 
            onClick={scrollTo('services')}
            className="bg-orange-500 text-white font-extrabold py-4 px-10 rounded-full text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-xl shadow-orange-500/20 w-full sm:w-auto"
          >
            Nuestros Servicios
          </a>
          <a 
            href="#contact" 
            onClick={scrollTo('contact')}
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-extrabold py-4 px-10 rounded-full text-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105 w-full sm:w-auto"
          >
            Solicitar Cotización
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse">
        <a href="#about" onClick={scrollTo('about')} className="text-gray-400 flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest mb-2 font-bold">Descubrir más</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
