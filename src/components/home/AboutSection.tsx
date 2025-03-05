
import { useRef } from 'react';
import { useIntersectionObserver } from '@/utils/intersectionObserver';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="relative opacity-0 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/lovable-uploads/d3af88a4-5ccc-4216-908f-7b24fa94e749.png" 
          alt="Iberico pigs in cork oak forest" 
          className="w-full h-full object-cover object-center" 
        />
      </div>
      
      <div className="relative z-10 pt-32 pb-10 md:pt-40 md:pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-poppins text-6xl mb-2 text-white font-light text-center">
            About
          </h2>
          
          <p className="text-xl text-white font-roboto font-light text-center mb-16 mx-auto max-w-5xl">
            Curæted aims to reconnect people with the best farming, and help artisanal farmers to thrive.
          </p>
        </div>
      </div>
      
      {/* White curved section */}
      <div className="relative z-10">
        <div className="h-16 bg-white rounded-t-[50%] -mt-1"></div>
        
        <div className="bg-white pt-8 pb-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <p className="text-lg text-gray-800 font-roboto leading-relaxed mb-12">
              With roots in Extremadura, a traditional faming region of Spain, with some of the finest Spanish agricultural products, from Iberico pigs, extra virgin olive oil, cherries or honey, Curæted thought that these farmers could actually thrive if only it was easier for them to access markets and spread the word of their excellence. This was the perfect match for the growing craving of safer, better, healthier, organic and premium food for Chinese ever more sophisticated consumers, who want and won't settle if not for the best.
            </p>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-medium mb-2 uppercase">FULLY TRACEABLE PRODUCTS</h3>
                <p className="text-lg text-gray-700 font-light">From breeding, through farming and to table.</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-medium mb-2 uppercase">PERSONALISED & EXCLUSIVE</h3>
                <p className="text-lg text-gray-700 font-light">Airfreight Door-to-Door in less than 15 days</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-medium mb-2 uppercase">MORE VALUE. MORE SUSTAINABLE</h3>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  We aim to offer the best and finest products at competitive pricing by delivering directly from producers, while enabling farmers to earn more value and continue producing the best, in the best, traditional way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
