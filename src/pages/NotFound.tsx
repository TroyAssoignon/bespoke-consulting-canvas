
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-luxe-cream flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <h1 className="font-serif text-6xl mb-4 text-luxe-charcoal">404</h1>
          <p className="text-xl text-luxe-charcoal/80 mb-8">
            The page you're looking for is currently under development.
          </p>
          <Link to="/" className="button-luxury">
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
