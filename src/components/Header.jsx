import React, { useState } from "react";

const Header = () => {
  const [selectedItem, setSelectedItem] = useState("Home");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="w-full h-20 bg-black  px-4 py-2 md:py-4 ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          {" "}
          <img className="w-28 " src="/assets/logo.png" alt="" />
        </div>
        <div>
          <ul className="flex items-center gap-8 text-white">
            <li
              className={`text-xl font-medium cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 hover:text-yellow-500 hover:bg-transparent ${
                selectedItem === "Home" && "hover:underline selected"
              }`}
              onClick={() => handleItemClick("Home")}
            >
              Home
            </li>
            <li
              className="text-xl font-medium cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 hover:text-yellow-500 hover:bg-transparent hover:underline"
              onClick={() => handleItemClick("About DTG")}
            >
              About DTG
            </li>
            <li
              className="text-xl font-medium cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 hover:text-yellow-500 hover:bg-transparent hover:underline"
              onClick={() => handleItemClick("Shop")}
            >
              Shop
            </li>
            <li
              className="text-xl font-medium cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 hover:text-yellow-500 hover:bg-transparent hover:underline"
              onClick={() => handleItemClick("Product")}
            >
              Product
            </li>
            <li
              className="text-xl font-medium cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 hover:text-yellow-500 hover:bg-transparent hover:underline"
              onClick={() => handleItemClick("Resell")}
            >
              Resell
            </li>
            <li
              className="text-xl font-medium cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 hover:text-yellow-500 hover:bg-transparent hover:underline"
              onClick={() => handleItemClick("Account")}
            >
              Account
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
