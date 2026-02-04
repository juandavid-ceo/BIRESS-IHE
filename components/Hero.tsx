import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="font-teko text-5xl md:text-7xl font-bold uppercase tracking-wide leading-tight">
          Más de 20 Años de Experiencia al Servicio de la <span className="text-orange-500">Confiabilidad</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Expertos que mantienen sus sistemas vitales en óptimo funcionamiento: La experiencia de décadas a su alcance.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#services" 
            onClick={scrollTo('services')}
            className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-orange-600 transition-colors duration-300 w-full sm:w-auto"
            aria-label="Ver nuestros servicios"
            >
            Nuestros Servicios
          </a>
          <a 
            href="#contact" 
            onClick={scrollTo('contact')}
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300 w-full sm:w-auto"
            aria-label="Solicitar cotización"
            >
            Solicitar Cotización
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;