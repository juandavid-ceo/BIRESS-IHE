import React, { useEffect, useRef } from 'react';

const Contact: React.FC = () => {
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
    <section id="contact" className="py-20 bg-blue-900 text-white" ref={sectionRef}>
      <div className="container mx-auto px-6 text-center">
        <div className="animate-on-scroll">
            <h2 className="font-teko text-5xl font-bold uppercase">Contáctenos Hoy Mismo</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-2 mb-8"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              ¡Solicite su inspección inicial gratuita o cotización personalizada! Estamos listos para atender sus necesidades.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Juan David Parada Palma */}
          <div className="bg-white text-blue-900 rounded-lg shadow-2xl p-8 animate-on-scroll">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Juan David Parada Palma</h3>
            <div className="space-y-4 text-xl">
              <p className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:3243178095" className="hover:text-orange-600 transition-colors">324 317 8095</a>
              </p>
              <p className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:juandavid.ceo@gmail.com" className="hover:text-orange-600 transition-colors text-lg sm:text-xl">juandavid.ceo@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Néstor Rolando Parada Villamil */}
          <div className="bg-white text-blue-900 rounded-lg shadow-2xl p-8 animate-on-scroll">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Néstor Rolando Parada Villamil</h3>
            <div className="space-y-4 text-xl">
              <p className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:3123854376" className="hover:text-orange-600 transition-colors">312 385 4376</a>
              </p>
              <p className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:nerolan65@hotmail.com" className="hover:text-orange-600 transition-colors text-lg sm:text-xl">nerolan65@hotmail.com</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;