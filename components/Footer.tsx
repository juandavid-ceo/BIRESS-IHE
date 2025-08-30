import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <p className="font-semibold text-gray-200 text-lg mb-1">BIRESS IHE</p>
        <p className="text-sm">Ingeniería Hidráulica y Electromecánica</p>
        <div className="mt-6 text-xs">
          &copy; {currentYear} Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;