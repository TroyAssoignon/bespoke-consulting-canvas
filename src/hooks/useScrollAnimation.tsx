
import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.9;
        
        if (isVisible) {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    // Run once on initial load to animate elements already in view
    animateOnScroll();
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);
};

export default useScrollAnimation;
