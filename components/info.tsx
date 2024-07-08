"use client";

import { Heart, List, RefreshCcw, ShoppingCart, Twitter } from "lucide-react";

import Currency  from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";

import { useState } from 'react';


import Image from "next/image";

import PaymentMethod from '../components/img/PaymentMethod.svg';

import { socialMediaLinks } from '../app/Data';


import { socialMediaProduct } from "../app/Data";











interface InfoProps {
  data: Product
};

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();


  const [quantity, setQuantity] = useState(1);


  const filteredLinks = socialMediaProduct.filter(social => 
    ['Facebook1',  'Twitter1', 'Pinterest1', 'Copy'].includes(social.name)
  );


  const onAddToCart = () => {
    cart.addItem(data);
  }

  return ( 

    <>


    <div className="flex flex-col justify-between ">


    <div>
      {/* <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1> */}
      {/* <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div> */}
      <div className="flex flex-col gap-y-6">
        {/* <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>
            {data?.size?.value}
          </div>
        </div> */}
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
        </div>
      </div>

    </div>
     

  

    <div className="max-w-xl mx-auto" style={{ width: '648px', height: '558px' }}>
      <div className="flex items-center mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-gray-600">4.7 Star Rating (21,671 User feedback)</span>
      </div>

      <h1 className="text-3xl font-bold mb-2">{data.name}</h1>

      <div className="flex justify-between mb-4">
        <span>{data?.size?.value}</span>
        <span className="text-gray-600">Availability:<span className="text-[#2DB224] font-bold">In Stock</span>   </span>
      </div>

      <div className="flex justify-between mb-4">
        <a href="#" className="text-[#000] font-bold hover:underline">Shop all Stetson</a>
        <span className="text-gray-600">Category: Fragrance</span>
      </div>

      <div className="flex items-center mb-4">
        <span className="text-4xl font-bold text-blue-600"> <Currency value={data?.price} /></span>
        <span className="ml-2 text-gray-500 line-through">$350.00</span>
        <span className="ml-2 bg-yellow-300 px-2 py-1 text-sm font-semibold">21% OFF</span>
      </div>


      <hr className="my-4" />

      <div className="flex mb-4">
        <div className=" pr-2" style={{ width: '30%' }}>
          <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
          <select className="w-full border bg-[#F2F4F5] border-gray-300 rounded-md py-2 px-3">
            <option>3.5 fl oz</option>
          </select>
        </div>
        <div className="w-1/2 pl-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
          <div className="flex ">
            <button className="border bg-[#F2F4F5] border-gray-300 px-3 py-1 rounded-l-md" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <input type="number"  className="w-16 border-t border-b bg-[#F2F4F5] border-gray-300 px-3 py-1 text-center" value={quantity} readOnly />
            <button className="border border-gray-300 px-3 py-1 bg-[#F2F4F5] rounded-r-md" onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>
      </div>




      <div className="mt-10 flex justify-start  gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center justify-center bg-[#FA8232] gap-x-2    w-full  text-white py-3 rounded-md font-semibold mb-4">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>

      <div className="flex justify-between mb-8">
        <button className="text-gray-600 hover:text-gray-800 flex items-center">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Add to Wishlist
        </button>
        <button className="text-gray-600 hover:text-gray-800 flex items-center">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Add to List
        </button>


        <div className="flex items-center">
      <span className="mr-2">Share product:</span>
      {filteredLinks.map((social) => (
        <a key={social.name} href={social.link}  className="mx-1">
          <Image
            src={social.icon}
            alt={social.name}
            width={24} 
            height={24}
          />
        </a>
      ))}
    </div>



      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <p className="font-semibold mb-2">100% Guarantee Safe Checkout</p>
        <div className="flex space-x-2">
          {/* {['visa', 'mastercard', 'paypal', 'amex', 'discover', 'jcb', 'diners', 'unionpay'].map((card) => (
            <img key={card} src={`/${card}-icon.png`} alt={card} className="h-8" />
          ))} */}
           <Image src={PaymentMethod} alt="Visa" className="h-6" />
        </div>
      </div>
    </div>

    </div>






    </>
  


  );
}
 
export default Info;
