import React, { useState } from 'react';
import WhatsAppButton from './WhatsAppButton';
import EmailButton from './EmailButton';

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/xanjgewy', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center pt-24 pb-12"
      style={{
        background: 'radial-gradient(circle, #5AB7CC 0%, #5AB7CC 60%, #2D5B66 100%)',
      }}
    >
      <section className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-center justify-center px-4">
        {/* Columna izquierda: Foto */}
        <div className="flex items-center justify-center w-full md:w-1/2 h-[500px]">
          <img
            src="/images_src/assets/contacto-imagen3.png"
            alt="Contacto"
            className="w-[260px] md:w-[320px] h-[500px] object-cover rounded-[37px] shadow-md"
          />
        </div>

        {/* Columna derecha: Formulario */}
        <div className="flex items-center justify-center w-full md:w-1/2 h-[500px]">
          <form 
            className="bg-white/30 rounded-2xl border border-white px-4 py-4 sm:px-6 sm:py-6 w-full max-w-xs md:max-w-[500px] flex flex-col gap-4 shadow-lg backdrop-blur-md box-border h-full justify-start overflow-hidden"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2 overflow-y-auto" style={{ maxHeight: 'calc(500px - 60px)' }}>
              <input name="nombre" type="text" placeholder="Nombre" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 w-full !text-black" required />
              <input name="apellido" type="text" placeholder="Apellido" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 w-full !text-black" required />
              <input name="empresa" type="text" placeholder="Empresa" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 w-full !text-black" />
              <input name="cargo" type="text" placeholder="Cargo" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 w-full !text-black" />
              <input name="email" type="email" placeholder="Mail" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 w-full !text-black" required />
              <input name="telefono" type="text" placeholder="Teléfono" className="rounded-md px-4 py-2 bg-white/80 border border-gray-300 w-full !text-black" />
              <label className="text-sm text-black mt-1">Consulta</label>
              <textarea name="consulta" rows={3} className="w-full rounded-md px-4 py-2 bg-white/80 border border-gray-300 resize-none !text-black" required />
            </div>
            <button
              type="submit"
              className="w-full h-[44px] mt-2 flex items-center justify-center bg-[#FF6CE8] rounded-lg text-[20px] font-semibold text-black shadow-md transition-all duration-200 hover:scale-105"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar'}
            </button>
            {status === 'success' && <div className="text-green-700 text-center mt-2">¡Mensaje enviado con éxito!</div>}
            {status === 'error' && <div className="text-red-700 text-center mt-2">Ocurrió un error. Intenta nuevamente.</div>}
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
              <span className="font-medium">Córdoba - Argentina</span>
              <span className="text-gray-600">Santiago de Chile - Chile</span>
            </div>
          </div>
          {/* Card WhatsApp - Fabiana */}
          <WhatsAppButton 
            phoneNumber="+54 9 351 5927458"
            name="Fabiana"
            country="Argentina"
          />
          {/* Card Email */}
          <EmailButton 
            email="fabic452@gmail.com"
            label="Email de contacto"
          />
        </div>
        
        {/* Segunda fila: solo WhatsApp de Roberto centrado en pantallas grandes (comentado para uso futuro) 
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
          <div className="hidden md:block"></div>
          <WhatsAppButton 
            phoneNumber="+56 9 93888939"
            name="Roberto"
            country="Chile"
          />
          <div className="hidden md:block"></div>
        </div>*/}
      </section>
    </div>
  );
};

export default ContactSection;
