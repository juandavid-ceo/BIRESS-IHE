
import React, { useEffect, useRef } from 'react';

const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => {
              el.classList.add('is-visible');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 animate-on-scroll">
            <h2 className="font-teko text-6xl font-bold text-blue-900 uppercase leading-none mb-4">
              Quiénes <span className="text-orange-500">Somos</span>
            </h2>
            <div className="w-20 h-2 bg-orange-500 mb-8"></div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Somos <span className="font-bold text-blue-900">Biress IHE</span>, una empresa familiar que une la excelencia técnica con una administración moderna y comprometida.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg shadow-sm">
                <p className="font-semibold text-blue-900 italic">
                  "Nacemos del deseo de cuidar los sistemas vitales de su edificio como si fueran propios."
                </p>
              </div>
              <p>
                Bajo la dirección técnica de <span className="font-bold">Néstor Rolando Parada Villamil</span>, con más de 20 años de trayectoria especializada, garantizamos diagnósticos precisos y soluciones definitivas. 
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 gap-6 animate-on-scroll" style={{ transitionDelay: '300ms' }}>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-orange-200 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">N</div>
                <h3 className="text-2xl font-bold text-blue-900">Dirección Técnica</h3>
              </div>
              <p className="text-gray-600">Liderada por Néstor Rolando Parada Villamil, cuya experiencia acumulada es la garantía de cada intervención hidráulica y electromecánica.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-orange-200 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">J</div>
                <h3 className="text-2xl font-bold text-blue-900">Gestión Estratégica</h3>
              </div>
              <p className="text-gray-600">A cargo de Juan David Parada Palma, asegurando atención personalizada, transparencia en procesos y un crecimiento constante del servicio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
