
import { useRef } from 'react';
import { useIntersectionObserver } from '@/utils/intersectionObserver';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useIntersectionObserver(sectionRef, {
    animationClass: 'animate-fadeIn'
  });
  
  return (
    <section id="about" ref={sectionRef} className="relative opacity-0 h-screen">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="w-full h-full overflow-hidden">
          <img 
            src="/lovable-uploads/5f4ac115-5846-45e0-8c2f-712e1948718b.png" 
            alt="Iberico pigs in cork oak forest" 
            className="w-full h-full object-cover opacity-0 animate-zoomFadeIn" 
            style={{ animationDelay: '0.2s' }} 
          />
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>
      
      {/* Content container - split into two parts */}
      <div className="absolute inset-0 flex flex-col">
        {/* Top section - title area */}
        <div className="w-full pt-16 md:pt-24 flex-none">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-poppins text-5xl md:text-6xl text-white font-light mb-4 opacity-0 animate-slideUp" 
                style={{ animationDelay: '0.4s' }}>
              {t('sections.about.title')}
            </h2>
            <p className="font-roboto text-lg md:text-xl text-white opacity-0 animate-slideUp" 
              style={{ animationDelay: '0.6s' }}>
              {t('sections.about.subtitle')}
            </p>
          </div>
        </div>
        
        {/* Bottom section - content area with white background */}
        <div className="w-full flex-1 flex items-end">
          <div className="w-full px-4 md:px-8 lg:px-16 pb-8">
            <div className="w-full max-w-6xl mx-auto">
              <div className="bg-white/95 text-black p-8 md:p-12 rounded-lg backdrop-blur-sm shadow-lg">
                <p className="text-base md:text-lg font-roboto font-light text-center mb-16 mx-auto max-w-5xl opacity-0 animate-slideUp" 
                  style={{ animationDelay: '0.8s' }}>
                  {t('sections.about.content')}
                </p>
                
                {/* Three advantages section */}
                <div className="grid gap-16 mb-12 stagger-container">
                  <div className="opacity-0 animate-slideInLeft stagger-item">
                    <h3 className="text-xl md:text-2xl font-medium mb-4 uppercase">{t('sections.about.advantage1.title')}</h3>
                    <p className="text-base md:text-lg font-light">{t('sections.about.advantage1.content')}</p>
                  </div>
                  
                  <div className="opacity-0 animate-slideUp stagger-item">
                    <h3 className="text-xl md:text-2xl font-medium mb-4 uppercase">{t('sections.about.advantage2.title')}</h3>
                    <p className="text-base md:text-lg font-light">{t('sections.about.advantage2.content')}</p>
                  </div>
                  
                  <div className="opacity-0 animate-slideInRight stagger-item">
                    <h3 className="text-xl md:text-2xl font-medium mb-4 uppercase">{t('sections.about.advantage3.title')}</h3>
                    <p className="text-base md:text-lg font-light leading-relaxed">
                      {t('sections.about.advantage3.content')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
