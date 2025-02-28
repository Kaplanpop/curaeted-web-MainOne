
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

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
    setFormStatus({ submitted: true, success: true, message: 'Thank you for your message. We will be in touch shortly.' });
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 500);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="section-title">Contact Us</span>
            <h1 className="heading-xl mb-6">Get in Touch</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Have a question or want to discuss a project? We'd love to hear from you. Reach out using the form below or contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section pt-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-md mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject <span className="text-primary">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Career Information">Career Information</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Send Message
                  </button>
                </div>
                
                {formStatus && (
                  <div className={`p-4 rounded-md ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
            
            <div className="lg:col-span-1">
              <h2 className="heading-md mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <a href="mailto:hello@curated.com" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@curated.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <address className="text-muted-foreground not-italic">
                      123 Design Street<br />
                      San Francisco, CA 94103<br />
                      United States
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-medium mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-12">
        <div className="h-[400px] w-full bg-secondary relative overflow-hidden">
          {/* This is a placeholder for a map. In a real application, you'd integrate Google Maps or another mapping service here. */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                <MapPin size={28} />
              </div>
              <h3 className="font-medium mb-1">Curæted Headquarters</h3>
              <p className="text-muted-foreground">
                123 Design Street, San Francisco, CA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-title">Questions</span>
            <h2 className="heading-lg mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What services does Curæted offer?",
                answer: "Curæted provides a range of services including strategic curation, experience design, brand refinement, digital transformation, content strategy, and quality assurance. Each service is tailored to meet the specific needs of our clients.",
              },
              {
                question: "How does your process work?",
                answer: "Our process begins with a discovery phase where we learn about your business and goals. We then develop a strategy, create and refine our work, manage the launch, and provide ongoing support for evolution and optimization.",
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on scope and complexity. A small project might take 4-6 weeks, while larger initiatives can span several months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you work with clients outside of San Francisco?",
                answer: "Yes, we work with clients globally. While our headquarters is in San Francisco, we have experience working remotely with organizations across North America, Europe, and Asia.",
              },
              {
                question: "How do you determine pricing for your services?",
                answer: "Our pricing is based on the scope, complexity, and timeline of each project. We provide detailed proposals with transparent pricing after our initial consultation to ensure clarity and alignment.",
              },
            ].map((faq, index) => (
              <div key={index} className="mb-6 border-b border-border pb-6 last:border-0">
                <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
