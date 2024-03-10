import React from "react";
import cardImg from "../assets/cardImg.png";
const Card = () => {
  return (
    <div>
      <div className="bg-black text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Card 1</h2>
        <p>This is the content of the first card.</p>
      </div>
      <div className="bg-black hover:bg-yellow-500 text-white p-6 rounded-lg shadow-lg transition duration-300">
        <h2 className="text-xl font-bold mb-4">Card 2</h2>
        <p>This is the content of the second card.</p>
      </div>
      <div className="relative p-6 rounded-lg shadow-lg">
        <img
          src={cardImg}
          alt="Placeholder"
          className="w-70 h-auto rounded-lg bg-black"
        />
      </div>
    </div>
  );
};

export default Card;
