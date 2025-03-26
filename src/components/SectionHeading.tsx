
import React from "react";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  alignment = "center",
  className = "",
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-3xl ${alignmentClasses[alignment]} ${className}`}>
      {subtitle && (
        <div className="inline-block font-display uppercase tracking-wider text-xs font-medium text-luxe-gold mb-3 relative">
          <span className="relative z-10">{subtitle}</span>
          <span className="absolute bottom-1 left-0 w-full h-[3px] bg-luxe-gold/10 -z-10"></span>
        </div>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-luxe-charcoal">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
