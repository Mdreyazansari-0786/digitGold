import React from "react";
import appiscoming from "../assets/appcoming.png";
import bitcoin from "../assets/bitcoin.jpg";
import flag from "../assets/flag.jpg";
import waterbg from "../assets/waterbg.jpg";

const Appiscomingsoon = () => {
  return (
    <div>
      <div className="bg-black h-24 "></div>
      <div className="h-52 bg-yellow-500 text-black px-4 flex justify-center items-center">
        <h2 className="text-[50px] leading-[66px] tracking-normal text-center">
          DTGI is a new Technology will be in Every Household, not in the Too
          Long Distance Future.
        </h2>
      </div>
      <img className="w-[1519px] h-[501px]" src={appiscoming} alt="" />

      <div className="relative">
        <img className="w-[1519px] h-[717px]" src={waterbg} alt="" />
        <div className="absolute inset-0 flex justify-center items-center mb-32">
          <img className="mr-2 w-[612px] h-[410px]" src={bitcoin} alt="" />
          <img className="ml-2 w-[612px] h-[410px]" src={flag} alt="" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-center">
          <p className="text-[16px] leading-6 tracking-normal text-white  mx-auto max-w-[1255px] mb-7 ">
            Caribbean Finance Home Improvement Headquarters In NYC, We Are
            Working To Improve Homes Though Out The Caribbean. We Also
            Assistence With Big And Small Financing Management For Renovations
            And All Types Of Fixing Caribbean Homes From Overseas Blue Waves
            Coin. The Blue Waves Coin Is Work With Overseas, Based Nationals,
            Members And Customers How To Managing Their Self To Build The
            Resources To Build Their Own Home, And Also Repairs And Improving
            Home, Blue Waves Coin Is Working With People To Manage And Grow The
            Little Resources To Improve The Quality Of Life, Blue Waves Coin
            Goal Is To Give Every Young People Who Needs The Opportunity How To
            Grow The Resource And Achieve The Own Home And Other Assets, Giving
            People The Opportunity From Overseas Who Needed To Build And Repairs
            And Improve The Home. The Lifetime Investment. The Blue Waves Coin
            Is An Asset Caribbean Nationals Can Be Used To Improving The Homes
            From Abroad. Giving The Small Man Who Know A Trade The Opportunity
            Across The Caribbean To Be Self Employed By Working For Yourself
            Creating Businesses And Jobs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appiscomingsoon;
