
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import HomeSection from '@/components/home/HomeSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import WhereToFindUsSection from '@/components/home/WhereToFindUsSection';
import OnlyTheFinestSection from '@/components/home/OnlyTheFinestSection';
import WhyIbericoSection from '@/components/home/WhyIbericoSection';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';
import CompanyInfoSection from '@/components/home/CompanyInfoSection';
import { useIntersectionObserver } from '@/utils/intersectionObserver';

const HomePage = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen">
      <div className="section-container">
        <HomeSection />
        <WhatWeDoSection />
        <WhereToFindUsSection />
        <OnlyTheFinestSection />
        <WhyIbericoSection />
        <AboutSection />
      </div>
      
      {/* Contact and footer sections remain normally positioned */}
      <ContactSection />
      <CompanyInfoSection />
    </div>
  );
};

export default HomePage;
