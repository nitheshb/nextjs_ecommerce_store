"use client"

import React, { useState } from 'react';

import { features, shipping, description } from '@/app/Data';

const Productinfo = () => {
  const [activeTab, setActiveTab] = useState('DESCRIPTION');



  return (

    <div className='border-[#E4E7E9] p-5 rounded-lg  border-2 mb-5'>


<div className="font-sans mx-auto max-w-7xl">
      <div className="flex border-b border-gray-200 mb-10">
        {['DESCRIPTION', 'ADDITIONAL INFORMATION'].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 font-bold ${
              activeTab === tab
                ? 'text-black border-b-2 border-orange-500'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <div className="w-3/6 pr-4">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Description</h2>
          <p className="text-[#5F6C72] mb-2">{description.title}</p>
          <p className="text-[#5F6C72] mb-2">{description.summary}</p>
          {description.details.map((detail, index) => (
            <p key={index} className="text-[#5F6C72] mb-2">{detail}</p>
          ))}
        </div>

        <div className="w-1/3 px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Feature</h2>
          <ul className="list-none p-0">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center mb-2">
                <span className="text-orange-500 mr-2 font-bold">.</span>
                <span className="text-[#5F6C72]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-1/3 pl-4">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Shipping Information</h2>
          <ul className="list-none p-0">
            {shipping.map((option, index) => (
              <li key={index} className="text-[#5F6C72] mb-2">
                <strong className='text-[#000] font-bold'>{option.method}:</strong> {option.time}, {option.cost}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    </div>


  );
};

export default Productinfo;