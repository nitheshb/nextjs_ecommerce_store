"use client"

// components/Sidebar.tsx
import { useState } from 'react';
import Image from 'next/image';

const categories: string[] = [
  "Cold & Allergy Essentials", "Snacks & Candy", "Household", "First Aid & Safety",
  "Personal Care", "Beauty", "Medicine", "Drinks", "Food & Pantry",
  "Vitamins & Supplements", "Frozen", "Pet", "Home Health", "Baby & Child",
  "Sales", "CVS Brand Products", "FSA/HSA"
];

interface Brand {
  name: string;
  checked: boolean;
}

const initialPopularBrands: Brand[] = [
  { name: "Apple", checked: true },
  { name: "Microsoft", checked: true },
  { name: "Dell", checked: false },
  { name: "Symphony", checked: false },
  { name: "Sony", checked: false },
  { name: "LG", checked: true },
  { name: "One Plus", checked: false },
  { name: "Google", checked: true },
  { name: "Samsung", checked: false },
  { name: "HP", checked: true },
  { name: "Xiaomi", checked: false },
  { name: "Panasonic", checked: true },
  { name: "Intel", checked: false }
];

const popularTags: string[] = [
  "Game", "iPhone", "TV", "Laptops", "Macbook", "SSD", "Graphics Card",
  "Power Bank", "Smart TV", "Speaker", "Tablet", "Microwave", "Samsung"
];

const Sidebar = () => {
  const [popularBrands, setPopularBrands] = useState<Brand[]>(initialPopularBrands);

  const handleCheckboxChange = (index: number) => {
    const newPopularBrands = [...popularBrands];
    newPopularBrands[index].checked = !newPopularBrands[index].checked;
    setPopularBrands(newPopularBrands);
  };

  return (
    <div className="w-64 bg-white p-4">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold mb-1">SHOPPERS STOP</h1>
        <h2 className="text-xl font-bold mb-1">Shoppers Stop</h2>
        <p className="text-sm text-blue-600">In-store Prices</p>
        <p className="text-sm text-blue-600">100% Satisfaction Guarantee</p>
      </div>
      
      <div className="p-4 border-b border-gray-200">
        <p className="flex items-center mb-2 text-sm">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Shop Home
        </p>
        <p className="flex items-center mb-2 text-sm">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Buy it Again
        </p>
        <p className="flex items-center text-sm">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>
          My Lists
        </p>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h2 className="font-bold mb-2 text-sm">CATEGORIES</h2>
        <ul className="text-sm">
          {categories.map((category, index) => (
            <li key={index} className="mb-1">{category}</li>
          ))}
        </ul>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h2 className="font-bold mb-2 text-sm">POPULAR BRANDS</h2>
        <ul>
          {popularBrands.map((brand, index) => (
            <li key={index} className="flex items-center mb-1">
              <input
                type="checkbox"
                checked={brand.checked}
                onChange={() => handleCheckboxChange(index)}
                className="mr-2 form-checkbox h-4 w-4 text-orange-500 rounded-sm"
              />
              <span className="text-sm">{brand.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h2 className="font-bold mb-2 text-sm">POPULAR TAGS</h2>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <span key={index} className={`text-xs px-2 py-1 rounded ${
              tag === 'Graphics Card' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100'
            }`}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4">
        <Image
          src=""
          alt="Apple Watch"
          width={200}
          height={200}
          className="mb-4"
        />
        <h3 className="font-bold text-xl mb-1">APPLE WATCH</h3>
        <h4 className="font-bold text-xl mb-2">SERIES 7</h4>
        <p className="text-lg mb-1">Heavy on Features.</p>
        <p className="text-lg mb-4">Light on Price.</p>
        <p className="font-bold text-lg mb-2">Only for: <span className="bg-yellow-300 px-2">$299 USD</span></p>
        <button className="w-full bg-orange-500 text-white py-2 rounded mb-2 font-bold">ADD TO CART</button>
        <button className="w-full border border-gray-300 text-gray-700 py-2 rounded flex items-center justify-center">
          VIEW DETAILS
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
