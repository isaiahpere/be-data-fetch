"use client";
import Image from "next/image";
import React, { useState } from "react";
import CarouselButton from "./carousel-button";

interface CarouselProps {
  products: any[];
}

const Carousel = ({ products }: CarouselProps) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const handlePrev = () => {
    setCurrentPosition(
      (prev) => (prev - 1 + products.length - 1) % products.length
    );
  };
  const handleNext = () => {
    setCurrentPosition((prev) => (prev + 1) % products.length);
  };

  return (
    <section className="flex flex-col items-center p-4 w-[400px]">
      <h2 className="text-xl text-slate-700 font-semibold mb-10">
        Amaing Products
      </h2>
      <p>{products[currentPosition].title}</p>
      <Image
        src={products[currentPosition]?.images[0]}
        alt={products[currentPosition]?.title}
        width={0}
        height={0}
        sizes="100vw"
        priority
        style={{ width: "300px", height: "400px" }}
        className="object-contain"
      />
      <div className="flex items-center justify-between w-full">
        <CarouselButton handleClick={handlePrev}>Previous</CarouselButton>
        <CarouselButton handleClick={handleNext}>Next</CarouselButton>
      </div>
    </section>
  );
};

export default Carousel;
