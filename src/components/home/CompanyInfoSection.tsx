
import { useTranslation } from 'react-i18next';
import Footer from "../Footer";

const CompanyInfoSection = () => {
  const { t, i18n } = useTranslation();
  
  // Use the Chinese company name when viewing in Chinese, otherwise use "Curæted"
  const companyName = i18n.language === 'cn' ? '醇雅特' : 'Curæted';
  
  // Use the Chinese address format when viewing in Chinese
  const address = i18n.language === 'cn' 
    ? "上海市宝山区丰翔路155号1幢2层214室"
    : "Room 214 Level 2, Building 1, 155 Fengxiang Rd, Baoshan, Shanghai, PRC";
  
  // Email label based on language
  const emailLabel = i18n.language === 'cn' ? "邮件" : "Email";
  
  return <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="w-full flex flex-col items-center">
            <img src="/lovable-uploads/4f850fd3-ddef-479a-a5ac-9171210e93f5.png" alt="Curæted Logo" className="w-40 h-40 mb-8" />
            
            <div className="space-y-4 text-center mb-8">
              <h2 className="text-3xl font-light text-white font-poppins">{companyName}</h2>
              <p className="text-white font-roboto">{t('sections.home.subtitle')}</p>
              <p className="text-white text-sm font-roboto">{address}</p>
              <p className="text-white text-sm font-roboto">{emailLabel}: info@curaetedchina.com</p>
            </div>
            
            <Footer />
          </div>
        </div>
      </div>
    </section>;
};
export default CompanyInfoSection;
