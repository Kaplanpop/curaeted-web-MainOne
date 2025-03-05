
import { useRef } from 'react';
import { useIntersectionObserver } from '@/utils/intersectionObserver';

const OnlyTheFinestSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(sectionRef);

  return (
    <section id="onlyTheFinest" ref={sectionRef} className="relative h-screen min-h-[600px] opacity-0 overflow-hidden">
      <div className="grid grid-cols-3 h-full">
        <div className="relative h-full">
          <img 
            src="/lovable-uploads/82cf49e0-7a62-4d87-8af1-371e201cb3f0.png" 
            alt="Iberico ham leg" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="relative h-full">
          <img 
            src="/lovable-uploads/d08bbc66-5279-450c-aa32-1ff8812b61b8.png" 
            alt="Fresh Iberico meat cuts" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative h-full">
          <img 
            src="/lovable-uploads/da2e7638-6b14-4842-a14c-d5d7965a0626.png" 
            alt="Extra virgin olive oil" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
        <h2 className="font-poppins text-6xl mb-6 text-white font-light md:text-7xl">
          Only the finest
        </h2>
        <div className="max-w-2xl text-center">
          <p className="text-xl text-white font-roboto text-center font-light mt-2">
            100% Iberico, 100% acorn fed<br />
            Ecologically produced extra virgin olive oil
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnlyTheFinestSection;
