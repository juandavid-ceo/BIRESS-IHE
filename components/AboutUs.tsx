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
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-teko text-5xl font-bold text-blue-900 uppercase">Quiénes Somos</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
        </div>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 text-center leading-relaxed animate-on-scroll" style={{ transitionDelay: '200ms' }}>
          <p className="mb-6">
            Somos <span className="font-bold text-blue-900">Biress IHE</span>, una empresa familiar que une la excelencia técnica con una administración moderna y comprometida. En la dirección técnica está <span className="font-semibold">Néstor Rolando Parada Villamil</span>, profesional con más de 20 años de experiencia especializada en mantenimiento hidráulico y electromecánico. Su saber acumulado es la base de cada diagnóstico y solución precisa.
          </p>
          <p className="mb-6">
            Al frente de la gestión está <span className="font-semibold">Juan David Parada Palma</span>, encargado de la atención al cliente, el crecimiento estratégico y la transparencia en cada proceso. Juntos, ofrecen un servicio técnico de alta calidad, personalizado y confiable.
          </p>
          <p className="font-bold text-orange-500">
            Biress IHE nace del compromiso con la excelencia y el deseo de cuidar los sistemas vitales de su edificio como si fueran propios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;