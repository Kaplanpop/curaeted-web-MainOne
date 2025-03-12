
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const CookieDisclaimer = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for a session identifier instead of a permanent cookie preference
    const sessionCookieAcknowledged = sessionStorage.getItem('cookiesAcknowledged');
    if (!sessionCookieAcknowledged) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Store acknowledgment in sessionStorage instead of localStorage
    sessionStorage.setItem('cookiesAcknowledged', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    // Store acknowledgment in sessionStorage instead of localStorage
    sessionStorage.setItem('cookiesAcknowledged', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-center sm:text-left">
          <h4 className="font-bold mb-1">{t('cookie.title')}</h4>
          <p>{t('cookie.message')}</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="text-blue-500 border-white hover:bg-white hover:text-gray-900"
            onClick={handleReject}
          >
            {t('cookie.reject')}
          </Button>
          <Button
            variant="outline"
            className="text-blue-500 border-white hover:bg-white hover:text-gray-900"
            onClick={handleAccept}
          >
            {t('cookie.accept')}
          </Button>
          <Button
            variant="link"
            className="text-blue-500 hover:text-gray-200"
            asChild
          >
            <Link to="/cookie-policy">
              {t('cookie.learnMore')}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieDisclaimer;
