import React from 'react';

interface EmailButtonProps {
  email: string;
  label?: string;
  className?: string;
}

const EmailButton: React.FC<EmailButtonProps> = ({ 
  email, 
  label = "Email de contacto",
  className = "" 
}) => {
  const handleEmailClick = () => {
    // Abrir el cliente de email predeterminado
    const mailtoUrl = `mailto:${email}`;
    window.open(mailtoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleEmailClick}
      className={`flex items-center bg-[#E6F0FF] border-2 border-[#4A90E2] rounded-2xl px-6 py-4 shadow-sm min-h-[70px] cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md ${className}`}
    >
      <img 
        src="/images_src/assets/logoContac/logoCorreo.png" 
        alt="Mail" 
        className="w-8 h-8 mr-4 object-contain" 
      />
      <div className="flex flex-col text-sm text-black">
        <span className="font-medium text-blue-600 hover:text-blue-800 transition-colors">
          {email}
        </span>
        <span className="text-gray-600">{label}</span>
      </div>
    </div>
  );
};

export default EmailButton; 