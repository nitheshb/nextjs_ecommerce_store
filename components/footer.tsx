// Footer.tsx

import Image from 'next/image';
import React from 'react';
import { categories, socialMediaLinks, footerInfo } from '../app/Data'; 

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#0070AC] text-[#FFFFFF]">
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row justify-between">

          
          <div>
            <div className="mb-6">
              <Image src={footerInfo.logo} alt="Evencart" width={192} height={46} />
            </div>
            <div className="mb-6">
              <h5 className="font-bold mb-2.5">Customer Support:</h5>
              <p className="mb-3 font-bold">{footerInfo.customerSupport.phone}</p>
              <p className='mb-3 leading-6'>{footerInfo.customerSupport.address}</p>
              <p className='mb-3 leading-6'>Email: {footerInfo.customerSupport.email}</p>
            </div>
          </div>

        
          <div className="mb-6">
            <h5 className="font-bold mb-2.5">Most Popular Categories</h5>

            <div className='flex gap-16'>


            <div className=' gap-16 ml-6'>
              {categories.map((category, index) => (
                <div key={index}>
                  <ul className="leading-6 list-disc">
                    <li className='mb-2 leading-6'><a href={category.link}>{category.name}</a></li>
                  </ul>
                </div>
              ))}
            </div>


            <div className=' gap-16 ml-6'>
              {categories.map((category, index) => (
                <div key={index}>
                  <ul className="leading-6 list-disc">
                    <li className='mb-2 leading-6'><a href={category.link}>{category.name}</a></li>
                  </ul>
                </div>
              ))}
            </div>


            <div className=' gap-16 ml-6'>
              {categories.map((category, index) => (
                <div key={index}>
                  <ul className="leading-6 list-disc">
                    <li className='mb-2  leading-6'><a href={category.link}>{category.name}</a></li>
                  </ul>
                </div>
              ))}
            </div>

            </div>



          </div>

        
          <div className="mb-6">
            <h5 className="font-bold mb-2.5">Get to know us</h5>
            <ul className="list-disc ml-6">
              <li className='mb-2 leading-6'><a href="/about">About Us</a></li>
              <li className='mb-2 leading-6'><a href="/terms">Terms & Conditions</a></li>
              <li className='mb-2 leading-6'><a href="/faq">FAQ</a></li>
              <li className='mb-2 leading-6'><a href="/privacy">Privacy Policy</a></li>
              <li className='mb-2 leading-6'><a href="/ewaste">E-waste Policy</a></li>
              <li className='mb-2 leading-6'><a href="/return">Cancellation & Return Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      
      <hr className="border-t border-[#F0FAFF] my-6 opacity-20" />

    
      <div className="container mx-auto  flex justify-between items-center">
        <div className="text-center bg-[#0070AC] text-[#e0e0e0] p-4 rounded">
        &copy; 2024 Evencart. All rights reserved.
        </div>
        <div className="flex flex-row">
        Follow us:  
          {socialMediaLinks.map((socialMedia, index) => (
            <a key={index} href={socialMedia.link}>
             <Image className='m-1' src={socialMedia.icon} alt={socialMedia.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;















