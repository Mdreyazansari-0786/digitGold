import React, { useState, useEffect } from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/product1.jpg";
import image2 from "../assets/product2.jpg";
import image3 from "../assets/product3.jpg";
import image4 from "../assets/product4.jpg";
import image5 from "../assets/product5.jpg";
import image6 from "../assets/product6.jpg";
import image7 from "../assets/product7.jpg";
import image8 from "../assets/product8.jpg";
import image9 from "../assets/product9.jpg";

const products = [
  {
    name: "Intangible Digit Gold Asset (Grey)",
    price: "$32.00",
  },
  {
    name: "Elegant Silver Watch",
    price: "$45.00",
  },
  {
    name: "Stylish Leather Wallet",
    price: "$20.00",
  },
  {
    name: "Classic Men's Belt",
    price: "$28.00",
  },
  {
    name: "Fashionable Sunglasses",
    price: "$18.00",
  },
  {
    name: "Luxury Perfume",
    price: "$50.00",
  },
  {
    name: "Chic Women's Handbag",
    price: "$40.00",
  },
  {
    name: "Smartphone Case",
    price: "$15.00",
  },
  {
    name: "Casual Sneakers",
    price: "$35.00",
  },
  {
    name: "Casual Sneakers",
    price: "$35.00",
  },
];

const InfiniteScrolling = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10; // Total number of slides
  const imageArray = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image1, // Ensure seamless looping
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden relative">
      <div className="w-screen h-[500px] relative">
        <div
          style={{
            transform: `translateX(-${(100 / totalSlides) * currentSlide}%)`,
            transition: "transform 1s ease-in-out",
          }}
          className="w-[250%] h-full flex absolute top-0 left-0"
        >
          {imageArray.map((image, index) => (
            <div
              key={index}
              className="w-[10%] h-full p-4 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="bg-white shadow-md rounded-lg p-6">
                <img
                  className="w-full h-[70%] object-cover rounded-lg mb-4"
                  src={image}
                  alt={`product${index + 1}`}
                  loading="priority"
                />
                <div>
                  <h2 className="text-lg font-bold mb-2">
                    {products[index]?.name || ""}
                  </h2>
                  <p className="text-sm text-gray-700">
                    {products[index]?.price || ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute left-0 right-8 mx-auto flex justify-center items-center bottom-64 space-x-[1440px]">
          <div onClick={previousSlide} className="hover:text-yellow-500">
            <FaCircleChevronLeft
              className="circle-chevron-left"
              color="black"
              size={32}
            />
          </div>
          <div onClick={nextSlide} className="hover:text-yellow-500">
            <FaCircleChevronRight
              className="circle-chevron-right"
              color="black"
              size={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrolling;
