import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-12" style={{ background: 'radial-gradient(circle, #5AB7CC 0%, #5AB7CC 60%, #2D5B66 100%)' }}>
      <section className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-center justify-center px-4">
        {/* Columna izquierda: Foto + Título */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-[500px] mt-8 md:mt-0">
  <img
    src="/images_src/assets/contacto-imagen3.png"
    alt="Contacto"
    className="w-[260px] md:w-[320px] h-[500px] object-cover rounded-[37px] shadow-md"
  />
</div>

        {/* Columna derecha: Formulario */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
  <form className="bg-white/30 rounded-2xl border border-white px-4 py-4 sm:px-8 sm:py-8 w-full max-w-xs md:max-w-[500px] flex flex-col gap-4 shadow-lg backdrop-blur-md box-border">
    <div className="grid grid-cols-1 gap-4">
      <input type="text" placeholder="Nombre" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" />
      <input type="text" placeholder="Apellido" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" />
      <input type="text" placeholder="Empresa" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" />
      <input type="text" placeholder="Cargo" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" />
      <input type="email" placeholder="Mail" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" />
      <input type="text" placeholder="Teléfono" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" />
    </div>
    <div>
      <label className="block font-imprima text-black mb-2">Consulta</label>
      <textarea rows={4} className="w-full rounded-md px-4 py-2 bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 box-border" />
    </div>
    <div className="flex justify-end mt-2">
      <button
        type="submit"
        className="w-full h-[44px] flex items-center justify-center px-6 py-[10px] bg-[#FF6CE8] rounded-lg text-[20px] font-semibold text-black shadow-md transition-all duration-200 hover:scale-105"
      >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Tarjetas de contacto */}
      <section className="w-full max-w-6xl flex flex-col items-center justify-center mt-16 px-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card Ubicación */}
          <div className="flex items-center bg-[#E6F0FF] border-2 border-[#4A90E2] rounded-2xl px-6 py-4 shadow-sm min-h-[70px]">
            <img src="/images_src/assets/logoContac/location.png" alt="Ubicación" className="w-8 h-8 mr-4" />
            <div className="flex flex-col text-sm text-black">
              <span>Córdoba - Argentina</span>
              <span>Santiago de Chile - Chile</span>
            </div>
          </div>
          {/* Card WhatsApp */}
          <div className="flex items-center bg-[#E6F0FF] border-2 border-[#4A90E2] rounded-2xl px-6 py-4 shadow-sm min-h-[70px]">
            <img src="/images_src/assets/logoContac/logoWhat.png" alt="WhatsApp" className="w-8 h-8 mr-4" />
            <div className="flex flex-col text-sm text-black">
              <span><a href="https://wa.me/5493515927458" target="_blank" rel="noopener noreferrer" className="underline">+54 9 351 5927458</a> - Fabiana</span>
              <span>+56 9 93888939 - Roberto</span>
            </div>
          </div>
          {/* Card Email */}
          <div className="flex items-center bg-[#E6F0FF] border-2 border-[#4A90E2] rounded-2xl px-6 py-4 shadow-sm min-h-[70px]">
            <img src="/images_src/assets/logoContac/logoCorreo.png" alt="Mail" className="w-8 h-8 mr-4 object-contain" />
            <span className="text-sm text-black">xxxxxxxxx@gmail.com</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
