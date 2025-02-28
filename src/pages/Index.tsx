
import { useEffect, useRef } from 'react';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

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
      heroRef.current,
      aboutRef.current,
      servicesRef.current,
      testimonialsRef.current,
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden opacity-0"
        style={{ paddingTop: '80px' }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3')] bg-cover bg-center blur-[2px] opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-title inline-block mb-3 opacity-0 animate-slideDown" style={{ animationDelay: '0.3s' }}>Welcome to</span>
            <h1 className="heading-xl mb-6 opacity-0 animate-slideDown" style={{ animationDelay: '0.5s' }}>
              Curæted
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-slideDown" style={{ animationDelay: '0.7s' }}>
              We design thoughtful experiences that connect people with what matters most. Through meticulous curation, we elevate brands and create meaningful engagement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-slideDown" style={{ animationDelay: '0.9s' }}>
              <button className="btn-primary">Get Started</button>
              <button className="btn-outline">Learn More</button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-down"><path d="m7 6 5 5 5-5"/><path d="m7 13 5 5 5-5"/></svg>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="section opacity-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="section-title">About Us</span>
              <h2 className="heading-lg mb-6">
                Thoughtfully Selected, Meticulously Crafted
              </h2>
              <p className="text-muted-foreground mb-6">
                At Curæted, we believe in the power of thoughtful selection. Our approach combines strategic thinking with aesthetic precision to create experiences that resonate.
              </p>
              <p className="text-muted-foreground mb-8">
                Founded on principles of quality and attention to detail, we work closely with our clients to understand their unique needs and deliver solutions that exceed expectations.
              </p>
              <button className="btn-primary">Discover Our Story</button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="img-wrapper aspect-square overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section bg-secondary opacity-0">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="section-title">Our Services</span>
            <h2 className="heading-lg mb-4">
              Elevating Experiences
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive solutions tailored to your unique needs, ensuring exceptional quality and attention to detail at every step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Curation",
                description: "We carefully select and organize content, products, or experiences to create meaningful narratives that resonate with your audience.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                ),
              },
              {
                title: "Experience Design",
                description: "We craft intuitive, engaging user experiences that balance aesthetic appeal with functional excellence.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
                ),
              },
              {
                title: "Brand Refinement",
                description: "We help distill your brand essence into cohesive visual and verbal expressions that communicate your unique value.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-diamond"><path d="M6 5h12l3 5-8.5 9.5a.7.7 0 0 1-1 0L3 10l3-5"/><path d="M21 10H3"/></svg>
                ),
              },
              {
                title: "Digital Transformation",
                description: "We guide businesses through technological evolution while maintaining a human-centered approach.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
                ),
              },
              {
                title: "Content Strategy",
                description: "We develop comprehensive content plans that align with your business goals and engage your target audience.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                ),
              },
              {
                title: "Quality Assurance",
                description: "We rigorously test and refine our work to ensure flawless execution and exceptional results.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                ),
              },
            ].map((service, index) => (
              <div 
                key={index} 
                className="glass-card p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {service.icon}
                </div>
                <h3 className="heading-sm mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="section opacity-0">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="section-title">Testimonials</span>
            <h2 className="heading-lg mb-4">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Curæted transformed our brand with their meticulous attention to detail and strategic approach. The results exceeded our expectations.",
                author: "Sarah Johnson",
                title: "CEO, Elevate Design",
              },
              {
                quote: "Working with Curæted was a revelation. Their ability to understand our needs and translate them into a cohesive strategy made all the difference.",
                author: "Michael Chen",
                title: "Marketing Director, Nexus Corp",
              },
              {
                quote: "The team at Curæted doesn't just deliver results—they deliver experiences that resonate with our audience on a profound level.",
                author: "Emily Rodriguez",
                title: "Product Lead, Innovex",
              },
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="glass-card p-8 transition-all duration-300 hover:shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote text-primary/20 mb-4"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                <p className="text-lg mb-6 font-light leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Elevate Your Experience?</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Let's work together to create something exceptional that resonates with your audience and achieves your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-primary hover:bg-white/90 btn-primary">
                Contact Us
              </button>
              <button className="bg-transparent border border-white text-white hover:bg-white/10 btn-outline">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
