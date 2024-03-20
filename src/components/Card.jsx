import React from "react";
import cardImg from "../assets/cardImg.png";
import { FaArrowRight } from "react-icons/fa6";

const Card = () => {
  return (
    <div class="flex justify-center px-64 mt-12 mb-8">
      <div class="flex-none">
        <div class="w-[342px] h-[403px] bg-[#2761f2] text-white p-6 shadow-lg hover:bg-[#0027ab] transition duration-300 ease-in-out">
          <h2 class="text-xl font-bold mb-4 flex justify-between">
            Sell It Anytime
            <span className="text-yellow-500 inline-block p-4 bg-gray-600 rounded-xl hover:scale-105 transition-transform duration-300">
              <FaArrowRight />
            </span>
          </h2>
          <p class="text-base leading-8 tracking-normal">
            The digit gold certificate is an asset, can be returned, or sold in
            the future, by returning the user's digit code from the certificate
            that values the digit gold if necessary on the digit gold secure
            online user’s platform. No need to return the digit gold or the
            certificate; just return the user's digit code from the certificate.
          </p>
        </div>
      </div>
      <div class="flex-none">
        <div class="w-[388px] h-[403px] bg-black hover:bg-yellow-500 text-white p-6 shadow-lg transition duration-300">
          <h2 class="text-xl font-bold mb-4 flex justify-between">
            Safe and Secure Platform
            <span className="text-white inline-block p-4 bg-gray-600 rounded-xl hover:scale-105 transition-transform duration-300">
              <FaArrowRight />
            </span>
          </h2>
          <p class="text-base leading-8 tracking-normal">
            It will go to the Re Sell page The person just have put in the user
            digit codes and all the information, about the person will comes up
            in side of the website with the Value of the digit gold, and the
            questionnaire asking if you want the money to return to the Credit
            Card, or debit card, or you want to receive the money from the
            Western Union, or the money gram, by the paying the fee. The
            information must come up out side of the website that the person can
            see the information.
          </p>
        </div>
      </div>
      <div class="flex-none relative">
        <img
          src={cardImg}
          alt="Placeholder"
          class="w-[342px] h-[403px] bg-[#2761f2] text-white p-6 shadow-lg hover:bg-[#0027ab] transition duration-300 ease-in-out"
        />
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <p class="text-[18px] leading-8">
            <span class="font-bold text-white">This Certificate</span>
          </p>
          <p>
            <span class="text-yellow-500 text-[18px] leading-8">
              *DTG09234501*
            </span>
            <span class="text-white">Value The</span>
          </p>
          <p>
            <span class="text-yellow-500 text-[18px] leading-8">$100</span>
            <span class="text-white"> Digit Gold</span>
          </p>
          <p class="text-[14px] leading-normal inline-block">
            *DTG09234501*is for reference purpose only
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
