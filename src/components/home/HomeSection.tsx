
import { useRef, useState } from 'react';
import { useIntersectionObserver } from '@/utils/intersectionObserver';
import { useTranslation } from 'react-i18next';

const HomeSection = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [videoError, setVideoError] = useState(false);
  useIntersectionObserver(sectionRef, { animationClass: 'animate-zoomFadeIn' });

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Video failed to load", e);
    setVideoError(true);
  };

  // Use the Chinese company name when viewing in Chinese, otherwise use "Curæted"
  const companyName = i18n.language === 'cn' ? '醇雅特' : 'Curæted';

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden opacity-0">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {!videoError ? (
          <video
            src="https://curaetedwebsite.oss-cn-hongkong.aliyuncs.com/herd-of-iberian-pigs-on-spanish-farmland-dehesa-2025-03-03-13-44-39-utc.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={handleVideoError}
            poster="/lovable-uploads/e44ecf05-2baa-4687-abdb-d2246b5aa64a.png"
          />
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/lovable-uploads/e44ecf05-2baa-4687-abdb-d2246b5aa64a.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
          </div>
        )}
      </div>
      
      <div className="absolute inset-0 bg-black/50 z-1"></div>
      
      <div className="relative z-10 text-white text-center px-4 max-w-4xl">
        <h2 className="font-poppins text-5xl md:text-6xl text-white font-light mb-4 opacity-0 animate-slideUp" style={{ animationDelay: '0.3s' }}>{companyName}</h2>
        <p className="font-roboto text-lg md:text-xl text-white max-w-2xl text-center mx-auto opacity-0 animate-slideUp" style={{ animationDelay: '0.5s' }}>
          {t('sections.home.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
