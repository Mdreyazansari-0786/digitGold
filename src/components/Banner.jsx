import React from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[500px] relative">
        <div className="w-[400vw] h-full flex">
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
        <div className="absolute left-0 right-0 mx-auto flex justify-center items-center bottom-64 space-x-[1468px]">
          <div>
            <style>
              {`
    .circle-chevron-left {
      color: white;
      font-size: 32px;
      transition: transform 0.3s ease;
    }
    .circle-chevron-left:hover {
      transform: scale(1.2); /* Example: Enlarge on hover */
    }
  `}
            </style>

            <FaCircleChevronLeft className="circle-chevron-left" />
          </div>
          <div>
            <style>
              {`
    .circle-chevron-right {
      color: white;
      font-size: 32px;
      transition: transform 0.3s ease;
    }
    .circle-chevron-right:hover {
      transform: scale(1.2); /* Example: Enlarge on hover */
    }
  `}
            </style>
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
