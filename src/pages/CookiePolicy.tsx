
import { useTranslation } from 'react-i18next';

const CookiePolicy = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl">
      <h1 className="text-3xl font-poppins font-bold mb-8">{t('cookie.title')}</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">What Are Cookies</h2>
          <p className="text-gray-700">
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
            They are widely used to make websites work more efficiently and provide information to the website owners.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">How We Use Cookies</h2>
          <p className="text-gray-700 mb-4">
            We use cookies for various purposes including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><span className="font-medium">Essential cookies:</span> These are necessary for the website to function properly.</li>
            <li><span className="font-medium">Preference cookies:</span> These allow us to remember choices you make and provide enhanced features.</li>
            <li><span className="font-medium">Analytics cookies:</span> These help us understand how visitors interact with our website.</li>
            <li><span className="font-medium">Marketing cookies:</span> These are used to track visitors across websites to display relevant advertisements.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Types of Cookies We Use</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-lg">Strictly Necessary Cookies</h3>
              <p className="text-gray-700">
                These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg">Performance Cookies</h3>
              <p className="text-gray-700">
                These cookies collect information about how you use our website, for instance which pages you go to most often.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg">Functionality Cookies</h3>
              <p className="text-gray-700">
                These cookies allow the website to remember choices you make and provide enhanced features.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg">Targeting/Advertising Cookies</h3>
              <p className="text-gray-700">
                These cookies are used to deliver advertisements more relevant to you and your interests.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Managing Cookies</h2>
          <p className="text-gray-700">
            Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Your Choices</h2>
          <p className="text-gray-700">
            If you prefer, you can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. As each browser is different, look at your browser's Help Menu to learn the correct way to modify your cookies.
          </p>
          <p className="text-gray-700 mt-2">
            If you disable cookies, some features that make your site experience more efficient may not function properly.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or suggestions about our Cookie Policy, do not hesitate to contact us through our contact page.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
