
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useIntersectionObserver } from '@/utils/intersectionObserver';

const ContactSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(sectionRef);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Submit data to Supabase
      const { error } = await supabase.from('contact_submissions').insert([{
        name: formData.name,
        contact: formData.contact,
        message: formData.message
      }]);
      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Error",
          description: "There was a problem submitting your message. Please try again.",
          variant: "destructive"
        });
      } else {
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
      }
    } catch (error) {
      console.error('Exception submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" ref={sectionRef} className="relative opacity-0 overflow-hidden">
      {/* Hero image with wave overlay */}
      <div className="relative w-full">
        <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src="/lovable-uploads/fadfccf3-009c-4452-b171-c3f54f990f87.png" 
            alt="Olive harvesting" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* White wave overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Form section */}
      <div className="bg-white pt-8 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">              
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
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full border border-gray-300 px-4 py-3 text-lg font-roboto"></textarea>
            </div>
            
            <div>
              <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-black text-white font-roboto font-medium hover:bg-gray-800 transition-colors text-lg disabled:bg-gray-500">
                {isSubmitting ? <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
