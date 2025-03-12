
import { useTranslation } from 'react-i18next';

const CookiePolicy = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl">
      <h1 className="text-3xl font-poppins font-bold mb-8">{t('cookie.policyTitle')}</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">{t('cookie.whatAreCookies.title')}</h2>
          <p className="text-gray-700">
            {t('cookie.whatAreCookies.content')}
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">{t('cookie.howWeUse.title')}</h2>
          <p className="text-gray-700 mb-4">
            {t('cookie.howWeUse.intro')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><span className="font-medium">{t('cookie.howWeUse.essential')}:</span> {t('cookie.howWeUse.essentialDesc')}</li>
            <li><span className="font-medium">{t('cookie.howWeUse.preference')}:</span> {t('cookie.howWeUse.preferenceDesc')}</li>
            <li><span className="font-medium">{t('cookie.howWeUse.analytics')}:</span> {t('cookie.howWeUse.analyticsDesc')}</li>
            <li><span className="font-medium">{t('cookie.howWeUse.marketing')}:</span> {t('cookie.howWeUse.marketingDesc')}</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">{t('cookie.typesOfCookies.title')}</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-lg">{t('cookie.typesOfCookies.necessary.title')}</h3>
              <p className="text-gray-700">
                {t('cookie.typesOfCookies.necessary.content')}
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg">{t('cookie.typesOfCookies.performance.title')}</h3>
              <p className="text-gray-700">
                {t('cookie.typesOfCookies.performance.content')}
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg">{t('cookie.typesOfCookies.functionality.title')}</h3>
              <p className="text-gray-700">
                {t('cookie.typesOfCookies.functionality.content')}
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg">{t('cookie.typesOfCookies.targeting.title')}</h3>
              <p className="text-gray-700">
                {t('cookie.typesOfCookies.targeting.content')}
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">{t('cookie.managing.title')}</h2>
          <p className="text-gray-700">
            {t('cookie.managing.content')} <a href="https://www.allaboutcookies.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">{t('cookie.yourChoices.title')}</h2>
          <p className="text-gray-700">
            {t('cookie.yourChoices.content1')}
          </p>
          <p className="text-gray-700 mt-2">
            {t('cookie.yourChoices.content2')}
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">{t('cookie.contactUs.title')}</h2>
          <p className="text-gray-700">
            {t('cookie.contactUs.content')}
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
