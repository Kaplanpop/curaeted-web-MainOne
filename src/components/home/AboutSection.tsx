import { useRef } from 'react';
import { useIntersectionObserver } from '@/utils/intersectionObserver';
import { useTranslation } from 'react-i18next';
const AboutSection = () => {
  const {
    t
  } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(sectionRef, {
    animationClass: 'animate-fadeIn'
  });
  return <section id="about" ref={sectionRef} className="relative opacity-0 overflow-hidden pb-20">
      {/* Hero image with wave overlay */}
      <div className="relative w-full">
        <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
          <img src="/lovable-uploads/5f4ac115-5846-45e0-8c2f-712e1948718b.png" alt="Iberico pigs in cork oak forest" className="w-full h-full object-cover opacity-0 animate-zoomFadeIn" style={{
          animationDelay: '0.2s'
        }} />
          
          {/* Title overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="font-poppins text-5xl md:text-6xl text-white font-light mb-4 opacity-0 animate-slideUp" style={{
            animationDelay: '0.4s'
          }}>
              {t('sections.about.title')}
            </h2>
            <p className="font-roboto text-lg md:text-xl text-white max-w-2xl text-center mx-auto opacity-0 animate-slideUp" style={{
            animationDelay: '0.6s'
          }}>
              {t('sections.about.subtitle')}
            </p>
          </div>
        </div>
        
        {/* White wave overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Content section */}
      <div className="bg-white pt-8 pb-40 px-4 md:px-8 lg:px-16 text-center">
        <div className="max-w-6xl mx-auto">
          <p style={{
          animationDelay: '0.8s'
        }} className="text-base text-gray-800 font-roboto font-light text-center mb-16 mx-auto max-w-5xl opacity-0 animate-slideUp py-0 md:text-lg my-0">
            {t('sections.about.content')}
          </p>
            
          <div className="space-y-8 stagger-container mb-10">
            <div className="opacity-0 animate-slideInLeft stagger-item">
              <h3 className="text-xl md:text-2xl font-medium mb-2 uppercase">FULLY TRACEABLE PRODUCTS</h3>
              <p className="text-base md:text-lg text-gray-700 font-light">From breeding, through farming and to table.</p>
            </div>
            
            <div className="opacity-0 animate-slideUp stagger-item">
              <h3 className="text-xl md:text-2xl font-medium mb-2 uppercase">PERSONALISED & EXCLUSIVE</h3>
              <p className="text-base md:text-lg text-gray-700 font-light">Airfreight Door-to-Door in less than 15 days</p>
            </div>
            
            <div className="opacity-0 animate-slideInRight stagger-item">
              <h3 className="text-xl md:text-2xl font-medium mb-2 uppercase">MORE VALUE. MORE SUSTAINABLE</h3>
              <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
                We aim to offer the best and finest products at competitive pricing by delivering directly from producers, while enabling farmers to earn more value and continue producing the best, in the best, traditional way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;