import { steps } from '@/app/Data';
import React from 'react';
//import Image from 'next/image';
import Image, { StaticImageData } from 'next/image';





interface ProcessStepProps {
  title: string;
  description: string;
  imageSrc: any;
}




const ProcessStep: React.FC<ProcessStepProps> = ({ title, description, imageSrc }) => (
  <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg">
    <div className="w-full h-48 relative mb-4">
      <Image 
        src={imageSrc} 
        alt={title} 
        layout="fill" 
        objectFit="contain"
      />
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600 text-center">{description}</p>
  </div>
);

const ProcessSteps = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-[#028BD4]  my-8">Cart delivery you can count on</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step, index) => (
        <ProcessStep key={index} {...step} />
      ))}
    </div>
  </div>
);

export default ProcessSteps;