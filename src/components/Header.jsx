import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
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
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="w-full bg-black py-2 md:py-4 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <img className="w-28" src={logo} alt="logo" />
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
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex items-center gap-8 text-white">
            <MenuItem
              itemName="Home"
              handleItemClick={handleItemClick}
              selectedItem={selectedItem}
            />
            <MenuItem
              itemName="About DTG"
              handleItemClick={handleItemClick}
              selectedItem={selectedItem}
            />
            <MenuItem
              itemName="Shop"
              handleItemClick={handleItemClick}
              selectedItem={selectedItem}
            />
            <MenuItem
              itemName="Product"
              handleItemClick={handleItemClick}
              selectedItem={selectedItem}
            />
            <MenuItem
              itemName="Resell"
              handleItemClick={handleItemClick}
              selectedItem={selectedItem}
            />
            <MenuItem
              itemName="Account"
              handleItemClick={handleItemClick}
              selectedItem={selectedItem}
            />
          </ul>
          <img
            className="w-10 border rounded-full  ml-4"
            src={user}
            alt="user"
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-20 left-0 w-full bg-black z-10 transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 text-white py-4">
            <MenuItem
              itemName="Home"
              handleItemClick={handleItemClick}
              selectedItem={selectedItem}
              isMobile={true}
            />
            <MenuItem
              itemName="About DTG"
              handleItemClick={handleItemClick}
              selectedItem={selectedItem}
              isMobile={true}
            />
            <MenuItem
              itemName="Shop"
              handleItemClick={handleItemClick}
              selectedItem={selectedItem}
              isMobile={true}
            />
            <MenuItem
              itemName="Product"
              handleItemClick={handleItemClick}
              selectedItem={selectedItem}
              isMobile={true}
            />
            <MenuItem
              itemName="Resell"
              handleItemClick={handleItemClick}
              selectedItem={selectedItem}
              isMobile={true}
            />
            <MenuItem
              itemName="Account"
              handleItemClick={handleItemClick}
              selectedItem={selectedItem}
              isMobile={true}
            />
          </ul>
          <MdOutlineClose
            className="absolute top-4 right-4 text-white cursor-pointer"
            size={24}
            onClick={toggleMobileMenu}
          />
        </div>

        <div className="flex items-center gap-4 md:gap-10 relative">
          <img className="w-10 filter invert" src={cart} alt="cart" />
          <span
            className={`absolute w-6 text-sm pl-4 mt-1 pb-2 flex items-center justify-center font-semibold text-white ${
              !isMobile && "top-1 left-1"
            } ${isMobile && "pl-6 mb-2 "}`}
          >
            0
          </span>
          <button className="text-sm md:text-xl font-medium cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 bg-transparent hover:bg-yellow-500 text-white hover:text-black px-6 md:px-10 py-2 rounded-md ml-auto btn-get-started">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ itemName, handleItemClick, selectedItem, isMobile }) => (
  <li
    className={`${
      isMobile ? "text-xl" : "text-base"
    } font-medium cursor-pointer transition-colors duration-300 hover:text-yellow-500 ${
      selectedItem === itemName && "text-yellow-500"
    }`}
    onClick={() => handleItemClick(itemName)}
  >
    {itemName}
  </li>
);

export default Header;
