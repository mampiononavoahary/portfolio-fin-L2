
"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Carousel({ slides, delay = 2500 }) {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Delay rendering to allow page transition animation to finish
    const timer = setTimeout(() => {
      setMounted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!mounted) return;
    const auto = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(auto);
  }, [currentIndex, mounted]);

  if (!mounted) return null; // Hide carousel initially

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-[500px] h-[300px] mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="w-full h-full relative">
        <Image
          src={slides[currentIndex]}
          alt={`slide-${currentIndex}`}
          fill
          className="object-cover transition-all duration-500"
        />
      </div>

      <div className="absolute top-0 w-full h-full flex justify-between items-center px-4 text-black">
        <button onClick={prevSlide} aria-label="Previous slide">
          <FaArrowCircleLeft size={30} color="black"/>
        </button>
        <button onClick={nextSlide} aria-label="Next slide">
          <FaArrowCircleRight size={30} color="black"/>
        </button>
      </div>

      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

