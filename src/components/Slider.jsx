"use client"
import React, { useEffect, useRef, useState } from "react";

const Slider = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  // Array of image paths
  const images = Array.from({length: 4}, (_, i) => `/head-img${i + 1}.png`);
  
  // Number of images to show at once (2.5)
  const imagesPerView = 2.5;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const viewportHeight = window.innerHeight;

      // Check if container is in view
      if (containerTop <= 0) {
        setIsSticky(true);
        
        // Calculate scroll progress (0 to 1)
        const progress = Math.abs(containerTop) / (containerHeight - viewportHeight);
        setScrollProgress(Math.min(1, Math.max(0, progress)));
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalSlideWidth = 300; // Total width percentage
  
  // Calculate how much to translate based on scroll progress
  const translateX = scrollProgress * (totalSlideWidth - 100) / images.length;

  return (
    <div 
      ref={containerRef} 
      className="h-[300vh]" // Tall container for scrolling
    >
      <div 
        ref={sliderRef}
        className={`h-screen w-full ${
          isSticky || scrollProgress >= 1 ? 'fixed -z-10 top-0 left-0 right-0' : ''
        }`}
      >
        <div className="h-full overflow-hidden">
          <div 
            className="flex pl-[10%] h-full gap-10 transition-transform duration-100"
            style={{
              width: `${totalSlideWidth}%`,
              transform: `translateX(-${Math.min(translateX, totalSlideWidth - 100)}%)`
            }}
          >
            {images.map((img, index) => (
              <div 
                key={index}
                className="w-full h-full flex-shrink-0 flex items-center justify-center"
                style={{ width: `20%` }}
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-[100%] h-[70%] object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
