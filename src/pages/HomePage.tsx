
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
    <main>
      <HomeSection />
      <WhatWeDoSection />
      <WhereToFindUsSection />
      <OnlyTheFinestSection />
      <WhyIbericoSection />
      <AboutSection />
      <ContactSection />
      <CompanyInfoSection />
      <Footer />
      {/* Add spacer to enable scrolling through fixed sections */}
      <ScrollSpacer />
    </main>
  );
};

export default HomePage;
