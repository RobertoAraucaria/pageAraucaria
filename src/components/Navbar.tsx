import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Quiénes Somos' },
  { to: '/services', label: 'Servicios' },
  { to: '/contact', label: 'Contacto' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = location.pathname === '/';
  const linkColor = isHome ? 'text-white' : 'text-black';
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/images_src/assets/logo2.png" alt="Logo" className="h-14 w-14 mr-4 bg-transparent shadow-none border-none rounded-full" />
          </Link>
          <span className={`font-inter font-normal text-[24px] leading-[24px] text-center align-middle text-gray-900`}>Araucaria</span>
        </div>
        {/* Links a la derecha (desktop) */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-inter font-normal text-[24px] leading-[24px] text-center align-middle transition-colors duration-200 ${location.pathname === link.to ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Botón hamburguesa (mobile) */}
        <button className={`${linkColor} md:hidden text-3xl`} onClick={() => setMenuOpen(true)}>
          <FaBars />
        </button>
      </div>
      {/* Menú móvil */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/80 z-50 flex flex-col items-center justify-center md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          {/* Botón cerrar arriba a la derecha */}
          <button
            className="absolute top-4 right-4 text-white text-2xl rounded-full p-2 focus:outline-none hover:bg-white/20 transition"
            style={{
              background: 'none',
              border: 'none',
              boxShadow: 'none',
              padding: '0.5rem',
              margin: 0,
              outline: 'none',
            }}
            onClick={e => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            aria-label="Cerrar menú"
          >
            <FaTimes style={{ background: 'none', boxShadow: 'none', border: 'none' }} />
          </button>
          {/* Links */}
          <div onClick={e => e.stopPropagation()} className="flex flex-col items-center w-full">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white text-2xl font-inder mb-8"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 