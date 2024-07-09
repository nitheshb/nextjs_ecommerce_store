 "use client"

import { SetStateAction, useState, useEffect } from 'react';
import Image from 'next/image';
import d1 from '../components/img/d1.png';
import man1 from '../components/img/man1.png';
import d3 from '../components/img/d3.png';

const slides = [
  {
    id: 1,
    title: "Order Products for delivery to your door",
    subtitle: "Whatever you want from local stores, brought right to your door.",
    image: man1
  },
  {
    id: 2,
    title: "Fast and Reliable Delivery",
    subtitle: "Get your products quickly and efficiently.",
    image: d1
  },
  {
    id: 3,
    title: "Wide Range of Products",
    subtitle: "Choose from a variety of local stores and products.",
    image: d3
  }
];

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[65vh]">
      <div
        className="absolute inset-0 overflow-hidden bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('/your-background-image.jpg')`, 
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
}
