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
      {/* Home Section - Updated with new background image */}
      <section id="home" ref={homeRef} className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden opacity-0">
        <img src="/lovable-uploads/7fb544ec-1ca6-4d76-bb22-4a900c6f5400.png" alt="Iberico pigs in field" className="absolute inset-0 w-full h-full object-cover z-0" />
        
        {/* No additional content needed as the image already has the text overlay */}
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
              <p className="text-lg text-white font-roboto text-center font-light">
                We focus on <span className="">Iberico</span> Pork (cold cuts and fresh meat) and Extra Virgin Olive Oil
              </p>
            </div>
            
            {/* Traceability statement */}
            <div className="bg-white rounded-md p-5">
              <p className="text-lg text-black font-roboto text-center font-light">
                We offer full <span className="">traceability</span> for each and every product, so you know where it comes from, how it is raised or produced and how it reaches your table
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where To Find Us Section - Updated with Red Note and WeChat logos */}
      <section id="whereToFindUs" ref={whereToFindUsRef} className="py-20 bg-white opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-poppins text-5xl mb-16 text-black font-light md:text-5xl">
              Where to find us
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Red Note (Xiaohongshu) */}
              <div className="flex flex-col items-center">
                <h3 className="font-poppins text-2xl font-medium mb-8">Red Note (小红书)</h3>
                <div className="w-40 h-40 flex items-center justify-center">
                  {/* Using the uploaded Xiaohongshu logo */}
                  <img src="/lovable-uploads/171db970-3a20-4178-bf65-09e4e36e3a1f.png" alt="Xiaohongshu (Red Note) Logo" className="w-32 h-32 object-contain" />
                </div>
              </div>
              
              {/* WeChat */}
              <div className="flex flex-col items-center">
                <h3 className="font-poppins text-2xl font-medium mb-8">WeChat (微信)</h3>
                <div className="w-40 h-40 flex items-center justify-center">
                  {/* Using the uploaded WeChat logo */}
                  <img src="/lovable-uploads/efd9fd8c-759f-4bac-b403-ebee03fe86b8.png" alt="WeChat Logo" className="w-32 h-32 object-contain" />
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
            <h2 className="font-poppins text-5xl mb-16 text-white font-light md:text-5xl">
              Only the finest
            </h2>
            
            <div className="mb-16">
              
            </div>
            
            {/* Image Grid for Product Photos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Image 1 */}
              <div className="aspect-square overflow-hidden bg-gray-800 rounded-md">
                
              </div>
              
              {/* Image 2 */}
              <div className="aspect-square overflow-hidden bg-gray-800 rounded-md">
                
              </div>
              
              {/* Image 3 */}
              <div className="aspect-square overflow-hidden bg-gray-800 rounded-md">
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Iberico Section - Updated with new text and no images */}
      <section id="whyIberico" ref={whyIbericoRef} className="py-20 bg-gray-50 opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-poppins text-5xl mb-16 text-black font-light md:text-5xl text-center">
              {t('sections.whyIberico.title')}
            </h2>
            
            <div className="space-y-8">
              <p className="text-lg text-gray-700 font-roboto leading-relaxed font-light">
                At Curæted, exceptional taste is more than a promise—it's a heritage. Our Iberico offerings celebrate centuries of culinary artistry, from our meticulously cured pork that embodies passion and tradition, to our organic extra virgin olive oil that elevates every dish with its vibrant, natural flavor. Each product is a testament to artisanal craftsmanship, sustainable practices, and a relentless pursuit of excellence. Discover the story of Iberico: where time-honored quality meets innovative spirit, and every bite tells a tale of authenticity and refinement.
              </p>
              
              <p className="text-lg text-gray-700 font-roboto leading-relaxed font-light">
                For our Chinese audiences, we understand that a deep respect for tradition and quality is at the heart of every culinary experience. Our products not only offer superior taste but also align with a holistic approach to wellness and cultural heritage. By blending centuries-old techniques with modern sustainability, Curæted delivers ingredients that enhance both time-honored recipes and contemporary dining, inviting you to savor a luxurious journey that honors your rich gastronomic legacy.
              </p>
              
              
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Updated with new text and bullet points */}
      <section id="about" ref={aboutRef} className="py-20 bg-black text-white opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-poppins text-5xl mb-12 text-white font-light md:text-5xl text-center">
              {t('sections.about.title')}
            </h2>
            
            <div className="mb-16">
              <p className="text-lg text-white font-roboto leading-relaxed mb-8 font-light">
                Curæted aims to reconnect people with the best farming, and help artisanal farmers to thrive. With roots in Extremadura, a traditional faming region of Spain, with some of the finest Spanish agricultural products, from Iberico pigs, extra virgin olive oil, cherries or honey, Curæted thought that these farmers could actually thrive if only it was easier for them to access markets and spread the word of their excellence. This was the perfect match for the growing craving of safer, better, healthier, organic and premium food for Chinese ever more sophisticated consumers, who want and won't settle if not for the best.
              </p>
              
              {/* Bullet Points styled as in the reference image */}
              <div className="space-y-12 mt-16">
                {/* Bullet Point 1 */}
                <div className="flex">
                  <div className="mr-6">
                    <div className="w-1 h-16 bg-gray-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium mb-2">1. FULLY TRACEABLE PRODUCTS</h3>
                    <p className="text-lg text-gray-300 font-light">From breeding, through farming and to table.</p>
                  </div>
                </div>
                
                {/* Bullet Point 2 */}
                <div className="flex">
                  <div className="mr-6">
                    <div className="w-1 h-16 bg-gray-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium mb-2">2. PERSONALISED & EXCLUSIVE</h3>
                    <p className="text-lg text-gray-300 font-light">Airfreight Door-to-Door in less than 15 days</p>
                  </div>
                </div>
                
                {/* Bullet Point 3 */}
                <div className="flex">
                  <div className="mr-6">
                    <div className="w-1 h-24 bg-gray-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium mb-2">3. MORE VALUE. MORE SUSTAINABLE</h3>
                    <p className="text-lg text-gray-300 font-light leading-relaxed">
                      We aim to offer the best and finest products at competitive pricing by delivering directly from producers, while enabling farmers to earn more value and continue producing the best, in the best, traditional way
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Images for About section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated with new simplified design */}
      <section id="contact" ref={contactRef} className="py-20 bg-white opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-poppins text-5xl mb-16 text-black font-light md:text-5xl">
              Contact
            </h2>
            
            <p className="text-xl text-gray-700 font-roboto mb-12 font-light">
              Want to get in touch or partner with us? Contact us in the form below
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block font-roboto text-lg mb-3 text-gray-900 font-light">
                  Your name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 px-4 py-3 text-lg font-roboto" />
              </div>
              
              <div>
                <label htmlFor="contact" className="block font-roboto text-lg mb-3 text-gray-900 font-light">
                  Email address/WeChat ID
                </label>
                <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required className="w-full border border-gray-300 px-4 py-3 text-lg font-roboto" />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-roboto text-lg mb-3 text-gray-900 font-light">
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
            
            <p className="text-xl text-white mb-10 text-center font-roboto font-light">
              Bringing the finest Iberico products to China
            </p>
            
            <div className="space-y-2 text-center mb-10">
              <p className="text-gray-300 font-roboto font-light">
                Room 214 Level 2, Building 1, 155 Fengxiang Rd, Baoshan, Shanghai, PRC
              </p>
              <p className="text-gray-300 font-roboto font-light">
                Email: <a href="mailto:jose.campon@curaetedchina.com" className="hover:text-white transition-colors">jose.campon@curaetedchina.com</a>
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-2 mb-10">
              <p className="text-gray-300 font-roboto font-light">WeChat:</p>
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