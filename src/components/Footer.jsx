import React from "react";
import logo from "../assets/logo.png";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { FaAngleDoubleRight, FaYoutube, FaFacebook } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-4 flex items-center justify-center md:justify-start font-semibold uppercase">
              <img className="w-[257px] h-[180px]" src={logo} alt="logo" />
            </h6>
            <p>
              Digit Gold is a product with unique users Digit Codes can be
              placed in a wall frame.
            </p>
            <ul class="text-white text-[30px] flex gap-2 mt-5 pl-12">
              <li class="text-black transition-colors duration-300 hover:text-red-600">
                <FaYoutube />
              </li>
              <li class="transition-colors duration-300 hover:text-blue-600">
                <FaFacebook />
              </li>
              <li class="transition-colors duration-300 hover:text-red-600">
                <RxInstagramLogo />
              </li>
            </ul>
          </div>
          <div class="flex items-center">
            <div>
              <h6 class="mb-4 font-bold uppercase text-2xl leading-6 tracking-normal">
                Quick Links
              </h6>
              <ul className="text-base leading-6 tracking-normal">
                <li className="flex gap-2 mt-2 transition duration-300 hover:text-yellow-500 group">
                  <FaAngleDoubleRight className="w-4 h-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Home
                </li>
                <li className="flex gap-2 mt-2 transition duration-300 hover:text-yellow-500 group">
                  <FaAngleDoubleRight className="w-4 h-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  About DTG
                </li>
                <li className="flex gap-2 mt-2 transition duration-300 hover:text-yellow-500 group">
                  <FaAngleDoubleRight className="w-4 h-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Shop
                </li>
                <li className="flex gap-2 mt-2 transition duration-300 hover:text-yellow-500 group">
                  <FaAngleDoubleRight className="w-4 h-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Products
                </li>
                <li className="flex gap-2 mt-2 transition duration-300 hover:text-yellow-500 group">
                  <FaAngleDoubleRight className="w-4 h-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Contacts
                </li>
                <li className="flex gap-2 mt-2 transition duration-300 hover:text-yellow-500 group">
                  <FaAngleDoubleRight className="w-4 h-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  My Account
                </li>
              </ul>
            </div>
            <div class="border-[1px] border-solid border-gray-600 h-[73%] ml-8"></div>
          </div>

          <div class="flex mt-8">
            <div>
              <h6 class="mb-4 flex justify-center md:justify-start font-bold uppercase text-2xl leading-6 tracking-normal">
                Contact details
              </h6>
              <ul class="flex flex-col gap-4">
                <li class="flex items-center">
                  <span class="text-yellow-500 rounded-full p-2 mr-2 border border-gray-500">
                    <FaPhone />
                  </span>
                  <span>+1 (929) 451-7507</span>
                </li>
                <li class="flex items-center">
                  <span class=" text-yellow-500 rounded-full p-2 mr-2 border border-gray-500 ">
                    <MdEmail />
                  </span>
                  <span>andrewsamdigitgold@gmail.com</span>
                </li>
              </ul>
            </div>

            <div class="border-[1px] border-solid border-gray-600 h-[80%] ml-8"></div>
          </div>

          <div className="mt-8">
            <h6 className="mb-4 flex justify-center md:justify-start font-bold uppercase text-[25px] leading-6 tracking-normal">
              Subscribe
            </h6>
            <ul className="text-[]">
              <li>
                Join Us To Get Latest Updates.
                <div className="flex items-center mt-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="text-black px-4 py-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-yellow-300"
                  />
                  <button className="bg-yellow-500 text-white px-[20px] py-[20px] rounded-r-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-500">
                    <FaLocationArrow className="text-[19px]" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-600 p-6"></div>
      <div className="bg-black/5 p-6 text-center ">
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
