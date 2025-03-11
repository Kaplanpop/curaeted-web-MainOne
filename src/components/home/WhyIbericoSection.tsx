
import { useRef } from 'react';
import { useIntersectionObserver } from '@/utils/intersectionObserver';

const WhyIbericoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(sectionRef, { 
    animationClass: 'animate-zoomFadeIn',
    threshold: 0.2,
    rootMargin: '-50px'
  });

  return (
    <section id="whyIberico" ref={sectionRef} className="opacity-0 relative">
      <div className="grid grid-cols-3 h-screen min-h-[600px]">
        <div className="relative h-full opacity-0 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
          <img 
            src="/lovable-uploads/670d0ca3-569b-4c1a-9451-5b16bb7bd800.png" 
            alt="Iberico pork in sauce" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative h-full opacity-0 animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <img 
            src="/lovable-uploads/26495c24-eb05-4c5c-b49d-b5fcc62fe9d4.png" 
            alt="Cooked Iberico pork with vegetables" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative h-full opacity-0 animate-slideInRight" style={{ animationDelay: '0.2s' }}>
          <img 
            src="/lovable-uploads/58b0f786-0bc5-4c88-98f7-a839faf8fc98.png" 
            alt="Sliced Iberico pork with green onions" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
        <h2 className="font-poppins text-5xl md:text-6xl text-white font-light mb-4 opacity-0 animate-scaleUp" style={{ animationDelay: '0.6s' }}>
          Why Iberico
        </h2>
        
        <p className="font-roboto text-lg md:text-xl text-white max-w-2xl text-center mx-auto mb-8 opacity-0 animate-scaleUp" style={{ animationDelay: '0.8s' }}>
          Excellence in every bite
        </p>
        
        <div className="max-w-5xl mx-auto px-8">
          <p className="text-lg text-white font-roboto leading-relaxed font-light mb-8 opacity-0 animate-slideUp" style={{ animationDelay: '1s' }}>
            At Curæted, exceptional taste is more than a promise—it's a heritage. Our Iberico offerings celebrate centuries of culinary artistry, from our meticulously cured pork that embodies passion and tradition, to our organic extra virgin olive oil that elevates every dish with its vibrant, natural flavor. Each product is a testament to artisanal craftsmanship, sustainable practices, and a relentless pursuit of excellence. Discover the story of Iberico: where time-honored quality meets innovative spirit, and every bite tells a tale of authenticity and refinement.
          </p>
          
          <p className="text-lg text-white font-roboto leading-relaxed font-light opacity-0 animate-slideUp" style={{ animationDelay: '1.2s' }}>
            For our Chinese audiences, we understand that a deep respect for tradition and quality is at the heart of every culinary experience. Our products not only offer superior taste but also align with a holistic approach to wellness and cultural heritage. By blending centuries-old techniques with modern sustainability, Curæted delivers ingredients that enhance both time-honored recipes and contemporary dining, inviting you to savor a luxurious journey that honors your rich gastronomic legacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyIbericoSection;
