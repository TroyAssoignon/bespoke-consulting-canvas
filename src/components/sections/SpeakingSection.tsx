
import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import ImageWithEffect from "../ImageWithEffect";

const SpeakingSection = () => {
  return (
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
  );
};

export default SpeakingSection;
