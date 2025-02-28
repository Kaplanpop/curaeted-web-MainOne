
import { useEffect, useRef } from 'react';

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

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
      storyRef.current,
      valuesRef.current,
      teamRef.current,
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
            <span className="section-title">About Us</span>
            <h1 className="heading-xl mb-6">Our Story</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Curæted was founded on a simple principle: thoughtful selection elevates experience. We believe in the power of careful curation to transform the ordinary into the extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        ref={storyRef}
        className="section opacity-0"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="img-wrapper aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3"
                  alt="Our beginnings"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <span className="section-title">Our Journey</span>
              <h2 className="heading-lg mb-6">
                From Concept to Reality
              </h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2019, Curæted began as a small collective of designers, strategists, and curators who shared a vision for creating more thoughtful digital experiences.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a passion project quickly evolved into a comprehensive approach to experience design. Today, we work with clients across industries who share our commitment to quality and attention to detail.
              </p>
              <p className="text-muted-foreground">
                Our team has grown, but our values remain the same: a dedication to excellence, a belief in the power of simplicity, and an unwavering focus on the user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section
        ref={valuesRef}
        className="section bg-secondary opacity-0"
      >
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-title">Our Values</span>
            <h2 className="heading-lg mb-6">
              What Guides Us
            </h2>
            <p className="text-muted-foreground">
              Our values aren't just words on a page. They're the principles that guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Thoughtful Selection",
                description: "We believe that careful curation is the foundation of exceptional experiences. Every choice matters.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-square"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                ),
              },
              {
                title: "Attention to Detail",
                description: "The difference between good and exceptional lies in the details. We obsess over every element of our work.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zoom-in"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg>
                ),
              },
              {
                title: "Simplicity",
                description: "We believe in removing the unnecessary to focus on what truly matters. Complexity is easy; simplicity is hard.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus-square"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/></svg>
                ),
              },
              {
                title: "User-Centered Design",
                description: "We design for people first, always keeping the end user's needs, desires, and context in mind.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                ),
              },
              {
                title: "Continuous Improvement",
                description: "We're never satisfied with the status quo. We constantly seek to learn, grow, and refine our approach.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                ),
              },
              {
                title: "Integrity",
                description: "We believe in transparency, honesty, and doing what's right, even when it's difficult.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                ),
              },
            ].map((value, index) => (
              <div
                key={index}
                className="glass-card p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="heading-sm mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        ref={teamRef}
        className="section opacity-0"
      >
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-title">Our Team</span>
            <h2 className="heading-lg mb-6">
              The People Behind Curæted
            </h2>
            <p className="text-muted-foreground">
              Our diverse team brings together expertise from design, technology, strategy, and curation to create exceptional experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alexandra Chen",
                title: "Founder & Creative Director",
                bio: "With over 15 years of experience in design and brand strategy, Alex leads our creative vision with precision and insight.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                name: "Marcus Johnson",
                title: "Head of Experience Design",
                bio: "Marcus combines technical expertise with a deep understanding of human behavior to create intuitive, engaging experiences.",
                image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                name: "Sophia Rodriguez",
                title: "Chief Strategy Officer",
                bio: "Sophia translates business objectives into comprehensive strategies that deliver meaningful results for our clients.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                name: "David Kim",
                title: "Technology Director",
                bio: "David ensures our creative vision is executed flawlessly through innovative technological solutions.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="img-wrapper aspect-square overflow-hidden rounded-full mb-4 max-w-[220px] mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-medium text-xl mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.title}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Join Our Journey</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Want to be part of a team that's passionate about creating exceptional experiences? We're always looking for talented individuals to join our growing family.
            </p>
            <button className="bg-white text-primary hover:bg-white/90 btn-primary">
              View Open Positions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
