import React from 'react';
import { Button } from './Button';

interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaOnClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  ctaText,
  ctaOnClick,
}) => {
  return (
    <div className="relative py-16 overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">{title}</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {description}
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button onClick={ctaOnClick} variant="primary" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
