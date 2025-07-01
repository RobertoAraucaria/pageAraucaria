import React from 'react';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Sección Hero */}
      <section className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
  style={{ 
    backgroundImage: 'url("/images_src/assets/home-imagenfondo.png")'
  }}
>
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center md:items-start px-2 sm:px-4">
    
    <div className="font-im-fell font-[400] text-white text-[28px] sm:text-[32px] md:text-[40px] lg:text-[64px] leading-[110%] text-center md:text-left rounded-xl px-2 sm:px-4 py-2 sm:py-4 w-full max-w-[881px] flex flex-col items-center md:items-start mt-24">
      <span className="w-full text-center md:text-left pl-6 sm:pl-12">Transformamos ideas en<br />tecnología que funciona</span>
      <button
        className="w-[220px] h-[56px] sm:w-[300px] sm:h-[64px] md:w-[393px] md:h-[80px] flex items-center justify-center rounded-[16px] border-[3px] border-[#FF16DB] px-[6px] py-[6px] sm:px-[10px] sm:py-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-20 self-center"
        style={{ background: 'linear-gradient(90deg, rgba(246,43,219,0.17) 0%, #FF6CE8 100%)' }}
      >
        <span className="w-full font-['Roboto'] font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[16px] tracking-[1.25px] uppercase text-white flex items-center justify-center">MAS INFORMACION</span>
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 10L24 16L18 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 16H24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>

  </div>
