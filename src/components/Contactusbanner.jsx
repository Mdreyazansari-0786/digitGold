import React from "react";
import womanImg from "../assets/smilewoman.png";
import slashline from "../assets/slashline.png";

import { FaGripLines } from "react-icons/fa";
const Contactusbanner = () => {
  return (
    <div className="relative flex">
      <div className="absolute inset-0 h-full bg-black opacity-50"></div>
      <img src={womanImg} alt="" className="h-[650px]" />

      <div className="flex flex-col justify-center p-[120px] mt-[112px] text-yellow-500 absolute left-0">
        <p className="flex items-center">
          <FaGripLines className="text-[16px] leading-[26px] tracking-normal mr-2" />
          WRITE AN ENQUIRY
        </p>
        <h2 className="text-[48px] font-bold mb-4 text-white">
          Experience The Evolution
        </h2>
        <p className="text-[#cccccc] text-[16px] leading-5 tracking-normal">
          The world is changing. To stay relevant and successful, you need to
          evolve.
        </p>
        <button className="bg-[#E7b53e] max-w-[200px] mt-3 hover:bg-white text-black font-bold px-2 py-3 rounded-full inline-block text-[14px] leading-6 tracking-normal w-auto h-auto">
          Contact us
        </button>
      </div>

      <div className="flex flex-col justify-center p-6 text-white absolute right-[170px] ">
        <div className="bg-gray-800 rounded border border-[#808287] p-8 w-[400px] h-[600px] mt-16 ">
          <h2 className="text-3xl font-bold mb-4">Write TO Us</h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-200 p-2 rounded w-full hover:bg-gray-300 transition duration-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-200 p-2 rounded w-full hover:bg-gray-300 transition duration-300"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                className="bg-gray-200 p-2 rounded w-full h-24 resize-none hover:bg-gray-300 transition duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white text-[16px] leading-6 tracking-normal py-[16px] px-8 rounded hover:bg-black "
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactusbanner;
