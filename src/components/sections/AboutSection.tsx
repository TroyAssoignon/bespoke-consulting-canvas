
import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import ImageWithEffect from "../ImageWithEffect";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