</section>

      {/* Soluciones Tenologicas */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-[1290px] mx-auto flex flex-col items-center">
          <h2 className="font-inter font-bold text-[48px] leading-[100%] text-center text-[#18174F] mb-12">
            Soluciones tecnológicas a tu medida
          </h2>
          <div className="font-inter font-medium text-[32px] leading-[100%] text-center text-black mb-12 w-full max-w-[1290px] mt-4">
            Impulsamos tu negocio con software innovador, eficiente y seguro.
          </div>
          {/* Aquí irán los tres cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mt-8">
            {/* Card 1 */}
            <div className="bg-white rounded-[12px] shadow-md w-full max-w-xs h-auto flex flex-col items-center justify-start border-2 border-[#2A26AD] px-6 py-8 space-y-[15px] mb-6">
              <img src="/images_src/assets/images/card1.png" alt="Desarrollo Web" className="w-24 h-24 object-contain mb-4" />
              <h3 className="font-inter font-bold text-[24px] text-center text-[#18174F] mb-2">Desarrollo Web</h3>
              <p className="font-inter text-[16px] text-gray-700 text-center">
                Diseñamos y desarrollamos páginas web modernas, rápidas y adaptadas a todos los dispositivos. Creamos experiencias digitales que reflejan la identidad de tu marca y convierten visitas en resultados.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-[12px] shadow-md w-full max-w-xs h-auto flex flex-col items-center justify-start border-2 border-[#2A26AD] px-6 py-8 space-y-[15px] mb-6">
              <img src="/images_src/assets/images/card2.png" alt="Desarrollo App" className="w-24 h-24 object-contain mb-4" />
              <h3 className="font-inter font-bold text-[24px] text-center text-[#18174F] mb-2">Desarrollo App</h3>
              <p className="font-inter text-[16px] text-gray-700 text-center">
                Creamos aplicaciones a medida para Android y iOS que conectan a tu marca con tus usuarios en cualquier momento y lugar.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-[12px] shadow-md w-full max-w-xs h-auto flex flex-col items-center justify-start border-2 border-[#2A26AD] px-6 py-8 space-y-[15px] mb-6">
              <img src="/images_src/assets/images/card3.png" alt="Desarrollo App" className="w-24 h-24 object-contain mb-4" />
              <h3 className="font-inter font-bold text-[24px] text-center text-[#18174F] mb-2">Desarrollo App</h3>
              <p className="font-inter text-[16px] text-gray-700 text-center">
                Creamos aplicaciones a medida para Android y iOS que conectan a tu marca con tus usuarios en cualquier momento y lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección crecimiento tecnológico  */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-[1290px] mx-auto flex flex-col items-center">
          <h2 className="font-inter font-bold text-[48px] leading-[100%] text-center text-[#DB1EB9] mb-8">
            Un equipo muchas soluciones
          </h2>
          <h3 className="font-inter font-bold text-[32px] leading-[100%] text-center text-black max-w-[1312px] mb-12">
            Somos un grupo de profesionales apasionados por la tecnología. Diseñamos y desarrollamos soluciones digitales que acompañan tu crecimiento.
          </h3>
          {/* Grilla de servicios */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mt-8 px-4">
            {/* Servicio 1 */}
            <div className="w-full max-w-md h-[120px] sm:h-[140px] bg-[#61E7D9] border-2 border-[#117471] rounded-[12px] flex items-center px-4 sm:px-8">
              <span className="mr-4 sm:mr-6 flex-shrink-0">
                <img src="/images_src/assets/creciTecno/computer.png" alt="icono" className="w-6 h-6 sm:w-8 sm:h-8" />
              </span>
              <span className="text-black text-[20px] sm:text-[26px] font-imprima font-normal text-center w-full">Tiendas Online</span>
            </div>
            {/* Servicio 2 */}
            <div className="w-full max-w-md h-[120px] sm:h-[140px] bg-[#61E7D9] border-2 border-[#117471] rounded-[12px] flex items-center px-4 sm:px-8">
              <span className="mr-4 sm:mr-6 flex-shrink-0">
                <img src="/images_src/assets/creciTecno/mobile.png" alt="icono" className="w-6 h-6 sm:w-8 sm:h-8" />
              </span>
              <span className="text-black text-[20px] sm:text-[26px] font-imprima font-normal text-center w-full">Aplicaciones Móviles</span>
            </div>
            {/* Servicio 3 */}
            <div className="w-full max-w-md h-[120px] sm:h-[140px] bg-[#61E7D9] border-2 border-[#117471] rounded-[12px] flex items-center px-4 sm:px-8">
              <span className="mr-4 sm:mr-6 flex-shrink-0">
                <img src="/images_src/assets/creciTecno/Group.png" alt="icono" className="w-6 h-6 sm:w-8 sm:h-8" />
              </span>
              <span className="text-black text-[20px] sm:text-[26px] font-imprima font-normal text-center w-full">Capacitación</span>
            </div>
            {/* Servicio 4 */}
            <div className="w-full max-w-md h-[120px] sm:h-[140px] bg-[#61E7D9] border-2 border-[#117471] rounded-[12px] flex items-center px-4 sm:px-8">
              <span className="mr-4 sm:mr-6 flex-shrink-0">
                <img src="/images_src/assets/creciTecno/computer.png" alt="icono" className="w-6 h-6 sm:w-8 sm:h-8" />
              </span>
              <span className="text-black text-[20px] sm:text-[26px] font-imprima font-normal text-center w-full">Sitios Web Profesionales</span>
            </div>
            {/* Servicio 5 */}
            <div className="w-full max-w-md h-[120px] sm:h-[140px] bg-[#61E7D9] border-2 border-[#117471] rounded-[12px] flex items-center px-4 sm:px-8">
              <span className="mr-4 sm:mr-6 flex-shrink-0">
                <img src="/images_src/assets/creciTecno/computer.png" alt="icono" className="w-6 h-6 sm:w-8 sm:h-8" />
              </span>
              <span className="text-black text-[20px] sm:text-[26px] font-imprima font-normal text-center w-full">Landing page para campañas</span>
            </div>
            {/* Servicio 6 */}
            <div className="w-full max-w-md h-[120px] sm:h-[140px] bg-[#61E7D9] border-2 border-[#117471] rounded-[12px] flex items-center px-4 sm:px-8">
              <span className="mr-4 sm:mr-6 flex-shrink-0">
                <img src="/images_src/assets/creciTecno/conec.png" alt="icono" className="w-6 h-6 sm:w-8 sm:h-8" />
              </span>
              <span className="text-black text-[20px] sm:text-[26px] font-imprima font-normal text-center flex-1 break-words leading-tight tracking-[0.03em]">Integraciones con Apis y herramientas externas</span>
            </div>
          </div>
        </div>
      </section>
  {/* Sección tecnologías */}
  <section className="w-full bg-[#F4F6FE] py-12">
        <h2 className="font-inter font-bold text-[48px] leading-[100%] text-center text-black mb-10">Con qué trabajamos</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-8 justify-items-center items-center px-4">
          <img src="/images_src/assets/logoTecno/react1.png" alt="React" className="w-[105px] h-[105px] object-contain" />
          <img src="/images_src/assets/logoTecno/angular.png" alt="Angular" className="w-[105px] h-[105px] object-contain" />
          <img src="/images_src/assets/logoTecno/vue.png" alt="Vue" className="w-[105px] h-[105px] object-contain" />
          <img src="/images_src/assets/logoTecno/py.png" alt="Python" className="w-[105px] h-[105px] object-contain" />
          <img src="/images_src/assets/logoTecno/Flutter.png" alt="Flutter" className="w-[105px] h-[105px] object-contain" />
          <img src="/images_src/assets/logoTecno/angular5.png" alt="AngularJS" className="w-[105px] h-[105px] object-contain" />
          <img src="/images_src/assets/logoTecno/kotlin.png" alt="Kotlin" className="w-[105px] h-[105px] object-contain" />
          <img src="/images_src/assets/logoTecno/js.png" alt="NodeJS" className="w-[105px] h-[105px] object-contain" />
          <img src="/images_src/assets/logoTecno/php.png" alt="PHP" className="w-[105px] h-[105px] object-contain" />
          <img src="/images_src/assets/logoTecno/html.png" alt="html" className="w-[105px] h-[105px] object-contain" />
          <img src="/images_src/assets/logoTecno/mysql.png" alt="MySQL" className="w-[105px] h-[105px] object-contain" />
          <img src="/images_src/assets/logoTecno/postgres.png" alt="Postgres" className="w-[105px] h-[105px] object-contain" />
        </div>
      </section>

      {/* Sección Contacto */}
      <section className="w-full py-16 relative overflow-hidden border border-black" style={{ background: 'radial-gradient(circle, #5AB7CC 0%, #5AB7CC 60%, #2D5B66 100%)' }}>
        {/* Fondo con degradado radial */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to top left, #5AB7CC 0%, #2D5B66 50%, #1A3D47 100%)',
            opacity: 1
          }}
        />
        {/* Contenido */}
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Columna izquierda - Imagen */}
              <div className="md:order-1">
                <div className="flex justify-center">
                  <img 
                    src="/images_src/assets/contacto-imagen3.png" 
                    alt="Contacto" 
                    className="w-[259px] h-[365px] rounded-[37px] object-cover shadow-[0_4.15px_4.15px_0_rgba(0,0,0,0.25)] mx-auto" 
                  />
                </div>
              </div>
              {/* Columna derecha - Contenido y Botón */}
              <div className="md:order-2 w-full max-w-4xl mx-auto">
                <h2 className="font-cuprim font-normal text-[40px] leading-[100%] text-center mb-6 text-black">
                  Si tenés una idea, un desafío o querés llevar tu empresa al siguiente nivel con tecnología, estamos listos para ayudarte.
                </h2>
                <div className="flex justify-center mt-10">
                  <a 
                    href="#contacto" 
                    className="bg-gradient-to-r from-[#AACCFF] to-[#0094F0] hover:from-[#99BBEE] hover:to-[#0084D6] text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-md"
                  >
                    Comunicate ahora con nosotros
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
    
  );
};

export default HomePage;
