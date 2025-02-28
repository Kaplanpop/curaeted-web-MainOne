
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center">
        <h1 className="font-poppins text-7xl font-bold text-black mb-6">404</h1>
        <h2 className="font-poppins text-2xl md:text-3xl font-medium mb-4 text-black">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="btn-primary"
        >
          {t('menu.home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
