
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '@/utils/intersectionObserver';

const WhatWeDoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(sectionRef, { animationClass: 'animate-fadeIn' });
  const { t } = useTranslation();

  return (
    <section id="whatWeDo" ref={sectionRef} className="py-20 opacity-0 relative">
      <div className="absolute inset-0 w-full h-full z-0">
        <img src="/lovable-uploads/55497852-ecf4-4ed5-8cd7-51aa1336d079.png" alt="Iberico meat inspection" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/70 z-1"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-poppins text-5xl md:text-6xl text-white font-light mb-4 opacity-0 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            {t('sections.whatWeDo.title')}
          </h2>
          
          <p className="font-roboto text-lg md:text-xl text-white max-w-2xl text-center mx-auto mb-16 opacity-0 animate-slideUp" style={{ animationDelay: '0.4s' }}
             dangerouslySetInnerHTML={{ __html: t('sections.whatWeDo.focusText') }}>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 stagger-container">
            <div className="flex items-start opacity-0 animate-slideInLeft stagger-item">
              <div className="flex-shrink-0 text-4xl font-bold mr-4 text-white">
                1
              </div>
              <p className="text-lg text-white font-roboto leading-relaxed mt-1 font-light"
                 dangerouslySetInnerHTML={{ __html: t('sections.whatWeDo.point1') }}>
              </p>
            </div>
            
            <div className="flex items-start opacity-0 animate-slideInRight stagger-item">
              <div className="flex-shrink-0 text-4xl font-bold mr-4 text-white">
                3
              </div>
              <p className="text-lg text-white font-roboto leading-relaxed mt-1 font-light"
                 dangerouslySetInnerHTML={{ __html: t('sections.whatWeDo.point3') }}>
              </p>
            </div>
            
            <div className="flex items-start opacity-0 animate-slideInLeft stagger-item">
              <div className="flex-shrink-0 text-4xl font-bold mr-4 text-white">
                2
              </div>
              <p className="text-lg text-white font-roboto leading-relaxed mt-1 font-light"
                 dangerouslySetInnerHTML={{ __html: t('sections.whatWeDo.point2') }}>
              </p>
            </div>
            
            <div className="flex items-start opacity-0 animate-slideInRight stagger-item">
              <div className="flex-shrink-0 text-4xl font-bold mr-4 text-white">
                4
              </div>
              <p className="text-lg text-white font-roboto leading-relaxed mt-1 font-light"
                 dangerouslySetInnerHTML={{ __html: t('sections.whatWeDo.point4') }}>
              </p>
            </div>
          </div>
          
          <p className="text-xl text-white font-roboto text-center font-light mt-16 opacity-0 animate-slideUp" style={{ animationDelay: '0.6s' }}
             dangerouslySetInnerHTML={{ __html: t('sections.whatWeDo.traceability') }}>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
