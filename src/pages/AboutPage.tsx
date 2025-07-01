import React from 'react';
import { Card } from '../components/Card';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 bg-white w-full text-center">
      <div className="w-full">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Nosotros</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Acerca de Araucaria
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <Card>
            <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
            <p className="text-gray-600">
              En Araucaria, nos comprometemos a crear soluciones tecnológicas innovadoras y eficientes que mejoren la vida de las personas.
              Nuestro equipo de expertos trabaja constantemente para ofrecer productos de alta calidad y experiencias excepcionales.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};
