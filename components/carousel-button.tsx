import React from "react";

interface CarouselButotn {
  children: any;
  handleClick(): void;
}

const CarouselButton = ({ children, handleClick }: CarouselButotn) => {
  return (
    <button
      className="bg-lime-400 py-2 p-6 rounded-lg hover:bg-lime-600 transition min-w-32"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default CarouselButton;
