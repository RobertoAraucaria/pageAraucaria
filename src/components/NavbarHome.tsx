import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/whoweare', label: 'Quiénes Somos' },
  { to: '/services', label: 'Servicios' },
  { to: '/contact', label: 'Contacto' },
];

const NavbarHome: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/images_src/assets/logo2.png"
              alt="Logo"
              className="h-14 w-14 mr-4 bg-transparent shadow-none border-none rounded-full"
            />
          </Link>
          <span className="text-2xl font-bold text-white">Araucaria</span>
        </div>

        {/* Links (desktop) */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={
                link.label === 'Home'
                  ? 'font-irish text-white text-[24px] leading-[24px] transition-colors duration-200'
                  : ['Quiénes Somos', 'Servicios', 'Contacto'].includes(link.label)
                    ? 'font-inder text-white text-[24px] leading-[24px] transition-colors duration-200'
                    : 'font-medium text-white hover:text-blue-200 transition-colors duration-200'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Botón hamburguesa (mobile) */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
          className="md:hidden p-2 rounded-md bg-white text-black text-2xl hover:bg-gray-200 transition"
        >
          <FaBars />
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          {/* Botón cerrar */}
          <button
            className="absolute top-4 right-4 text-white text-2xl bg-black rounded-md p-2 hover:bg-gray-700 transition"
            onClick={e => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            aria-label="Cerrar menú"
          >
            <FaTimes />
          </button>

          {/* Links menú */}
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

export default NavbarHome;
