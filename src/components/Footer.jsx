import React from "react";
import logo from "../assets/logo.png";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { FaAngleDoubleRight, FaYoutube, FaFacebook } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-4 md:mx-6 py-8 md:py-10 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h6 className="mb-4 flex justify-center md:justify-start">
              <img className="w-[128px] h-[90px]" src={logo} alt="logo" />
            </h6>
            <p className="text-sm md:text-base">
              Digit Gold is a product with unique users Digit Codes can be
              placed in a wall frame.
            </p>
            <ul className="text-2xl mt-5 flex justify-center md:justify-start gap-4">
              <li>
                <FaYoutube />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <RxInstagramLogo />
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <div>
              <h6 className="mb-4 font-bold uppercase text-xl md:text-2xl">
                Quick Links
              </h6>
              <ul className="text-base md:text-lg">
                <li className="flex items-center mt-2">
                  <FaAngleDoubleRight className="w-4 h-4 mt-1 mr-2" />
                  Home
                </li>
                <li className="flex items-center mt-2">
                  <FaAngleDoubleRight className="w-4 h-4 mt-1 mr-2" />
                  About DTG
                </li>
                <li className="flex items-center mt-2">
                  <FaAngleDoubleRight className="w-4 h-4 mt-1 mr-2" />
                  Shop
                </li>
                <li className="flex items-center mt-2">
                  <FaAngleDoubleRight className="w-4 h-4 mt-1 mr-2" />
                  Products
                </li>
                <li className="flex items-center mt-2">
                  <FaAngleDoubleRight className="w-4 h-4 mt-1 mr-2" />
                  Contacts
                </li>
                <li className="flex items-center mt-2">
                  <FaAngleDoubleRight className="w-4 h-4 mt-1 mr-2" />
                  My Account
                </li>
              </ul>
            </div>
            <div className="border-[1px] border-solid border-gray-600 h-[50%] ml-4 md:ml-8"></div>
          </div>
          <div className="flex flex-col mt-8 md:mt-0">
            <h6 className="mb-4 flex justify-center md:justify-start font-bold uppercase text-xl md:text-2xl">
              Contact details
            </h6>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center">
                <FaPhone className="text-yellow-500" />
                <span className="ml-2">+1 (929) 451-7507</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="text-yellow-500" />
                <span className="ml-2">andrewsamdigitgold@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h6 className="mb-4 flex justify-center md:justify-start font-bold uppercase text-xl md:text-2xl">
              Subscribe
            </h6>
            <p className="text-base">Join Us To Get Latest Updates.</p>
            <div className="flex items-center mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-black px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-yellow-300"
              />
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-r-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-500">
                <FaLocationArrow className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-600 p-4 md:p-6"></div>
      <div className="bg-black/5 p-4 md:p-6 text-center">
        <span>© 2024 DigitGold:</span>
        <a
          className="font-semibold hover:text-yellow-500"
          href="https://tw-elements.com/"
        >
          All Rights Reserved.
        </a>
      </div>
    </footer>
  );
};
export default Footer;
