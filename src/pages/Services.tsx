
import { useEffect, useRef } from 'react';

const Services = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const casesRef = useRef<HTMLDivElement>(null);

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
      servicesRef.current,
      processRef.current,
      casesRef.current,
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
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="section opacity-0"
      >
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="section-title">Our Services</span>
            <h1 className="heading-xl mb-6">What We Offer</h1>
            <p className="text-lg text-muted-foreground mb-8">
              We provide comprehensive solutions tailored to your unique needs, combining strategic thinking with aesthetic precision to create exceptional experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="section opacity-0"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="space-y-12">
                {[
                  {
                    title: "Strategic Curation",
                    description: "We carefully select and organize content, products, or experiences to create meaningful narratives that resonate with your audience.",
                    features: ["Content Architecture", "Editorial Planning", "Collection Development", "Experience Mapping"],
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                    ),
                  },
                  {
                    title: "Experience Design",
                    description: "We craft intuitive, engaging user experiences that balance aesthetic appeal with functional excellence.",
                    features: ["User Interface Design", "Interaction Design", "Usability Testing", "Accessibility Optimization"],
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
                    ),
                  },
                  {
                    title: "Brand Refinement",
                    description: "We help distill your brand essence into cohesive visual and verbal expressions that communicate your unique value.",
                    features: ["Brand Strategy", "Visual Identity", "Messaging Framework", "Brand Guidelines"],
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-diamond"><path d="M6 5h12l3 5-8.5 9.5a.7.7 0 0 1-1 0L3 10l3-5"/><path d="M21 10H3"/></svg>
                    ),
                  },
                ].map((service, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="heading-sm mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-primary mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="space-y-12">
                {[
                  {
                    title: "Digital Transformation",
                    description: "We guide businesses through technological evolution while maintaining a human-centered approach.",
                    features: ["Digital Strategy", "Technology Assessment", "Implementation Planning", "Change Management"],
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
                    ),
                  },
                  {
                    title: "Content Strategy",
                    description: "We develop comprehensive content plans that align with your business goals and engage your target audience.",
                    features: ["Content Audit", "Channel Strategy", "Content Creation", "Performance Analysis"],
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                    ),
                  },
                  {
                    title: "Quality Assurance",
                    description: "We rigorously test and refine our work to ensure flawless execution and exceptional results.",
                    features: ["Testing Protocols", "Performance Optimization", "Compliance Review", "Continuous Improvement"],
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    ),
                  },
                ].map((service, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="heading-sm mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-primary mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        ref={processRef}
        className="section bg-secondary opacity-0"
      >
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-title">Our Process</span>
            <h2 className="heading-lg mb-6">
              How We Work
            </h2>
            <p className="text-muted-foreground">
              Our collaborative approach is designed to deliver exceptional results through a structured yet flexible process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We begin by deeply understanding your business, goals, audience, and competitive landscape.",
              },
              {
                number: "02",
                title: "Strategy",
                description: "Based on our discoveries, we develop a comprehensive strategy that will guide our creative and technical decisions.",
              },
              {
                number: "03",
                title: "Creation",
                description: "Our team brings the strategy to life through thoughtful design, content creation, and technical implementation.",
              },
              {
                number: "04",
                title: "Refinement",
                description: "We test, iterate, and refine our work to ensure it meets our exacting standards and achieves your objectives.",
              },
              {
                number: "05",
                title: "Launch",
                description: "We carefully manage the launch process to ensure a smooth transition and maximum impact.",
              },
              {
                number: "06",
                title: "Evolution",
                description: "We provide ongoing support and optimization to ensure continued success and adaptation to changing needs.",
              },
            ].map((step, index) => (
              <div key={index} className="flex mb-16 last:mb-0 opacity-0 animate-slideUp" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="mr-8">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary font-display text-2xl font-medium">
                    {step.number}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="heading-md mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section
        ref={casesRef}
        className="section opacity-0"
      >
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-title">Case Studies</span>
            <h2 className="heading-lg mb-6">
              Our Work in Action
            </h2>
            <p className="text-muted-foreground">
              Explore how our services have helped real clients achieve their goals and transform their businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Revitalizing a Legacy Brand",
                category: "Brand Refinement",
                description: "How we helped a 50-year-old company update their brand while honoring their heritage.",
                image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3",
              },
              {
                title: "Digital Transformation for Retail",
                category: "Digital Transformation",
                description: "Creating a seamless omnichannel experience for a traditional retail chain.",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3",
              },
            ].map((caseStudy, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-60">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
                    {caseStudy.category}
                  </div>
                  <h3 className="heading-sm mb-3 group-hover:text-primary transition-colors duration-300">
                    {caseStudy.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {caseStudy.description}
                  </p>
                  <button className="text-sm font-medium text-primary flex items-center transition-colors hover:text-primary/80">
                    Read Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-outline">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Transform Your Experience?</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Let's discuss how our services can help you achieve your goals and create exceptional experiences for your audience.
            </p>
            <button className="bg-white text-primary hover:bg-white/90 btn-primary">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
