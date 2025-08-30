import React from 'react';

const Header: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" onClick={scrollToTop} aria-label="Volver al inicio" className="font-teko text-3xl font-bold text-blue-900 uppercase">
          BIRESS IHE
        </a>
        <a 
          href="#contact" 
          onClick={scrollToContact}
          className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300"
          aria-label="Ir a la sección de contacto"
        >
          Contáctenos
        </a>
      </div>
    </header>
  );
};

export default Header;