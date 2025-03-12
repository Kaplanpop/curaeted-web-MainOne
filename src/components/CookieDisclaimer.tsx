
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

const CookieDisclaimer = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          {t('cookie.message')}
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-gray-900"
            onClick={handleAccept}
          >
            {t('cookie.accept')}
          </Button>
          <Button
            variant="link"
            className="text-white hover:text-gray-200"
            onClick={() => window.open('/privacy-policy', '_blank')}
          >
            {t('cookie.learnMore')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieDisclaimer;
