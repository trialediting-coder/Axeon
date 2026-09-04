import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  distance?: number;
  threshold?: number;
  scale?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 600,
  distance = 32,
  threshold = 0.1,
  scale = 1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  // Determine initial transform offset
  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';

    let translate = '';
    switch (direction) {
      case 'up':
        translate = `translate3d(0, ${distance}px, 0)`;
        break;
      case 'down':
        translate = `translate3d(0, -${distance}px, 0)`;
        break;
      case 'left':
        translate = `translate3d(${distance}px, 0, 0)`;
        break;
      case 'right':
        translate = `translate3d(-${distance}px, 0, 0)`;
        break;
      case 'none':
      default:
        translate = 'translate3d(0, 0, 0)';
        break;
    }

    if (scale !== 1) {
      translate += ` scale(${scale})`;
    }

    return translate;
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};
