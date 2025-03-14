
import { useRef } from 'react';
import { useIntersectionObserver } from '@/utils/intersectionObserver';
import { useTranslation } from 'react-i18next';

const WhereToFindUsSection = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(sectionRef, { animationClass: 'animate-zoomFadeIn' });
  
  // Determine if current language is Chinese
  const isChinese = i18n.language === 'cn';
  
  return (
    <section id="whereToFindUs" ref={sectionRef} className="py-20 opacity-0 relative h-screen min-h-[600px]">
      <div className="absolute inset-0 w-full h-full z-0">
        <img src="/lovable-uploads/f6d54519-c7a2-444e-b953-798eb1ef0a19.png" alt="Delicious Iberico dish" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/70 z-1"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins text-5xl md:text-6xl text-white font-light mb-12 opacity-0 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            {t('sections.whereToFindUs.title')}
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 mx-auto max-w-2xl mt-12">
            <div className="flex flex-col items-center opacity-0 animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-poppins font-medium mb-2 text-white text-lg">
                {isChinese ? "小红书" : "Red Note (小红书)"}
              </h3>
              <div className="w-32 h-32 flex items-center justify-center">
                <img src="/lovable-uploads/171db970-3a20-4178-bf65-09e4e36e3a1f.png" alt="Xiaohongshu (Red Note) Logo" className="w-24 h-24 object-contain" />
              </div>
              {/* QR Code */}
              <div className="mt-4 w-24 h-24 bg-white rounded-lg p-1">
                <img 
                  src="/lovable-uploads/5a010e6b-1221-4855-97bf-1ce040575ebd.png" 
                  alt="Xiaohongshu QR Code" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <div className="flex flex-col items-center opacity-0 animate-slideInRight" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-poppins font-medium mb-2 text-white text-lg text-center">
                {isChinese ? "微信" : "WeChat (微信)"}
              </h3>
              <div className="w-32 h-32 flex items-center justify-center">
                <img src="/lovable-uploads/efd9fd8c-759f-4bac-b403-ebee03fe86b8.png" alt="WeChat Logo" className="w-24 h-24 object-contain" />
              </div>
              {/* Coming Soon label */}
              <div className="mt-4 w-24 h-24 flex items-center justify-center">
                <div className="bg-gray-800/80 text-white font-medium py-3 px-4 rounded-lg border border-gray-500">
                  {isChinese ? "快来了" : "Coming Soon"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereToFindUsSection;
