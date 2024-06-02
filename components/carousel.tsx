"use client";
import Image from "next/image";
import React, { useState } from "react";

interface CarouselProps {
  products: any[];
}

const Carousel = ({ products }: CarouselProps) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  console.log(products);
  return (
    <section className="flex flex-col items-center p-4 w-[400px]">
      <h2 className="text-xl text-slate-700 mb-10">Amaing Products</h2>
      <Image
        src={products[currentPosition]?.images[0]}
        alt={products[currentPosition]?.title}
        width={400}
        height={400}
        priority
        className="object-contain"
      />
      <div className="flex items-center justify-between w-full">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </section>
  );
};

export default Carousel;
