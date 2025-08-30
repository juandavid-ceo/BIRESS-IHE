import React, { useEffect, useRef } from 'react';

const VisionMission: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
                (el as HTMLElement).style.transitionDelay = `${index * 150}ms`;
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
    <section id="vision-mission" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-on-scroll">
            <h3 className="font-teko text-4xl font-bold text-blue-900 uppercase mb-3">Nuestra Misión</h3>
            <p className="text-gray-600 leading-relaxed">
              Garantizar la máxima confiabilidad y continuidad operativa de los equipos de nuestros clientes mediante soluciones integrales de mantenimiento hidráulico y electromecánico. Nos comprometemos a aplicar rigurosos estándares de calidad, con un equipo de especialistas y componentes de primer nivel, para prevenir interrupciones y maximizar la vida útil de los activos.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-on-scroll">
            <h3 className="font-teko text-4xl font-bold text-blue-900 uppercase mb-3">Nuestra Visión</h3>
            <p className="text-gray-600 leading-relaxed">
              Consolidarnos como el referente nacional en la gestión de activos para la propiedad horizontal y el sector empresarial, liderando la industria a través de la implementación de tecnologías predictivas y soluciones innovadoras que redefinan el estándar de confiabilidad y eficiencia en el mantenimiento.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default VisionMission;