
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`font-teko text-3xl font-bold uppercase tracking-tighter transition-colors ${
            isScrolled ? 'text-blue-900' : 'text-white'
          }`}
        >
          BIRESS <span className="text-orange-500">IHE</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['about', 'services', 'focus', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={scrollToSection(item)}
              className={`font-semibold text-sm uppercase tracking-wider hover:text-orange-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-gray-200'
              }`}
            >
              {item === 'about' ? 'Nosotros' : item === 'services' ? 'Servicios' : item === 'focus' ? 'Enfoque' : 'Contacto'}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={scrollToSection('contact')}
            className="bg-orange-500 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 shadow-md"
          >
            Contáctenos
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-orange-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 right-0 py-6 px-6 flex flex-col space-y-4 animate-fadeIn">
          {['about', 'services', 'focus', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={scrollToSection(item)}
              className="text-blue-900 font-bold uppercase tracking-wide border-b border-gray-100 pb-2"
            >
              {item === 'about' ? 'Nosotros' : item === 'services' ? 'Servicios' : item === 'focus' ? 'Enfoque' : 'Contacto'}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
