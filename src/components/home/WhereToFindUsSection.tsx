
import { useRef } from 'react';
import { useIntersectionObserver } from '@/utils/intersectionObserver';

const WhereToFindUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(sectionRef);

  return (
    <section id="whereToFindUs" ref={sectionRef} className="py-20 opacity-0 relative">
      <div className="absolute inset-0 w-full h-full z-0">
        <img src="/lovable-uploads/f6d54519-c7a2-444e-b953-798eb1ef0a19.png" alt="Delicious Iberico dish" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/60 z-1"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins text-5xl md:text-6xl text-white font-light mb-4">
            Where to find us
          </h2>
          
          <p className="font-roboto text-lg md:text-xl text-white max-w-2xl text-center mx-auto mb-16">
            Find us on these platforms
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 mx-auto max-w-2xl">
            <div className="flex flex-col items-center">
              <h3 className="font-poppins font-medium mb-2 text-white text-lg">Red Note (小红书)</h3>
              <div className="w-32 h-32 flex items-center justify-center">
                <img src="/lovable-uploads/171db970-3a20-4178-bf65-09e4e36e3a1f.png" alt="Xiaohongshu (Red Note) Logo" className="w-24 h-24 object-contain" />
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <h3 className="font-poppins font-medium mb-2 text-white text-lg text-center">WeChat (微信)</h3>
              <div className="w-32 h-32 flex items-center justify-center">
                <img src="/lovable-uploads/efd9fd8c-759f-4bac-b403-ebee03fe86b8.png" alt="WeChat Logo" className="w-24 h-24 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereToFindUsSection;
