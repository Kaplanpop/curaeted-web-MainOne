
import { useRef } from 'react';
import { useIntersectionObserver } from '@/utils/intersectionObserver';

const HomeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(sectionRef);

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden opacity-0">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          src="https://curaetedwebsite.oss-cn-hongkong.aliyuncs.com/herd-of-iberian-pigs-on-spanish-farmland-dehesa-2025-03-03-13-44-39-utc.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/50 z-1"></div>
      
      <div className="relative z-10 text-white text-center px-4 max-w-4xl">
        <h2 className="font-poppins text-5xl md:text-6xl text-white font-light mb-4">Curæted</h2>
        <p className="font-roboto text-lg md:text-xl text-white max-w-2xl text-center mx-auto">
          Bringing the finest Iberico products to China
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
