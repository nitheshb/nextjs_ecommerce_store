import Image, { StaticImageData } from 'next/image';
import bg1 from '../components/img/bg1.png';
import { stats } from '@/app/Data';

interface StatItemProps {
  icon: StaticImageData;
  text: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, text }) => (
  <div className="bg-blue-500 rounded-2xl p-6 flex flex-col items-center justify-center text-white">
    <div className="text-4xl mb-2">
      <Image src={icon} alt={text} width={50} height={50} />
    </div>
    <div className="text-xl font-semibold text-center">{text}</div>
  </div>
);

const DeliverySceneWithStats: React.FC = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
        <Image
          src={bg1}
          alt="Delivery person handing package to customer"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-2xl"></div>
        <div className="absolute bottom-0 right-40 mb-8 md:mb-12 text-center">
          <div>
            <h2 className="font-bold text-white text-4xl">
              The largest online <br /> marketplace in USA
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <StatItem key={index} icon={stat.icon} text={stat.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySceneWithStats;
