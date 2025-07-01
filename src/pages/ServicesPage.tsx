import React from 'react';
import NavbarDefault from '../components/NavbarDefault';

const ServicesPage: React.FC = () => {
  return (
    <>
      <NavbarDefault />
      {/* Título destacado */}
      <section className="w-full flex justify-center pt-24 pb-4 bg-[#F5F8FE]">
        <div className="font-['Inter'] font-semibold text-[48px] leading-[100%] text-center text-[#270B7D] max-w-[1361px] w-full mb-10">
          INNOVACION TECNOLOGICA AL SERVICIO DE TU CRECIMIENTO
        </div>
      </section>
      {/* Propósito */}
      <section className="w-full flex justify-center pb-8 bg-[#F5F8FE]">
        <div className="font-imprima font-normal text-[32px] leading-[100%] text-center text-black max-w-[1304px] w-full">
          Nuestro propósito es acompañar a empresas, emprendedores e instituciones en su proceso de transformación digital, brindando herramientas tecnológicas que potencien su desarrollo y optimicen su gestión.
        </div>
      </section>
      {/* Grilla de servicios */}
      <section className="w-full flex flex-col items-center py-8 bg-[#F5F8FE]">
        <h2 className="font-['Inter'] font-medium text-[48px] text-black text-center leading-[100%] max-w-[601px] w-full mb-8">Lo que podemos construir</h2>
        <div className="w-full max-w-[1300px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {/* Tiendas Online */}
          <div className="w-full max-w-[340px] h-[120px] bg-[#61E7D9] border-2 border-[#117471] rounded-[16px] flex items-center px-4">
            <span className="mr-4 flex-shrink-0">
              <img src="/images_src/assets/creciTecno/computer.png" alt="icono" className="w-8 h-8" />
            </span>
            <span className="text-black text-[20px] font-imprima font-normal text-center w-full">Tiendas Online</span>
          </div>
          {/* Aplicaciones Móviles */}
          <div className="w-full max-w-[340px] h-[120px] bg-[#61E7D9] border-2 border-[#117471] rounded-[16px] flex items-center px-4">
            <span className="mr-4 flex-shrink-0">
              <img src="/images_src/assets/creciTecno/mobile.png" alt="icono" className="w-8 h-8" />
            </span>
            <span className="text-black text-[20px] font-imprima font-normal text-center w-full">Aplicaciones Móviles</span>
          </div>
          {/* Capacitación */}
          <div className="w-full max-w-[340px] h-[120px] bg-[#61E7D9] border-2 border-[#117471] rounded-[16px] flex items-center px-4">
            <span className="mr-4 flex-shrink-0">
              <img src="/images_src/assets/creciTecno/Group.png" alt="icono" className="w-8 h-8" />
            </span>
            <span className="text-black text-[20px] font-imprima font-normal text-center w-full">Capacitación</span>
          </div>
          {/* Sitios Web Profesionales */}
          <div className="w-full max-w-[340px] h-[120px] bg-[#61E7D9] border-2 border-[#117471] rounded-[16px] flex items-center px-4">
            <span className="mr-4 flex-shrink-0">
              <img src="/images_src/assets/creciTecno/computer.png" alt="icono" className="w-8 h-8" />
            </span>
            <span className="text-black text-[20px] font-imprima font-normal text-center w-full">Sitios Web Profesionales</span>
          </div>
          {/* Landing page para campañas */}
          <div className="w-full max-w-[340px] h-[120px] bg-[#61E7D9] border-2 border-[#117471] rounded-[16px] flex items-center px-4">
            <span className="mr-4 flex-shrink-0">
              <img src="/images_src/assets/creciTecno/computer.png" alt="icono" className="w-8 h-8" />
            </span>
            <span className="text-black text-[20px] font-imprima font-normal text-center w-full">Landing page para campañas</span>
          </div>
          {/* Integraciones con Apis y herramientas externas */}
          <div className="w-full max-w-[340px] h-[120px] bg-[#61E7D9] border-2 border-[#117471] rounded-[16px] flex items-center px-4">
            <span className="mr-4 flex-shrink-0">
              <img src="/images_src/assets/creciTecno/conec.png" alt="icono" className="w-8 h-8" />
            </span>
            <span className="text-black text-[20px] font-imprima font-normal text-center w-full">Integraciones con Apis y herramientas externas</span>
          </div>
        </div>
      </section>
      {/* Como trabajamos */}
      <section className="w-full flex flex-col items-center py-16 bg-[#F5F8FE]">
        <h2 className="font-['Inter'] font-semibold text-[40px] text-black text-center mb-10">Como trabajamos</h2>
        <div className="w-full max-w-[1100px] flex flex-col gap-8">
          {/* Card 1 */}
          <div className="bg-[#E9F0FF] rounded-lg p-8 shadow-sm">
            <h3 className="font-['Inter'] font-semibold text-[24px] text-[#2D1582] mb-2 text-center">¿Cuánto tiempo tarda en entregar un proyecto?</h3>
            <p className="font-imprima text-[18px] text-black text-center">
              Para una página web, estimamos un plazo de 30 días, dependiendo de la complejidad y los contenidos entregados a tiempo.<br />
              En el caso de una aplicación, el tiempo de desarrollo varía según los requerimientos y funcionalidades. Una vez definido el alcance, podemos estimar un plazo más preciso.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#E9F0FF] rounded-lg p-8 shadow-sm">
            <h3 className="font-['Inter'] font-semibold text-[24px] text-[#2D1582] mb-2 text-center">¿Qué necesito para comenzar un  proyecto?</h3>
            <p className="font-imprima text-[18px] text-black text-center">
              Para dar inicio a tu proyecto, solo necesitamos algunos elementos clave...<br />
              Contanos qué tenés en mente, puede ser una idea, una necesidad o un problema que querés resolver. No hace falta que esté todo definido.<br />
              Un ratito para charlar, coordinamos una reunión (virtual o presencial) y empezamos a darle forma a tu proyecto.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-[#E9F0FF] rounded-lg p-8 shadow-sm">
            <h3 className="font-['Inter'] font-semibold text-[24px] text-[#2D1582] mb-2 text-center">¿Qué costo tiene el desarrollo?</h3>
            <p className="font-imprima text-[18px] text-black text-center">
              El costo depende de lo que necesites crear. Cada proyecto es único, y por eso trabajamos con presupuestos personalizados.<br />
              Contanos tu idea y en poco tiempo te enviamos una propuesta clara sin compromiso.
            </p>
          </div>
        </div>
      </section>
      {/* Mensaje final */}
      <section className="w-full flex justify-center py-8 bg-[#F5F8FE]">
        <div className="font-['Inter'] font-semibold text-[20px] text-center text-[#FF16DB] w-full max-w-[900px]">
          No hace falta que sepas de tecnología, estamos para acompañarte en todo el proceso y convertir tu idea en algo real
        </div>
      </section>
      <section className="w-full flex justify-center items-center" style={{ background: '#D9D9D9', minHeight: '28.27px' }}>
        <div
          className="font-['Inter'] font-normal text-[20px] text-center text-black"
          style={{ width: '208px', height: '28.27px', lineHeight: '28.27px' }}
        >
          Copyright 2025
        </div>
      </section>
    </>
  );
};

export default ServicesPage; 