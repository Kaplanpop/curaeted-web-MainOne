
import { useEffect, RefObject, useState } from 'react';

export const useIntersectionObserver = (ref: RefObject<HTMLElement>, options?: {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  once?: boolean;
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationClass = options?.animationClass || 'animate-fadeIn';
          entry.target.classList.add(animationClass);
          setIsIntersecting(true);
          
          // If once is true, unobserve after first intersection
          if (options?.once !== false) {
            observer.unobserve(entry.target);
          }
        } else if (!options?.once) {
          // Remove animation class when element is not in viewport, unless 'once' is true
          const animationClass = options?.animationClass || 'animate-fadeIn';
          entry.target.classList.remove(animationClass);
          setIsIntersecting(false);
        }
      });
    }, {
      threshold: options?.threshold || 0.1,
      rootMargin: options?.rootMargin || '0px'
    });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};
