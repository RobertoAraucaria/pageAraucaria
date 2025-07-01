import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import NavbarHome from './NavbarHome';
import NavbarDefault from './NavbarDefault';

export const Layout: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div className="flex flex-col">
      {isHome ? <NavbarHome /> : <NavbarDefault />}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
