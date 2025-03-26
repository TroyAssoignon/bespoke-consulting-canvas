
import React from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
}) => {
  return (
    <div className="testimonial-card p-8 h-full">
      <p className="text-luxe-charcoal/90 font-serif italic mb-6 relative z-10">
        {quote}
      </p>
      <div className="mt-auto">
        <h4 className="font-display font-semibold text-luxe-charcoal">{author}</h4>
        <p className="text-luxe-charcoal/70 text-sm">
          {position}
          {company && `, ${company}`}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
