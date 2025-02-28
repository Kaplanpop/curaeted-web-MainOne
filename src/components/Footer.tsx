
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="flex flex-col items-center mb-10">
            <img 
              src="/lovable-uploads/32a591da-11d7-4261-9f86-14c23dc0bb12.png" 
              alt="Curaeted Logo" 
              className="w-full max-w-xs mb-4"
            />
            <p className="text-lg text-white font-roboto">
              Bringing the finest Iberico products to China
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-2 text-center mb-8">
            <p className="text-gray-300 font-roboto">
              Room 214 Level 2, Building 1, 155 Fengxiang Rd, Baoshan, Shanghai, PRC
            </p>
            <p className="text-gray-300 font-roboto">
              Email: <a href="mailto:jose.campon@curaetedchina.com" className="hover:text-white transition-colors">jose.campon@curaetedchina.com</a>
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-2 mb-10">
            <p className="text-gray-300 font-roboto">WeChat:</p>
            <div className="bg-white p-1">
              <img 
                src="/lovable-uploads/32a591da-11d7-4261-9f86-14c23dc0bb12.png" 
                alt="WeChat QR Code" 
                className="w-24 h-24"
              />
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400 mb-4 md:mb-0 font-roboto">
              © {currentYear} Curaeted. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors font-roboto">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors font-roboto">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
