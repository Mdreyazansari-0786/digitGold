import React, { useState, useEffect } from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";

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
    }, 5000); // Switch to the next slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides]); // Re-run effect when totalSlides changes

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[500px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover"
            src="assets/slider1.jpg"
            alt="slider1"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src="assets/slider2.jpg"
            alt="slider2"
          />
          <img
            className="w-screen h-full object-cover"
            src="assets/slider3.jpg"
            alt="slider3"
          />
        </div>
        <div className="absolute left-0 right-4 mx-auto flex justify-center items-center bottom-64 space-x-[1450px]">
          <div onClick={previousSlide}>
            <FaCircleChevronLeft className="circle-chevron-left" color="white"
              size={32} />
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
    </div>
  );
};

export default Banner;
