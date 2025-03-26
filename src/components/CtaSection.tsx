
import React from "react";
import { Link } from "react-router-dom";

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  className = "",
}) => {
  return (
    <section className={`bg-luxe-charcoal py-16 ${className}`}>
      <div className="container text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-luxe-cream mb-4 max-w-3xl mx-auto">
          {title}
        </h2>
        {subtitle && (
          <p className="text-luxe-cream/80 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <Link to={buttonLink} className="button-luxury border border-luxe-gold">
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
