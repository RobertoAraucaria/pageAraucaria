import React from 'react';
import NavbarDefault from '../components/NavbarDefault';

const WhoWeArePage: React.FC = () => {
  return (
    <>
      <NavbarDefault />
      <section className="w-full min-h-screen h-screen bg-[#F5F8FE] flex flex-col justify-center items-center pt-16 pb-0">
        <div className="max-w-[1400px] mx-auto px-4">
          <h1 className="font-['Inter'] font-extrabold text-[48px] text-center leading-tight mb-6">
            <span className="text-[#2D1582]">Desarrollamos </span>
            <span className="text-[#FFC845]">soluciones de software con tecnología</span>
            <span className="text-[#2D1582]"> e innovación al servicio de las personas</span>
          </h1>
          <h2 className="font-imprima font-normal text-[36px] text-black leading-[100%] max-w-[1212px] mb-2 mt-8">Somos Araucaria</h2>
          <p className="font-imprima font-normal text-[36px] text-black leading-[100%] max-w-[1212px] mb-12">
            En Araucaria somos un equipo multidisciplinario de desarrolladores, diseñadores, analistas y especialistas en tecnología, comprometidos con la calidad, la eficiencia y la mejora continua.
          </p>
          <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center mt-8">
            <div className="bg-white rounded-2xl border-4 border-[#7B4AE2] p-6 max-w-[348px] w-full h-[240px] text-center shadow-md flex flex-col items-start">
              <div className="font-imprima font-normal text-[20px] text-black leading-[100%] w-full mb-2 mt-2 text-center">Nuestra misión</div>
              <div className="font-imprima font-normal text-[20px] text-black leading-[100%] w-full text-center">Brindar soluciones tecnológicas que se adapten a las necesidades específicas de cada cliente, ayudándolos a optimizar procesos, mejorar su productividad y ofrecer experiencias digitales de alto nivel.</div>
            </div>
            <div className="bg-white rounded-2xl border-4 border-[#7B4AE2] p-6 max-w-[348px] w-full h-[240px] text-center shadow-md flex flex-col items-start">
              <div className="font-imprima font-normal text-[20px] text-black leading-[100%] w-full mb-2 mt-2 text-center">Nuestra visión</div>
              <div className="font-imprima font-normal text-[20px] text-black leading-[100%] w-full text-center">Ser una empresa líder en desarrollo de software a nivel regional, reconocida por su innovación, excelencia técnica y compromiso con los resultados de sus clientes.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeArePage; 