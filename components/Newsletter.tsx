// components/Newsletter.tsx
import React from 'react';

import Image from 'next/image';

import Mail from '../components/img/Mail.png'

const Newsletter: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32 w-full">
      <div className="w-full max-w-full mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-blue-600">
          Subscribe to our newsletter
        </h2>
        <p className="mt-4 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl  text-gray-700">
          Sign up to hear about new offers, products, and more!
          <br />
          Plus, enjoy <span className="text-blue-500 font-bold">10% OFF</span> your first order!
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center w-full">
          <div className="relative flex-grow sm:flex-grow-0 sm:w-80 lg:w-96 xl:w-1/3 2xl:w-1/2 mb-4 sm:mb-0 sm:mr-2 w-full">
            <input
              type="email"
              className="w-full py-3 px-4 pl-12 bg-white border border-gray-300 rounded-lg sm:rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Email Address"
            />
            <div className="absolute left-4 top-3 flex items-center pointer-events-none">
            <Image 
              src={Mail}
              alt="Encart experience"
              width={20}
              height={20}
            />
            </div>
          </div>
          <button className="bg-orange-500 text-white py-3 px-6 rounded-lg sm:rounded-r-lg hover:bg-orange-600 w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
