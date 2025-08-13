import { useRef, useEffect } from 'react';

interface TiltOptions {
  maxTilt: number;
  perspective: number;
  scale: number;
  speed: number;
  easing: string;
}

export function use3DTilt(options: Partial<TiltOptions> = {}) {
  const elementRef = useRef<HTMLElement>(null);
  
  const {
    maxTilt = 20,
    perspective = 1000,
    scale = 1.05,
    speed = 1000,
    easing = 'cubic-bezier(.03,.98,.52,.99)'
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);
      
      const rotateX = deltaY * maxTilt;
      const rotateY = deltaX * maxTilt;
      
      element.style.transform = `
        perspective(${perspective}px) 
        rotateX(${-rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale3d(${scale}, ${scale}, ${scale})
      `;
      element.style.transition = `transform ${speed * 0.1}ms ${easing}`;
    };

    const handleMouseLeave = () => {
      element.style.transform = `
        perspective(${perspective}px) 
        rotateX(0deg) 
        rotateY(0deg) 
        scale3d(1, 1, 1)
      `;
      element.style.transition = `transform ${speed}ms ${easing}`;
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, perspective, scale, speed, easing]);

  return elementRef;
}