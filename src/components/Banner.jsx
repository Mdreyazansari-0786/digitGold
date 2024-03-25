import React, { useState, useEffect } from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="relative w-full h-auto overflow-x-hidden">
      <div
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        className="w-full h-[calc(100vw * 0.5)] sm:h-[500px] flex transition-transform duration-1000"
      >
        <img
          className="flex-shrink-0 w-full h-full object-cover"
          src={slider1}
          alt="slider1"
          loading="priority"
        />
        <img
          className="flex-shrink-0 w-full h-full object-cover"
          src={slider2}
          alt="slider2"
        />
        <img
          className="flex-shrink-0 w-full h-full object-cover"
          src={slider3}
          alt="slider3"
        />
      </div>
      <div className="absolute left-0 right-0 flex items-center justify-between bottom-20 lg:bottom-64">
        <div onClick={previousSlide}>
          <FaCircleChevronLeft
            className="circle-chevron-left"
            color="white"
            size={32}
          />
        </div>
        <div onClick={nextSlide}>
          <FaCircleChevronRight
            className="circle-chevron-right"
            color="white"
            size={32}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
