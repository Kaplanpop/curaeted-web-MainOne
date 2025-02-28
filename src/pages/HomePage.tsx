import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from '@/components/ui/use-toast';
const HomePage = () => {
  const {
    t
  } = useTranslation();

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
    contact: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      toast({
        title: "Success",
        description: t('sections.contact.thankyou')
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        contact: '',
        message: ''
      });

      // Reset submission status after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    }, 500);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = [homeRef.current, whatWeDoRef.current, whereToFindUsRef.current, onlyTheFinestRef.current, whyIbericoRef.current, aboutRef.current, contactRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });
    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  return <div className="min-h-screen pt-20">
      {/* Home Section - Updated with black background and new design - Headings removed */}
      <section id="home" ref={homeRef} className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden opacity-0 bg-black text-white">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <img src="/lovable-uploads/5d02e8d4-28f1-405d-9732-61ea1bd8acbd.png" alt="Curaeted Logo" className="w-full max-w-xl mb-8" />
            
            
          </div>
        </div>
      </section>

      {/* What We Do Section - Updated with new black background design and numbered points */}
      <section id="whatWeDo" ref={whatWeDoRef} className="py-20 bg-black text-white opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-poppins text-5xl mb-16 text-white font-light md:text-5xl">
              What we do
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {/* Point 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gray-700 rounded-md flex items-center justify-center text-xl font-bold mr-4">
                  1
                </div>
                <p className="text-lg text-white font-roboto leading-relaxed mt-1 font-light">
                  A new young purveyor of the very finest <span className="">Iberico</span> products to China
                </p>
              </div>
              
              {/* Point 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gray-700 rounded-md flex items-center justify-center text-xl font-bold mr-4">
                  3
                </div>
                <p className="text-lg text-white font-roboto leading-relaxed mt-1 font-light">
                  We work only with authorized exporters to China and only import the top products: 100% Iberico, 100% acorn fed
                </p>
              </div>
              
              {/* Point 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gray-700 rounded-md flex items-center justify-center text-xl font-bold mr-4">
                  2
                </div>
                <p className="text-lg text-white font-roboto leading-relaxed mt-1 font-light">
                  We only work with the very finest: <span className="">Iberico</span> pork 100% acorn fed and organic, artisan-made extra virgin olive oil
                </p>
              </div>
              
              {/* Point 4 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gray-700 rounded-md flex items-center justify-center text-xl font-bold mr-4">
                  4
                </div>
                <p className="text-lg text-white font-roboto leading-relaxed mt-1 font-light">
                  We serve direct farm-to-table, via Red Note & WeChat, to discerning Chinese. We deliver fresh products, refrigerated and not frozen, via airfreight, in less than 2 weeks, ensuring freshness and maximum quality, while ensuring best pricing delivering directly from producers
                </p>
              </div>
            </div>
            
            {/* Focus statement */}
            <div className="bg-gray-700 rounded-md p-4 mt-10 mb-5">
              <p className="text-lg text-white font-roboto text-center">
                We focus on <span className="underline decoration-2 underline-offset-2">Iberico</span> Pork (cold cuts and fresh meat) and Extra Virgin Olive Oil
              </p>
            </div>
            
            {/* Traceability statement */}
            <div className="bg-white rounded-md p-5">
              <p className="text-lg text-black font-roboto text-center">
                We offer full <span className="underline decoration-2 underline-offset-2">traceability</span> for each and every product, so you know where it comes from, how it is raised or produced and how it reaches your table
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where To Find Us Section - Updated with Red Note and WeChat */}
      <section id="whereToFindUs" ref={whereToFindUsRef} className="py-20 bg-white opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-poppins text-5xl md:text-6xl font-bold mb-16 text-black">
              Where to find us
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Red Note */}
              <div className="flex flex-col">
                <h3 className="font-poppins text-2xl font-medium mb-8">Red Note</h3>
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3" alt="Red Note App" className="max-h-full object-contain" onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                  target.alt = "Red Note Placeholder";
                }} />
                </div>
              </div>
              
              {/* WeChat */}
              <div className="flex flex-col">
                <h3 className="font-poppins text-2xl font-medium mb-8">WeChat</h3>
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3" alt="WeChat App" className="max-h-full object-contain" onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                  target.alt = "WeChat Placeholder";
                }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Only The Finest Section - Updated with black background */}
      <section id="onlyTheFinest" ref={onlyTheFinestRef} className="py-20 bg-black text-white opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-poppins text-5xl md:text-6xl font-bold mb-16 text-white">
              Only the finest
            </h2>
            
            <div className="mb-16">
              <p className="text-xl text-white font-roboto leading-relaxed">
                Stock photos of finest <span className="underline decoration-2 underline-offset-2">iberico</span> pork products and best organic extra virgin olive oil (all unbranded)
              </p>
            </div>
            
            {/* Image Grid for Product Photos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Image 1 */}
              <div className="aspect-square overflow-hidden bg-gray-800 rounded-md">
                <img src="/lovable-uploads/b06d1d04-0305-40e1-a47e-47d2d4697357.png" alt="Iberico Product 1" className="w-full h-full object-cover opacity-0" onLoad={e => {
                const target = e.target as HTMLImageElement;
                target.classList.remove('opacity-0');
                target.classList.add('opacity-100', 'transition-opacity', 'duration-500');
              }} />
              </div>
              
              {/* Image 2 */}
              <div className="aspect-square overflow-hidden bg-gray-800 rounded-md">
                <img src="https://images.unsplash.com/photo-1602481182506-603f23ad3907?ixlib=rb-4.0.3" alt="Iberico Product 2" className="w-full h-full object-cover opacity-0" onLoad={e => {
                const target = e.target as HTMLImageElement;
                target.classList.remove('opacity-0');
                target.classList.add('opacity-100', 'transition-opacity', 'duration-500');
              }} onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
                target.alt = "Iberico Placeholder";
              }} />
              </div>
              
              {/* Image 3 */}
              <div className="aspect-square overflow-hidden bg-gray-800 rounded-md">
                <img src="https://images.unsplash.com/photo-1629209060013-7ffdd49052d4?ixlib=rb-4.0.3" alt="Olive Oil Product" className="w-full h-full object-cover opacity-0" onLoad={e => {
                const target = e.target as HTMLImageElement;
                target.classList.remove('opacity-0');
                target.classList.add('opacity-100', 'transition-opacity', 'duration-500');
              }} onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
                target.alt = "Olive Oil Placeholder";
              }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Iberico Section */}
      <section id="whyIberico" ref={whyIbericoRef} className="py-20 bg-gray-50 opacity-0">
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
                <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3" alt="Iberico in countryside" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-white opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-12 text-center text-black">
              {t('sections.about.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="img-wrapper overflow-hidden rounded-lg aspect-square">
                <img src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3" alt="About Us" className="w-full h-full object-cover" />
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

      {/* Contact Section - Updated with new simplified design */}
      <section id="contact" ref={contactRef} className="py-20 bg-white opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-poppins text-5xl md:text-6xl font-bold mb-6 text-black">
              Contact
            </h2>
            
            <p className="text-xl text-gray-700 font-roboto mb-12">
              Want to get in touch or partner with us? Contact us in the form below
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block font-roboto text-lg mb-3 text-gray-900">
                  Your name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 px-4 py-3 text-lg font-roboto" />
              </div>
              
              <div>
                <label htmlFor="contact" className="block font-roboto text-lg mb-3 text-gray-900">
                  Email address/WeChat ID
                </label>
                <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required className="w-full border border-gray-300 px-4 py-3 text-lg font-roboto" />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-roboto text-lg mb-3 text-gray-900">
                  Message
                </label>
                <input type="text" id="message" name="message" value={formData.message} onChange={handleChange} required className="w-full border border-gray-300 px-4 py-3 text-lg font-roboto" />
              </div>
              
              <div>
                <button type="submit" disabled={formSubmitted} className="w-full py-3 bg-black text-white font-roboto font-medium hover:bg-gray-800 transition-colors text-lg">
                  {formSubmitted ? <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span> : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <img src="/lovable-uploads/32a591da-11d7-4261-9f86-14c23dc0bb12.png" alt="Curaeted Logo" className="w-full max-w-xs mb-8" />
            
            <p className="text-xl text-white mb-10 text-center font-roboto">
              Bringing the finest Iberico products to China
            </p>
            
            <div className="space-y-2 text-center mb-10">
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
                <img src="/lovable-uploads/32a591da-11d7-4261-9f86-14c23dc0bb12.png" alt="WeChat QR Code" className="w-24 h-24" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default HomePage;