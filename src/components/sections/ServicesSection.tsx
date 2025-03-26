
import React from "react";
import { Briefcase, Mic, Users, BarChart4, Building, BarChart2 } from "lucide-react";
import SectionHeading from "../SectionHeading";
import ServiceCard from "../ServiceCard";

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;
