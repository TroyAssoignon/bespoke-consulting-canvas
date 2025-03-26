
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxe-charcoal text-luxe-cream py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl">Brooklyn Turner</h3>
            <p className="text-luxe-cream/80 max-w-xs">
              Elevating businesses through strategic consulting, leadership
              development, and transformative speaking engagements.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxe-cream/80 hover:text-luxe-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxe-cream/80 hover:text-luxe-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxe-cream/80 hover:text-luxe-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-luxe-gold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-luxe-cream/80 hover:text-luxe-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-luxe-cream/80 hover:text-luxe-gold transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-luxe-cream/80 hover:text-luxe-gold transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/speaking"
                  className="text-luxe-cream/80 hover:text-luxe-gold transition-colors"
                >
                  Speaking Engagements
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-luxe-cream/80 hover:text-luxe-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-luxe-gold mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxe-gold" />
                <a
                  href="mailto:inquiry@brooklynturner.com"
                  className="text-luxe-cream/80 hover:text-luxe-gold transition-colors"
                >
                  inquiry@brooklynturner.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxe-gold" />
                <a
                  href="tel:+1234567890"
                  className="text-luxe-cream/80 hover:text-luxe-gold transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <Link to="/consultation" className="button-luxury-outline border-luxe-cream text-luxe-cream">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-luxe-cream/20 mt-12 pt-8 text-center text-luxe-cream/60 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Brooklyn Turner. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
