
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
    
    // Run once on initial load with a slight delay to ensure DOM is ready
    setTimeout(animateOnScroll, 300);
    
    // Add the scroll listener after initial animation
    window.addEventListener('scroll', animateOnScroll);
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);
};

export default useScrollAnimation;
