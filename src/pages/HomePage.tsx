
import { useTranslation } from 'react-i18next';
import HomeSection from '@/components/home/HomeSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import WhereToFindUsSection from '@/components/home/WhereToFindUsSection';
import OnlyTheFinestSection from '@/components/home/OnlyTheFinestSection';
import WhyIbericoSection from '@/components/home/WhyIbericoSection';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';
import CompanyInfoSection from '@/components/home/CompanyInfoSection';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20">
      <HomeSection />
      <WhatWeDoSection />
      <WhereToFindUsSection />
      <OnlyTheFinestSection />
      <WhyIbericoSection />
      <AboutSection />
      <ContactSection />
      <CompanyInfoSection />
    </div>
  );
};

export default HomePage;
