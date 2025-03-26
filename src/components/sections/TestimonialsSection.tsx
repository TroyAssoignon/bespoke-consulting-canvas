
import React from "react";
import SectionHeading from "../SectionHeading";
import TestimonialCard from "../TestimonialCard";

const TestimonialsSection = () => {
  return (
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
  );
};

export default TestimonialsSection;
