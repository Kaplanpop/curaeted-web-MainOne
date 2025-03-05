
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="text-white text-sm text-center font-roboto">
      © {currentYear} Curæted. All rights reserved.
    </div>
  );
};

export default Footer;
