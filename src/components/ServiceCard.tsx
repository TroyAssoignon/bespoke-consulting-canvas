
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
}) => {
  return (
    <div className="service-card bg-white p-8 border border-luxe-lightgray">
      <div className="flex items-center justify-center w-14 h-14 bg-luxe-cream text-luxe-gold mb-6">
        {icon}
      </div>
      <h3 className="font-serif text-xl mb-3">{title}</h3>
      <p className="text-luxe-charcoal/70 mb-6">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-luxe-gold hover:text-luxe-darkgold font-medium transition-colors"
      >
        Learn More <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );
};

export default ServiceCard;
