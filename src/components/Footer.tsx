
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="text-gray-400 text-sm text-center">
      © {currentYear} Curæted. All rights reserved.
    </div>
  );
};

export default Footer;
