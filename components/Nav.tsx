"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { socialMediaLinks } from '@/app/Data';
import Image from 'next/image';
import SignInForm from './Login';
import getCategories from '@/actions/get-categories';
import MainNav from './main-nav';
import NavbarActions from './navbar-actions';
import { Category } from '@/types'; 

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="bg-blue-600 text-white py-2 border-b border-[#F0FAFF] border-opacity custom-border-opacity">
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row sm:px-6 lg:px-8 items-center justify-between">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-2 md:mb-0">
            <span className="text-sm">+1 800-555-0000</span>
            <div className="flex space-x-2">
              {socialMediaLinks.map((socialMedia, index) => (
                <Link key={index} href={socialMedia.link} className="text-sm hover:text-blue-200">
                  <i className={`fab fa-${socialMedia.name.toLowerCase()}`}></i>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2 md:space-x-4">
              <span>Follow us:</span>
              {socialMediaLinks.map((socialMedia, index) => (
                <a key={index} href={socialMedia.link} className="m-1">
                  <Image src={socialMedia.icon} alt={socialMedia.name} width={14} height={14} />
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="flex items-center">
                <select className="bg-blue-600 text-sm focus:outline-none border-l border-white px-2 mx-2">
                  <option>ENG</option>
                  <option>FRA</option>
                  <option>ESP</option>
                </select>
              </div>
              <div className="flex items-center">
                <select className="bg-blue-600 text-sm focus:outline-none ">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="bg-blue-600 text-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0"> 
                <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                  <p className="font-bold text-xl">STORE</p>
                </Link>
              </div>
              <MainNav data={categories} />
            </div>

            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-white text-white placeholder-blue-200 rounded-md py-2 px-4 w-full p-2 border focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="h-5 w-5 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div 
                className="relative ml-4"
                onMouseEnter={() => setShowSignInForm(true)}
                onMouseLeave={() => setShowSignInForm(false)}
              >
                <Link href="/login" className="text-sm font-medium hover:text-blue-200">
                  Login / Register
                </Link>
                {showSignInForm && (
                  <div className="absolute right-0 mt-2 z-10 bg-white">
                    <SignInForm onSubmit={(email, password) => console.log(email, password)} />
                  </div>
                )}
              </div>
              <Link href="/cart" className="ml-4 text-sm font-medium hover:text-blue-200">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
