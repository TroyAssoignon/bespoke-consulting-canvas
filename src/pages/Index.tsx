import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Mic, 
  Users, 
  BarChart4, 
  Building, 
  BarChart2
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import SectionHeading from "../components/SectionHeading";
import ImageWithEffect from "../components/ImageWithEffect";
import CtaSection from "../components/CtaSection";

const Index = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.9;
        
        if (isVisible) {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen bg-luxe-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="mb-4">
                <div className="inline-block font-display uppercase tracking-wider text-xs font-medium text-luxe-gold mb-3 relative">
                  <span className="relative z-10">High-End Business Consultant</span>
                  <span className="absolute bottom-1 left-0 w-full h-[3px] bg-luxe-gold/10 -z-10"></span>
                </div>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Elevating Executive <br className="hidden md:block" />
                <span className="relative">
                  Vision
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-luxe-gold"></span>
                </span> 
                {" "}& Strategy
              </h1>
              <p className="text-luxe-charcoal/80 text-lg mb-8 max-w-xl">
                Transformative business consulting for C-suite leaders seeking strategic growth, operational excellence, and market leadership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/consultation" className="button-luxury">
                  Schedule Consultation
                </Link>
                <Link to="/services" className="button-luxury-outline">
                  Explore Services
                </Link>
              </div>
            </div>
            
            <div className="animate-fade-in-right opacity-0">
              <ImageWithEffect 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Brooklyn Turner - Business Consultant" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll opacity-0">
              <ImageWithEffect 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Brooklyn Turner Portrait" 
              />
            </div>
            
            <div className="order-1 lg:order-2 animate-on-scroll opacity-0">
              <SectionHeading 
                subtitle="About Brooklyn" 
                title="Strategic Vision Meets Executive Experience" 
                alignment="left"
                className="mb-6"
              />
              
              <p className="text-luxe-charcoal/80 mb-6">
                With over 15 years of experience in high-level business development, Brooklyn Turner has established herself as a trusted consultant for leaders seeking transformative growth strategies and operational excellence.
              </p>
              
              <p className="text-luxe-charcoal/80 mb-8">
                Brooklyn's approach combines deep industry knowledge with innovative thinking, helping C-suite executives and entrepreneurs navigate complex business landscapes and achieve remarkable results.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="font-serif text-4xl text-luxe-gold">150+</p>
                  <p className="text-luxe-charcoal/70 text-sm">Executive Clients</p>
                </div>
                <div>
                  <p className="font-serif text-4xl text-luxe-gold">35+</p>
                  <p className="text-luxe-charcoal/70 text-sm">Speaking Engagements</p>
                </div>
                <div>
                  <p className="font-serif text-4xl text-luxe-gold">12</p>
                  <p className="text-luxe-charcoal/70 text-sm">Countries Served</p>
                </div>
                <div>
                  <p className="font-serif text-4xl text-luxe-gold">94%</p>
                  <p className="text-luxe-charcoal/70 text-sm">Client Retention</p>
                </div>
              </div>
              
              <Link to="/about" className="button-luxury-outline">
                Learn More About Brooklyn
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-luxe-cream">
        <div className="container">
          <SectionHeading 
            subtitle="Expertise" 
            title="Signature Consulting Services" 
            className="mb-12 animate-on-scroll opacity-0"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
              <ServiceCard 
                title="Business Strategy Development"
                description="Custom growth strategies aligned with your executive vision and market opportunities."
                icon={<Briefcase className="w-6 h-6" />}
                link="/services/strategy"
              />
            </div>
            
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.2s" }}>
              <ServiceCard 
                title="Leadership & Team Building"
                description="Transform organizational culture and develop high-performing executive teams."
                icon={<Users className="w-6 h-6" />}
                link="/services/leadership"
              />
            </div>
            
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.3s" }}>
              <ServiceCard 
                title="High-Ticket Sales Strategy"
                description="Optimize your sales approach for premium offerings and high-value client acquisition."
                icon={<BarChart4 className="w-6 h-6" />}
                link="/services/sales"
              />
            </div>
            
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.4s" }}>
              <ServiceCard 
                title="Oil & Gas Mineral Rights"
                description="Specialized consulting for optimal management and monetization of mineral assets."
                icon={<Building className="w-6 h-6" />}
                link="/services/mineral-rights"
              />
            </div>
            
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.5s" }}>
              <ServiceCard 
                title="Financial Strategy & Accounting"
                description="Comprehensive financial planning and accounting expertise for sustainable growth."
                icon={<BarChart2 className="w-6 h-6" />}
                link="/services/financial"
              />
            </div>
            
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.6s" }}>
              <ServiceCard 
                title="Executive Speaking"
                description="Impactful keynotes and workshops for corporate events and leadership conferences."
                icon={<Mic className="w-6 h-6" />}
                link="/speaking"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Speaking CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll opacity-0">
              <SectionHeading 
                subtitle="Speaking Engagements" 
                title="Inspire Your Audience with Transformative Insights" 
                alignment="left"
                className="mb-6"
              />
              
              <p className="text-luxe-charcoal/80 mb-6">
                Brooklyn delivers compelling keynotes and workshops on business strategy, leadership, and growth mindset for corporate events, conferences, and executive retreats.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-luxe-gold rounded-full mt-2 mr-3"></div>
                  <p className="text-luxe-charcoal/80">Strategic Leadership in Changing Markets</p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-luxe-gold rounded-full mt-2 mr-3"></div>
                  <p className="text-luxe-charcoal/80">High-Performance Team Building</p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-luxe-gold rounded-full mt-2 mr-3"></div>
                  <p className="text-luxe-charcoal/80">Executive Decision-Making & Risk Management</p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-luxe-gold rounded-full mt-2 mr-3"></div>
                  <p className="text-luxe-charcoal/80">Women in Leadership & Business</p>
                </div>
              </div>
              
              <Link to="/speaking" className="button-luxury">
                Book Brooklyn for Your Event
              </Link>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <ImageWithEffect 
                src="https://images.unsplash.com/photo-1539914658693-e0697c18b6f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Brooklyn Turner Speaking" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-luxe-cream">
        <div className="container">
          <SectionHeading 
            subtitle="Client Testimonials" 
            title="What Leaders Are Saying" 
            className="mb-12 animate-on-scroll opacity-0"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
              <TestimonialCard 
                quote="Brooklyn's strategic guidance transformed our approach to market expansion. Her insights and methodical implementation plan increased our revenue by 40% within six months."
                author="Sarah Anderson"
                position="CEO"
                company="Axion Technologies"
              />
            </div>
            
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.2s" }}>
              <TestimonialCard 
                quote="Working with Brooklyn on our leadership development program resulted in measurable improvements in team cohesion and performance metrics. Her approach is both scientific and deeply human."
                author="Michael Richardson"
                position="Chief Operations Officer"
                company="Meridian Group"
              />
            </div>
            
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.3s" }}>
              <TestimonialCard 
                quote="Brooklyn's keynote at our annual executive retreat was insightful, engaging and actionable. She delivered complex strategic concepts in a way that inspired immediate implementation."
                author="Jennifer Lawson"
                position="Director of Executive Development"
                company="Global Finance Partners"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CtaSection 
        title="Ready to Elevate Your Business Strategy?"
        subtitle="Schedule a consultation to discuss your specific challenges and objectives."
        buttonText="Book Your Consultation"
        buttonLink="/consultation"
        className="animate-on-scroll opacity-0"
      />

      <Footer />
    </div>
  );
};

export default Index;
