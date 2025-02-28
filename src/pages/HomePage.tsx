
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from '@/components/ui/use-toast';

const HomePage = () => {
  const { t } = useTranslation();
  
  // Refs for each section
  const homeRef = useRef<HTMLDivElement>(null);
  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const whereToFindUsRef = useRef<HTMLDivElement>(null);
  const onlyTheFinestRef = useRef<HTMLDivElement>(null);
  const whyIbericoRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      toast({
        title: "Success",
        description: t('sections.contact.thankyou'),
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        purpose: '',
        message: '',
      });
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    }, 500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [
      homeRef.current,
      whatWeDoRef.current,
      whereToFindUsRef.current,
      onlyTheFinestRef.current,
      whyIbericoRef.current,
      aboutRef.current,
      contactRef.current,
    ];

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Home Section - Updated with black background and new design */}
      <section 
        id="home"
        ref={homeRef}
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden opacity-0 bg-black text-white"
      >
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
          <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-16 tracking-wide">
            HOME
          </h1>
          
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/5d02e8d4-28f1-405d-9732-61ea1bd8acbd.png" 
              alt="Curaeted Logo" 
              className="w-full max-w-xl mb-8"
            />
            
            <p className="text-xl md:text-2xl text-white mb-8 font-roboto">
              Bringing the finest <span className="underline decoration-2 underline-offset-4">Iberico</span> products to China
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section 
        id="whatWeDo"
        ref={whatWeDoRef}
        className="py-20 bg-white opacity-0"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-12 text-center text-black">
              {t('sections.whatWeDo.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="img-wrapper overflow-hidden rounded-lg aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3" 
                  alt="Iberico in countryside" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-gray-700 font-roboto mb-8 leading-relaxed">
                  {t('sections.whatWeDo.content')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where To Find Us Section */}
      <section 
        id="whereToFindUs"
        ref={whereToFindUsRef}
        className="py-20 bg-gray-50 opacity-0"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-12 text-center text-black">
              {t('sections.whereToFindUs.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <p className="text-lg text-gray-700 font-roboto mb-8 leading-relaxed">
                  {t('sections.whereToFindUs.content')}
                </p>
              </div>
              <div className="img-wrapper overflow-hidden rounded-lg aspect-square order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1438565434616-3ef039228b15?ixlib=rb-4.0.3" 
                  alt="Quality Iberico" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Only The Finest Section */}
      <section 
        id="onlyTheFinest"
        ref={onlyTheFinestRef}
        className="py-20 bg-white opacity-0"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-12 text-center text-black">
              {t('sections.onlyTheFinest.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="img-wrapper overflow-hidden rounded-lg aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-4.0.3" 
                  alt="Premium Iberico" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-gray-700 font-roboto mb-8 leading-relaxed">
                  {t('sections.onlyTheFinest.content')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Iberico Section */}
      <section 
        id="whyIberico"
        ref={whyIbericoRef}
        className="py-20 bg-gray-50 opacity-0"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-12 text-center text-black">
              {t('sections.whyIberico.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <p className="text-lg text-gray-700 font-roboto mb-8 leading-relaxed">
                  {t('sections.whyIberico.content')}
                </p>
              </div>
              <div className="img-wrapper overflow-hidden rounded-lg aspect-square order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3" 
                  alt="Iberico in countryside" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about"
        ref={aboutRef}
        className="py-20 bg-white opacity-0"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-12 text-center text-black">
              {t('sections.about.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="img-wrapper overflow-hidden rounded-lg aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3" 
                  alt="About Us" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-gray-700 font-roboto mb-8 leading-relaxed">
                  {t('sections.about.content')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact"
        ref={contactRef}
        className="py-20 bg-gray-50 opacity-0"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-12 text-center text-black">
              {t('sections.contact.title')}
            </h2>
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-6">
                <label htmlFor="name" className="block font-roboto font-medium mb-2 text-gray-900">
                  {t('sections.contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block font-roboto font-medium mb-2 text-gray-900">
                  {t('sections.contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="purpose" className="block font-roboto font-medium mb-2 text-gray-900">
                  {t('sections.contact.purpose')}
                </label>
                <select
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors"
                >
                  <option value="" disabled>Select purpose</option>
                  <option value="general">General Inquiry</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="retail">Retail Purchase</option>
                  <option value="collaboration">Business Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block font-roboto font-medium mb-2 text-gray-900">
                  {t('sections.contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors resize-none"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={formSubmitted}
                  className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  {formSubmitted ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    t('sections.contact.submit')
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
