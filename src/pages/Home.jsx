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
import arrowdown from "../assets/arrow2.png";
import uparrow from "../assets/up arrow.png";
import banner from "../assets/Big-Banner-2.jpg";
import Testimonials from "../components/Testimonial.jsx";

import Contactusbanner from "../components/Contactusbanner.jsx";
import Appiscomingsoon from "../components/Appiscomingsoon.jsx";

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

      <div className="px-4 md:px-8 lg:px-16 xl:px-24 xxl:px-32 mt-6 md:mt-10 lg:mt-16">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xxl:text-4xl font-bold text-yellow-500 hover:text-yellow-600 transition duration-300 flex items-center mx-1">
          <FaGripLines className="mr-2" /> WELCOME TO DIGIT GOLD
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-3xl text-black hover:text-teal-600 transition duration-300 transform hover:translate-y-1 mt-2">
          Pioneering Future Technologies.
        </p>
        <p className="text-base  sm:text-lg  md:text-xl lg:text-2xl xxl:text-3xl text-black hover:text-teal-600 transition duration-300 transform hover:translate-y-1 mt-2">
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
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-3xl text-black hover:text-teal-600 transition duration-300 transform hover:translate-y-1 mt-2">
          * The DTG represents the digit gold.
          <br />* The UDC represents unique digit code that is used to resell
          the Certificate of the digit gold asset.
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-3xl text-black hover:text-teal-600 transition duration-300 transform hover:translate-y-1 mt-2">
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
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-3xl text-black hover:text-teal-600 transition duration-300 transform hover:translate-y-1 mt-2">
          1. The intangible digit gold asset. with the Certificate that Value
          the intangible digit gold asset add up to $40. The certificate of
          asset can resell for $ 35 if necessary.
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-3xl text-black hover:text-teal-600 transition duration-300 transform hover:translate-y-1 mt-2">
          2. The physical digit gold asset in the wall frame with the
          certificate that Value digit gold asset is $90. The Certificate of
          asset can resell for $60 if necessary.
        </p>
      </div>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
        className="px-4 md:px-20 lg:px-40 gap-6 md:gap-12 lg:gap-20"
      >
        <div style={{ flex: "1" }}>
          <button
            className="overflow-hidden bg-white text-yellow-500 border py-4 px-4 border-yellow-500 text-lg lg:text-xl transition duration-300 flex items-center justify-center hover:bg-yellow-400 hover:text-white hover:border-transparent hover:scale-105 hover:translate-x-[-10px] rounded-md"
            style={{
              borderRadius: "2rem",
              minWidth: "110px",
              whiteSpace: "nowrap",
              width: "100%",
            }}
          >
            Read More
          </button>
        </div>

        <div className="flex items-center relative">
          <h1 className="text-sm lg:text-base font-bold text-black mr-2">
            May
          </h1>
          <h1 className="text-sm lg:text-base font-bold text-black ">2018</h1>
          <div className="bottom-4 lg:bottom-auto left-full ml-4 lg:ml-8 lg:left-auto h-full bg-black lg:w-[1px]"></div>
        </div>

        <div className="flex items-center relative mt-4 lg:mt-0">
          <h2 className="text-sm lg:text-base font-bold text-black hover:text-yellow-500 hover:underline flex">
            <span className="flex-none">Established In New York, US</span>
          </h2>
        </div>

        <div className="flex items-center relative mt-4 lg:mt-0">
          <h2 className="text-sm lg:text-base font-bold text-black hover:text-yellow-500 hover:underline flex items-center">
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
        <h2 className="text-center text-lg lg:text-xl xl:text-2xl font-bold text-yellow-500 hover:text-yellow-600 transition duration-300 mx-1">
          <span className="inline-flex items-center">
            <FaGripLines className="mr-2" />
            OUR SHOP
          </span>
        </h2>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-normal md:leading-relaxed xl:leading-normal tracking-normal">
          Latest Products
        </h1>
      </div>

      <InfiniteScrolling />

      <div className="flex justify-center pb-10">
        <button className="bg-black text-white border border-black px-4 py-3 text-base md:text-lg lg:text-xl transition duration-300 transform hover:bg-yellow-400 hover:text-black hover:translate-x-3 rounded-full">
          <span className="flex items-center">Read More</span>
        </button>
      </div>
      <Card />
      <div className="flex justify-center px-64 mt-8 mb-6">
        <div className="flex-none">
          <div className="relative">
            <img
              src={solution}
              alt="Solution"
              className="max-w-[1519px] max-h-[630px]"
              style={{ marginTop: "30px" }}
            />
            <div className="absolute inset-0  items-center bg-[#1c1e22] bg-opacity-50 pl-[112px] pt-[120px]">
              <p className="text-[#E7b53e] flex items-center">
                <FaGripLines className="mr-2 text-[30px]" />
                INNOVATIVE
              </p>
              <h1 className="text-[50px] leading-[70px] text-white tracking-normal justify-start text-bold ">
                Digit Gold inc DTGI is working on <br /> Effective Products &
                New <br />
                Technology
              </h1>
              <button className="bg-[#E7b53e] hover:bg-white text-black font-bold px-[24px] py-[16px] rounded-full flex items-center text-[16px] leading-6 tracking-normal">
                Buy Now <FaAngleDoubleRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center px-4 sm:px-6 sm:text-center lg:px-8">
        <p class="text-[#E7b53e] flex text-sm sm:text-center sm:pl-40 md:text-lg lg:text-xl gap-1">
          <FaGripLines class="text-lg md:text-xl mt-1" />
          SIMPLE PROCESS
        </p>
        <h1 class="text-2xl sm:text-3xl sm:text-center sm:pl-20  lg:text-4xl font-bold mt-8 leading-normal tracking-normal text-center">
          Customer Journey
        </h1>
      </div>

      <div className="px-[180px] flex gap-5 mt-8">
        <div className="items-center">
          <div className="left-12 relative w-16 h-16 bg-white hover:bg-yellow-500 rounded-full flex justify-center items-center text-black text-xl font-bold border border-black transition duration-300 ease-in-out hover:border-black">
            01
          </div>
          <div className="">
            <p className="text-[20px] leading-6 font-bold gap-3">
              Add Asset To Cart
            </p>
            <span className="flex items-center gap-12">
              In the website select the assets with <br /> specific colors,
              value etc.
              <img className="" src={arrowdown} alt="arrow" />
            </span>
          </div>
        </div>
        <div className="items-center">
          <div className=" left-12 relative w-16 h-16 bg-white hover:bg-yellow-500 rounded-full flex justify-center items-center text-black text-xl font-bold border border-black transition duration-300 ease-in-out hover:border-black">
            02
          </div>
          <div className="">
            <p className="text-[20px] leading-6 font-bold">
              Procedure To Checkout
            </p>
            <span className="flex items-center gap-12">
              You can make an order with easy step <br /> online.
              <img className="" src={uparrow} alt="arrow" />
            </span>
          </div>
        </div>
        <div className=" items-center">
          <div className="left-12 relative w-16 h-16 bg-white hover:bg-yellow-500 rounded-full flex justify-center items-center text-black text-xl font-bold border border-black transition duration-300 ease-in-out hover:border-black">
            03
          </div>
          <div className="">
            <p className="text-[20px] leading-6 font-bold">Make A Purchase</p>
            <span className="flex items-center gap-12">
              Payment is made online & unique digit <br /> code is allocated.
              <img className="" src={arrowdown} alt="arrow" />
            </span>
          </div>
        </div>
        <div className="items-center">
          <div className=" left-12 relative w-16 h-16 bg-white hover:bg-yellow-500 rounded-full flex justify-center items-center text-black text-xl font-bold border border-black transition duration-300 ease-in-out hover:border-black">
            04
          </div>
          <div className="">
            <p className="text-[20px] leading-6 font-bold">Return Any Time</p>
            <span className="flex items-center gap-12">
              You can return digit code without <br /> returning the digit gold.
            </span>
          </div>
        </div>
      </div>
      <div className=" mt-14 w-full">
        <img src={banner} alt="banner" />
      </div>
      <div class="flex flex-col items-center justify-center mt-11">
        <p class="text-[#E7b53e] flex text-[24px] gap-1">
          <FaGripLines class=" text-[24px] mt-1" />
          TESTIMONIALS
        </p>
        <h1 className="text-[48px] font-bold mt-8 leading-[26px] tracking-normal">
          What Our Clients Say ?
        </h1>
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Contactusbanner />
      </div>
      <div>
        <Appiscomingsoon />
      </div>
    </div>
  );
};

export default Home;
