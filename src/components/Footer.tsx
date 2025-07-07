import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white w-full border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Columna 1: Logo y nombre */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <span className="font-inter font-extrabold text-[40px] leading-[20px] text-center w-full text-black mb-4">ARAUCARIA</span>
          <span className="font-inter font-semibold text-[24px] leading-[20px] text-center w-full text-black mb-4">Argentina</span>
          <span className="font-inter font-semibold text-[24px] leading-[20px] text-center w-full text-black mb-0">Chile</span>
          
        </div>
        {/* Columna 2: Links útiles */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <span className="font-inter font-extrabold text-[24px] leading-[20px] text-center w-full text-black mb-4">Links útiles</span>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><img src="/images_src/assets/iconamoon_player.png" alt="icono" className="w-5 h-5" /><Link to="/" className="font-inter text-lg">Inicio</Link></li>
            <li className="flex items-center gap-2"><img src="/images_src/assets/iconamoon_player.png" alt="icono" className="w-5 h-5" /><Link to="/whoweare" className="font-inter text-lg">Quienes Somos</Link></li>
            <li className="flex items-center gap-2"><img src="/images_src/assets/iconamoon_player.png" alt="icono" className="w-5 h-5" /><Link to="/services" className="font-inter text-lg">Servicios</Link></li>
            <li className="flex items-center gap-2"><img src="/images_src/assets/iconamoon_player.png" alt="icono" className="w-5 h-5" /><a href="#tecnologias" className="font-inter text-lg">Tecnologías</a></li>
            <li className="flex items-center gap-2"><img src="/images_src/assets/iconamoon_player.png" alt="icono" className="w-5 h-5" /><Link to="/contact" className="font-inter text-lg">Contactanos</Link></li>
          </ul>
        </div>
        {/* Columna 3: Redes sociales */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <span className="font-inter font-extrabold text-[24px] leading-[20px] text-center w-full text-black mb-4">Redes Sociales</span>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook"><img src="/images_src/assets/redesSociales/face.png" alt="Facebook" className="w-10 h-10" /></a>
            <a href="#" aria-label="Instagram"><img src="/images_src/assets/redesSociales/insta.png" alt="Instagram" className="w-10 h-10" /></a>
            <a href="#" aria-label="LinkedIn"><img src="/images_src/assets/redesSociales/link.png" alt="LinkedIn" className="w-10 h-10" /></a>
            <a href="#" aria-label="Web"><img src="/images_src/assets/redesSociales/goo.png" alt="Web" className="w-10 h-10" /></a>
          </div>
        </div>
      </div>
      {/* Div inferior */}
      <div className="w-full bg-[#1A1A4B] py-4 flex flex-col md:flex-row justify-between items-center px-4">
        <span className="font-inter font-semibold text-[24px] leading-[20px] text-center w-full text-white">©Copyright-2025</span>
        <a href="#" className="text-white font-inter text-lg underline md:no-underline">Política de privacidad</a>
      </div>
    </footer>
  );
};

export default Footer; 