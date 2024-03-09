import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import cart from "../assets/finalcart.png";
const Header = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsMobileMenuOpen(false); // Close the mobile menu after clicking an item
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full h-20 bg-black px-4 py-2 md:py-4 font-titleFont relative">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <img className="w-28 ml-[-20px]" src={logo} alt="logo" />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <GiHamburgerMenu
            color="#fff"
            fontSize={24}
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center flex-grow">
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
            <img
              className="w-10 flex items-center rounded-full gap-10"
              src={user}
              alt="user"
            />
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-20 left-0 w-full bg-black z-10 transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 text-white py-4">
            <li
              className="text-xl cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              onClick={() => handleItemClick("Home")}
            >
              Home
            </li>
            <li
              className="text-xl cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              onClick={() => handleItemClick("About DTG")}
            >
              About DTG
            </li>
            <li
              className="text-xl cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              onClick={() => handleItemClick("Shop")}
            >
              Shop
            </li>
            <li
              className="text-xl cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              onClick={() => handleItemClick("Product")}
            >
              Product
            </li>
            <li
              className="text-xl cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              onClick={() => handleItemClick("Resell")}
            >
              Resell
            </li>
            <li
              className="text-xl cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              onClick={() => handleItemClick("Account")}
            >
              Account
            </li>
          </ul>
          <MdOutlineClose
            className="absolute top-4 right-4 text-white cursor-pointer"
            size={24}
            onClick={toggleMobileMenu}
          />
        </div>

        <div className="flex items-center gap-10 relative">
          <img
            className="w-10 flex items-center img-white"
            src={cart}
            alt="cart"
          />
          <span className="absolute w-6 top-2 left-3 text-sm flex items-center justify-center font-semibold text-white">
            0
          </span>
          <button className="text-xl font-medium cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 bg-transparent hover:bg-yellow-500 text-white hover:text-black px-10 py-2 rounded-md ml-auto btn-get-started">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
