import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    name: "Intangible Digit Gold Asset",
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
    name: "Classic Men's Belt",
    price: "$28.00",
  },
  {
    name: "Classic Men's Belt",
    price: "$28.00",
  },
  {
    name: "Classic Men's Belt",
    price: "$28.00",
  },
  {
    name: "Classic Men's Belt",
    price: "$28.00",
  },
  {
    name: "Classic Men's Belt",
    price: "$28.00",
  },
  {
    name: "Classic Men's Belt",
    price: "$28.00",
  },
  {
    name: "Classic Men's Belt",
    price: "$28.00",
  },
  {
    name: "Classic Men's Belt",
    price: "$28.00",
  },
];

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
  image1,
  image2,
  image3,
];

const InfiniteScrolling = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(imageArray.length / 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    });
    return () => clearInterval(interval);
  }, [totalSlides]);

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="w-full h-auto relative">
      <div className="w-full h-[500px] relative overflow-hidden">
        <div
          style={{
            transform: `translateX(-${(100 / totalSlides) * currentSlide}%)`,
            transition: "transform 1s ease-in-out",
            display: "flex",
            width: `${totalSlides * 100}%`,
          }}
        >
          {Array.from({ length: totalSlides }, (_, index) => (
            <div
              key={index}
              className="w-full flex justify-center items-center"
              style={{ flex: `0 0 ${100 / totalSlides}%` }}
            >
              {imageArray.slice(index * 4, index * 4 + 4).map((image, i) => (
                <div key={i} className="product-container">
                  <div className="product-image">
                    <img
                      className="w-full h-[70%] object-cover rounded-lg mb-4 image-hover"
                      src={image}
                      alt={`product${index * 4 + i + 1}`}
                      loading="priority"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold mb-2">
                      {products[index * 4 + i]?.name}
                    </h2>
                    <p className="text-sm text-gray-700">
                      {products[index * 4 + i]?.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute left-[265px] right-[285px] flex justify-between items-center bottom-[320px]">
          <div
            onClick={previousSlide}
            className="hover:text-yellow-500 cursor-pointer icon-container"
          >
            <FaChevronLeft
              className="circle-chevron-left icon"
              color="black"
              size={32}
            />
          </div>
          <div
            onClick={nextSlide}
            className="hover:text-yellow-500 cursor-pointer icon-container"
          >
            <FaChevronRight
              className="circle-chevron-right icon"
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
