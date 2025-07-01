import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-12" style={{ background: 'radial-gradient(circle, #5AB7CC 0%, #5AB7CC 60%, #2D5B66 100%)' }}>
      <section className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-center justify-center px-4">
        {/* Columna izquierda: Foto */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <img
            src="/images_src/assets/contacto-imagen3.png"
            alt="Contacto"
            className="w-[260px] md:w-[320px] md:h-[450px] object-cover rounded-[37px] shadow-md shadow-md mt-10"
          />
        </div>

        {/* Columna derecha: Formulario */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <form className="bg-white/30 rounded-2xl border border-white p-4 sm:p-8 w-full max-w-[95%] md:max-w-[500px] flex flex-col gap-4 shadow-lg backdrop-blur-md box-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <input type="text" placeholder="Nombre" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full min-w-0" />
              <input type="text" placeholder="Apellido" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full min-w-0" />
              <input type="text" placeholder="Empresa" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full min-w-0" />
              <input type="text" placeholder="Cargo" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full min-w-0" />
              <input type="email" placeholder="Mail" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full min-w-0" />
              <input type="text" placeholder="Teléfono" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full min-w-0" />
            </div>
            <div>
              <label className="block font-imprima text-black mb-2">Consulta</label>
              <textarea rows={4} className="w-full rounded-md px-4 py-2 bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 box-border" />
            </div>
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="w-full md:w-[236px] h-[44px] flex items-center justify-center px-[24px] py-[10px] bg-[#FF6CE8] rounded-lg text-[20px] font-semibold text-black shadow-md transition-all duration-200 hover:scale-105"
                style={{ gap: '8px' }}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Datos de contacto abajo */}
      <section className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-start justify-center mt-10 px-4">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <span
            style={{
              fontFamily: 'Impact, Arial Black, Arial, sans-serif',
              fontWeight: 400,
              fontSize: '40px',
              lineHeight: '26px',
              color: '#2B3F4C',
              display: 'block',
              textAlign: 'center',
            }}
          >
            CONTACTO
          </span>
        </div>
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <div className="flex flex-row items-start gap-6">
            <img src="/images_src/assets/logoContac/logoWhat.png" alt="WhatsApp" className="w-[44px] h-[44px] flex-shrink-0" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              <a href="https://wa.me/5493515927458" target="_blank" rel="noopener noreferrer" className="font-imprima text-[18px] text-black font-bold underline">+54 9 351 5927458</a>
              <span className="font-imprima text-[18px] text-black">Fabiana Castro</span>
              <span className="font-imprima text-[18px] text-black">+56 9 9388 8939</span>
              <span className="font-imprima text-[18px] text-black">Roberto Peña</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-6">
          <img src="/images_src/assets/logoContac/logoCorreo.png" alt="Mail" className="w-[36px] h-[36px] flex-shrink-0 object-contain" />
          <span className="font-imprima text-[18px] text-black font-bold ml-1">xxxxxxxxx@gmail.com</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
