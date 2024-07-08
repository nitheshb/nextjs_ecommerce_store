import { featureslist } from '@/app/Data';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface FeatureItemProps {
  icon: StaticImageData;
  title: string;
  description: string;
  hasBorder: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, hasBorder }) => (
  <div className={`flex items-center space-x-4 p-4 ${hasBorder ? 'border-l-4 border-gray-300' : ''} h-16`}>
    <div className="text-2xl">
      <Image src={icon} alt={title} width={40} height={40} />
    </div>
    <div>
      <h3 className="font-semibold text-gray-700">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

const FeatureList: React.FC = () => {
  return (
    <div className="py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featureslist.map((feature, index) => (
            <React.Fragment key={index}>
              <FeatureItem {...feature} hasBorder={index !== 0} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
