
import React from "react";
import { Link } from "react-router-dom";
import ImageWithEffect from "../ImageWithEffect";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
