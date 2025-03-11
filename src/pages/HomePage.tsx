
import HomeSection from "@/components/home/HomeSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import WhereToFindUsSection from "@/components/home/WhereToFindUsSection";
import OnlyTheFinestSection from "@/components/home/OnlyTheFinestSection";
import WhyIbericoSection from "@/components/home/WhyIbericoSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import CompanyInfoSection from "@/components/home/CompanyInfoSection";
import Footer from "@/components/Footer";
import ScrollSpacer from "@/components/home/ScrollSpacer";

const HomePage = () => {
  return (
    <main className="relative">
      {/* Fixed position sections with overlay effect */}
      <div className="fixed-sections">
        <HomeSection />
        <WhatWeDoSection />
        <WhereToFindUsSection />
        <OnlyTheFinestSection />
        <WhyIbericoSection />
        <AboutSection />
      </div>
      
      {/* Scrollable content starts after the fixed sections */}
      <ScrollSpacer />
      
      {/* Regular sections that follow normal document flow */}
      <div className="relative z-80">
        <ContactSection />
        <CompanyInfoSection />
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;
