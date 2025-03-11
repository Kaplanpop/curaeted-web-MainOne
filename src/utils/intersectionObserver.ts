
import { useEffect, RefObject } from 'react';

export const useIntersectionObserver = (ref: RefObject<HTMLElement>, options?: {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  onIntersection?: (isIntersecting: boolean) => void;
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (options?.onIntersection) {
          options.onIntersection(entry.isIntersecting);
        } else if (entry.isIntersecting) {
          const animationClass = options?.animationClass || 'animate-fadeIn';
          entry.target.classList.add(animationClass);
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
};

