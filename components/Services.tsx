import React, { useEffect, useRef } from 'react';
import type { Service } from '../types';

const servicesData: Service[] = [
  {
    title: "Mantenimiento Preventivo Especializado",
    description: [
      "Ajuste y lubricación de electrobombas, bombas eyectoras y tableros eléctricos.",
      "Análisis de funcionamiento para anticipar fallas.",
      "Calibración de presostatos y tanques hidroneumáticos.",
      "Medición de parámetros eléctricos por fase.",
      "Pruebas a flotadores eléctricos y sistemas de nivel."
    ],
    benefit: "Reduce fallas, prolonga la vida útil, optimiza consumo eléctrico y garantiza servicio continuo.",
    icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m6-9h-2M6 12H3m12-3.464l-1.06-1.06M18.364 6.636l-1.06-1.06M6.636 18.364l-1.06-1.06M18.364 18.364l-1.06-1.06M12 12a5 5 0 100-10 5 5 0 000 10z" /></svg> )
  },
  {
    title: "Mantenimiento Correctivo y Reparaciones",
    description: [
      "Diagnóstico y reparación experta de bombas.",
      "Cambio de rodamientos, impulsores, sello mecánico, entre otros repuestos según el requerimiento de la Electrobomba.",
      "Bobinado profesional de motores.",
      "Asesoría sobre reparación o reemplazo."
    ],
    benefit: "Equipos restaurados por expertos, con repuestos de calidad y diagnósticos honestos.",
    icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg> )
  },
  {
    title: "Mantenimiento de Plantas Eléctricas",
    description: [
      "Inspección y limpieza de componentes: filtros, sistema de enfriamiento y escape.",
      "Revisión de niveles de fluidos: aceite, refrigerante y combustible.",
      "Pruebas de arranque y funcionamiento del interruptor de transferencia automática (ATS).",
      "Verificación del estado de la batería y sistema de carga."
    ],
    benefit: "Garantiza operatividad y respuesta inmediata ante fallos de la red eléctrica, protegiendo sus activos y operaciones críticas.",
    icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> )
  },
  {
    title: "Sistemas Eléctricos de Control",
    description: [
      "Diseño, ensamble e instalación de tableros eléctricos de control y fuerza.",
      "Modernización de componentes: cambio de breakers, contactores, temporizadores y cableado estructurado.",
      "Diagnóstico y adecuación de instalaciones eléctricas bajo el Reglamento Técnico de Instalaciones Eléctricas (RETIE).",
      "Implementación de sistemas de control automático para optimizar la operación de equipos."
    ],
    benefit: "Sistemas eléctricos seguros que cumplen la normativa vigente, garantizando la protección de sus equipos y la optimización del consumo energético a través de la automatización.",
    icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> )
  },
  {
    title: "Instalación de Tuberías Inoxidables",
    description: [
      "Instalación de tubería de acero inoxidable calibre 40 para máxima durabilidad.",
      "Aplicación de sellantes de alta calidad para uniones herméticas.",
      "Uso de herramientas especializadas para cortes y ensambles de precisión.",
      "Empleo de teflón americano de alta presión para una hermetización superior."
    ],
    benefit: "Sistemas de tuberías robustos y libres de fugas, que aseguran la pureza del agua y minimizan costos de mantenimiento a largo plazo.",
    icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4m10 0v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2m10 0h2a2 2 0 002-2V8a2 2 0 00-2-2h-2m-8 0H5a2 2 0 00-2 2v4a2 2 0 002 2h2" /></svg> )
  },
  {
    title: "Lavado de Tanques de Reserva de Agua Potable",
    description: [
      "Procedimiento de vaciado controlado y limpieza inicial para remover sedimentos gruesos.",
      "Lavado a presión de paredes y superficies.",
      "Aplicación de hipoclorito de sodio en concentraciones normativas para una desinfección total.",
      "Inspección final, recomendaciones si aplica, llenado del tanque y funcionamiento del mismo.",
      "Certificado del lavado del tanque valor adicional."
    ],
    benefit: "Asegura la pureza del agua potable, cumple con la normativa sanitaria vigente y previene la formación de biopelículas, protegiendo la salud de la comunidad.",
    icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> )
  },
  {
    title: "Desarenado para Cárcamo de Aguas Lluvias",
    description: [
      "Extracción de sedimentos (arena, lodo) para asegurar un drenaje óptimo.",
      "Limpieza profunda para prevenir obstrucciones en bombas, tuberías, prevenir posibles atascamientos y averías en las bombas eyectoras."
    ],
    benefit: "Prolonga la vida útil de las bombas eyectoras, previene atascamientos y evita inundaciones.",
    icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L16 11.414V16a1 1 0 01-.293.707l-2 2A1 1 0 0113 18v-1.586l-1.707-1.707A1 1 0 0111 14V11.414L3.293 6.707A1 1 0 013 6V4z" /></svg> )
  },
  {
    title: "Sondeo de Sifones y Tuberías",
    description: [
      "Utilizamos sondas eléctricas giratorias y equipos de alta presión para eliminar obstrucciones severas.",
      "Remoción de raíces, sedimentos, grasas y objetos sólidos que afectan el flujo.",
      "Diagnóstico preciso para identificar la causa raíz del problema."
    ],
    benefit: "Restablecemos la capacidad hidráulica de sus tuberías, previniendo desbordamientos, malos olores y costosos daños estructurales.",
    icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg> )
  },
  {
    title: "Diseño e Instalación de Equipos de Presión",
    description: [
      "Cálculo y selección de equipos hidroneumáticos (bombas, tanques) según la demanda de la edificación.",
      "Diseño e implementación de tableros de control y fuerza para una operación automatizada y segura.",
      "Instalación completa del sistema, integrando componentes hidráulicos y eléctricos de manera eficiente."
    ],
    benefit: "Suministro de agua con presión constante y confiable en toda la edificación, optimizado para la eficiencia energética y el cumplimiento normativo.",
    icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.636-6.364l.707.707M12 21a9 9 0 110-18 9 9 0 010 18z" /></svg> )
  }
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              (el as HTMLElement).style.transitionDelay = `${index * 100}ms`;
              el.classList.add('is-visible');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-teko text-5xl font-bold text-blue-900 uppercase">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <div className="flex-shrink-0 text-orange-500 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">{service.title}</h3>
              <ul className="text-gray-600 space-y-2 list-disc list-inside flex-grow">
                {service.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t-2 border-orange-200">
                <p className="text-sm font-semibold text-blue-800"><span className="font-bold text-orange-500">Beneficio:</span> {service.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;