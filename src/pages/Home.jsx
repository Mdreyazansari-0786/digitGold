import React from "react";
import Banner from "../components/Banner";
import { FaGripLines } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Banner />
      <div style={{ marginTop: "30px" }}>
        <img src="assets/afterslider.jpg" alt="" />
      </div>
      <div className="image-container">
        <img src="assets/About-Us-1.png" alt="certificate" />
        <img
          src="assets/Certificate.png"
          alt="certificate"
          className="middle-image"
        />
        <img src="assets/About-Us-2.png" alt="certificate" />
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
    </div>
  );
};

export default Home;
