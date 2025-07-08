import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  name: string;
  country: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  name, 
  country, 
  className = "" 
}) => {
  const handleWhatsAppClick = () => {
    // Formatear el número de teléfono para WhatsApp
    const formattedNumber = phoneNumber.replace(/\s+/g, '').replace(/[^\d+]/g, '');
    const whatsappUrl = `https://wa.me/${formattedNumber}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleWhatsAppClick}
      className={`flex items-center bg-[#E6F0FF] border-2 border-[#4A90E2] rounded-2xl px-6 py-4 shadow-sm min-h-[70px] cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md ${className}`}
    >
      <img 
        src="/images_src/assets/logoContac/logoWhat.png" 
        alt="WhatsApp" 
        className="w-8 h-8 mr-4" 
      />
      <div className="flex flex-col text-sm text-black">
        <span className="font-medium">
          <span className="text-blue-600 hover:text-blue-800 transition-colors">
            {phoneNumber}
          </span> - {name}
        </span>
        <span className="text-gray-600">{country}</span>
      </div>
    </div>
  );
};

export default WhatsAppButton; 