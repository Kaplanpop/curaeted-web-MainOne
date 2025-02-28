
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-black text-white text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-400 text-sm">
          © {currentYear} Curæted. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
