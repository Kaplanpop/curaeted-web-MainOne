
import { useRef } from 'react';
import { useIntersectionObserver } from '@/utils/intersectionObserver';

const HomeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(sectionRef);

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden opacity-0">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <iframe src="https://drive.google.com/file/d/1nIziSy6V6cLaFp7ytUFY9lcZLbCzMfNH/preview?autoplay=1&mute=1&loop=1" className="w-full h-full object-cover" allow="autoplay; fullscreen; loop" allowFullScreen title="Iberico pigs video"></iframe>
      </div>
      
      <div className="absolute inset-0 bg-black/50 z-1"></div>
      
      <div className="relative z-10 text-white text-center px-4 max-w-4xl">
        <h1 className="font-poppins text-7xl mb-4 font-light">Curæted</h1>
        <p className="text-2xl font-light mb-8">Bringing the finest Iberico products to China</p>
      </div>
    </section>
  );
};

export default HomeSection;
