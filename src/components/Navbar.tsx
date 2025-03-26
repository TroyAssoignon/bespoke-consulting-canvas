
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl text-luxe-charcoal">
          Brooklyn Turner
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link text-luxe-charcoal">
            Home
          </Link>
          <Link to="/about" className="nav-link text-luxe-charcoal">
            About
          </Link>
          <Link to="/services" className="nav-link text-luxe-charcoal">
            Services
          </Link>
          <Link to="/speaking" className="nav-link text-luxe-charcoal">
            Speaking
          </Link>
          <Link to="/contact" className="nav-link text-luxe-charcoal">
            Contact
          </Link>
          <Link
            to="/consultation"
            className="button-luxury-outline text-xs px-5 py-2"
          >
            Schedule Consultation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-luxe-charcoal"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 h-screen pointer-events-auto"
            : "opacity-0 h-0 pointer-events-none"
        }`}
      >
        <div className="container flex flex-col items-center py-10 space-y-6">
          <Link
            to="/"
            className="nav-link text-luxe-charcoal text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link text-luxe-charcoal text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="nav-link text-luxe-charcoal text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/speaking"
            className="nav-link text-luxe-charcoal text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Speaking
          </Link>
          <Link
            to="/contact"
            className="nav-link text-luxe-charcoal text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/consultation"
            className="button-luxury mt-4 w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
