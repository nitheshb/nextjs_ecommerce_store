import { stores } from '@/app/Data'
import Head from 'next/head'
import Image from 'next/image'

import banner from '../components/img/banner.png';

export default function Banner() {
  return (
    <div className="">
      <Head>
        <title>Store Selector</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto p-4">
        <div className="  p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold text-[#028BD4]">Choose your store in <span className="text-[#ED9001] font-semibold">Hyderabad</span></h1>
            <button className="text-[#0070AC] text-sm border border-[#0070AC] rounded-md px-2 py-1">
              View all
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {stores.map((store, index) => (
              <div key={index} className="bg-[#ffff]  shadow-md p-2 rounded-md text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <Image 
                    src={store.img}
                    alt={store.name}
                    width={100}
                    height={48}
                    objectFit="contain"
                  />
                </div>
                <div className="text-xs text-gray-500">Delivery in 3 days</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 bg-[#FD9900] rounded-lg  px-12 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Image 
              src={banner}
              alt="Encart experience"
              width={140}
              height={100}
              objectFit="cover"
            />
          </div>

          <div className="ml-0 md:ml-4 text-center md:text-left">
            <h2 className="font-semibold text-[#0070AC]" style={{ fontSize: '36px' }} >Get the full Encart experience</h2>
            <p className="text-[#FFFFFF] " style={{ fontSize: '23px' }}> First delivery is free</p>
          </div>
          
          <button className="mt-4 md:mt-0 bg-blue-500 text-[#FFFFFF] rounded-md text-sm w-[158px] h-[56px]">
            Claim Now
          </button>
        </div>
      </main>
    </div>
  )
}
