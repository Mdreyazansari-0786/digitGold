import React from "react";
import Banner from "../components/Banner";
import InfiniteScrolling from "../components/InfiniteScrolling.jsx";
import { FaGripLines } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import afterslider from "../assets/afterslider.jpg";
import certificate1 from "../assets/About-Us-1.png";
import certificate2 from "../assets/Certificate.png";
import certificate3 from "../assets/About-Us-2.png";
import Card from "../components/Card.jsx";
import solution from "../assets/solution.jpg";

const Home = () => {
  return (
    <div>
      <Banner />
      <div style={{ marginTop: "30px" }}>
        <img src={afterslider} alt="afterslider" />
      </div>
      <div className="image-container">
        <img src={certificate1} alt="certificate" />
        <img src={certificate2} alt="certificate" className="middle-image" />
        <img src={certificate3} alt="certificate" />
      </div>

      <div style={{ marginTop: "30px" }} className="px-40 align-baseline ">
        <h2 className="text-2xl font-bold text-yellow-500 hover:text-yellow-600 transition duration-300 flex items-center mx-1">
          <FaGripLines className="mr-2" /> WELCOME TO DIGIT GOLD
        </h2>
        <p className="text-xl text-black hover:text-teal-600 transition duration-300 transform hover:translate-y-1 mx-1">
          Pioneering Future Technologies.
        </p>
        <p className="text-lg text-black hover:text-teal-600 transition duration-300 transform hover:translate-y-1 mx-1">
          Digit gold is a fascinating asset that can be "adorning on the wall."
          It is a bridge between the physical and the digital certificates,
          unlocking an innovative realm of asset ownership. The Digit gold asset
          is converted into a physical form of a custom sketch and placed in
          wall frames or devices. The Certificate of the Digit gold asset comes
          alive on the online secure digital twin (DTG) on our platform (Mobile,
          tablet, Desktop, Laptop, etc.). Your Digit gold (DTG) is accessible
          across devices, granting you control and visibility from anywhere.
          Simply resell your Certificate of the Digit gold asset by using the
          unique Digit gold code, readily available on your Certificate. You can
          use the secure online platform to resell the assets. The unique Digit
          gold code instantly translates into Credit Card or debit card refunds,
          granting you liquidity without relinquishing either the physical
          masterpiece or its digital counterpart. Digit gold empowers you to
          redefine asset ownership. It's an exquisite place adorning your space,
          the certificate of the asset, readily converted into liquid funds, and
          a testament to your refined taste. It's the future of owning with
          unparalleled flexibility and digital security. Choose Digit gold,
          Embrace the possibility, Digit gold DTG users UDC.
        </p>
        <p className=" mt-3 text-lg text-black hover:text-teal-600 transition duration-300 transform hover:translate-y-1 mx-1">
          * The DTG represents the digit gold.
          <br />* The UDC represents unique digit code that is used to resell
          the Certificate of the digit gold asset.
        </p>
        <p className="mt-3 text-lg text-black hover:text-teal-600 transition duration-300 transform hover:translate-y-1 mx-1">
          Digit gold is one of its kind. That creates to display on Wall and
          devices. The Certificate that Value the digit gold" is an asset that
          individuals can hold and stores in the device. The Certificate as a
          unique digit code can be used to resell the certificate of the asset
          if necessary. by returning unique digit code to the secure online
          users platform. The funds from the Certificate of the asset will be
          transferred to the owner of the digit gold. There is no need to return
          the physical digit gold, the wall frame, or the intangible digit gold
          in the devices,
        </p>
        <p className=" mt-3 text-lg text-black hover:text-teal-600 transition duration-300 transform hover:translate-y-1 mx-1">
          1. The intangible digit gold asset. with the Certificate that Value
          the intangible digit gold asset add up to $40. The certificate of
          asset can resell for $ 35 if necessary.
        </p>
        <p className=" text-lg text-black hover:text-teal-600 transition duration-300 transform hover:translate-y-1 mx-1">
          2. The physical digit gold asset in the wall frame with the
          certificate that Value digit gold asset is $90. The Certificate of
          asset can resell for $60 if necessary.
        </p>
      </div>
      <div
        style={{ marginTop: "30px", display: "flex" }}
        className="px-40 gap-52"
      >
        <div>
          <button
            className="overflow-hidden bg-white text-yellow-500 border border-yellow-500 px-2 py-4 text-lg lg:text-xl transition duration-300 flex items-center justify-center hover:bg-yellow-400 hover:text-white hover:border-transparent hover:scale-105 hover:translate-x-[-10px] rounded-md"
            style={{ borderRadius: "2rem" }}
          >
            <span className="flex items-center">Read More</span>
            <span>
              <FaAngleDoubleRight />
            </span>
          </button>
        </div>

        <div className="flex items-center relative">
          <h1 className="text-[15px] lg:text-[20px] font-bold text-black mr-2">
            May
          </h1>
          <h1 className="text-[15px] lg:text-[20px] font-bold text-black ">
            2018
          </h1>
          <div className="bottom-4 left-full ml-44 h-full bg-black w-[1px]"></div>
        </div>

        <div className="flex items-center relative">
          <h2 className="text-[15px] lg:text-[20px] font-bold text-black hover:text-yellow-500 hover:underline flex">
            <span className="flex-none">
              Established In New <br /> York, US
            </span>
          </h2>
        </div>
        <div className="flex items-center relative">
          <h2 className="text-[15px] lg:text-[15px] font-bold text-black hover:text-yellow-500 hover:underline flex items-center">
            <span className="flex-none">
              Filled Under Title W.G.O.L.C USPTO <br />
              <span className="text-gray-500"> Secret Name Of Wgoiglc</span>
            </span>
          </h2>
        </div>
      </div>
      <div>
        <img
          src="assets/Resell-Banner.jpg"
          alt=""
          style={{
            width: "100%",
            paddingTop: "20px",
          }}
          onClick={() => {
            alert("Open resell form");
          }}
        />
      </div>
      <div className="pt-14">
        <h2 className="text-center text-[16px] leading-[26px]  font-bold text-yellow-500 hover:text-yellow-600 transition duration-300 mx-1">
          <span className="inline-flex items-center">
            <FaGripLines className="mr-2" />
            OUR SHOP
          </span>
        </h2>
        <h1 className="text-center text-[48px] font-bold leading-[60px] tracking-normal]">
          Latest Products
        </h1>
      </div>

      <InfiniteScrolling />
      <div className="flex justify-center" style={{ marginTop: "-70px" }}>
        <button
          className="bg-black text-white border border-black px-4 py-3 text-lg lg:text-xl transition duration-300 transform hover:bg-yellow-400 hover:text-black hover:translate-x-3 rounded-md"
          style={{ borderRadius: "32px" }}
        >
          <span className="flex items-center">Read More</span>
        </button>
      </div>
      <Card />
      <div className="flex justify-center px-64 mt-12 mb-8">
        {/* Other content */}
        <div className="flex-none">
          <div className="relative">
            <img
              src={solution}
              alt="Solution"
              className="w-[1519px] h-[594px] "
              style={{ marginTop: "30px" }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[#1c1e22] bg-opacity-50 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
