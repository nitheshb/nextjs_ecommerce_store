"use client";

import { SetStateAction, useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { slides, backgroundImage } from '../app/Data'; 

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: StaticImageData;
}

interface HeaderProps {
  slides: Slide[];
  backgroundImage: string;
}

const Header: React.FC<HeaderProps> = ({ slides, backgroundImage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[65vh]">
      <div
        className="absolute inset-0 overflow-hidden bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-full flex items-center px-10 justify-between">
              <div className="text-left max-w-xl">
                <h1 className="text-5xl font-bold mb-4 text-gray-800">{slide.title}</h1>
                <p className="text-xl mb-8 text-gray-600">{slide.subtitle}</p>
              </div>
              <div className="relative w-1/2 h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? 'bg-sky-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
