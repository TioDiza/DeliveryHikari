import { useState, useEffect, useRef, RefObject } from 'react';

interface Options {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

function useInView(options: Options = { threshold: 0.1, triggerOnce: true }): [RefObject<HTMLDivElement>, boolean] {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.triggerOnce && containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      {
        threshold: options.threshold,
        root: options.root,
        rootMargin: options.rootMargin,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return [containerRef, isInView];
}

export default useInView;