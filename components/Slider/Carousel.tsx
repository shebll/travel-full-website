"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    title: "image 1",
    description: "description image 1",
    url: "/images/image6.avif",
  },
  {
    title: "image 1",
    description: "description image 1",
    url: "/images/image1.avif",
  },
  {
    title: "image 2",
    description: "description image 2",
    url: "/images/image2.avif",
  },
  {
    title: "image 2",
    description: "description image 2",
    url: "/images/image3.avif",
  },
  {
    title: "image 2",
    description: "description image 2",
    url: "/images/image4.avif",
  },
  {
    title: "image 2",
    description: "description image 2",
    url: "/images/image5.avif",
  },
  {
    title: "image 2",
    description: "description image 2",
    url: "/images/image6.avif",
  },
  {
    title: "image 2",
    description: "description image 2",
    url: "/images/image1.avif",
  },
];
export default function Carousel() {
  const [current, setCurrent] = useState<number>(1);
  const next = () => {
    setCurrent((prev) => {
      return prev === images?.length - 2 ? 1 : prev + 1;
    });
  };
  const prev = () => {
    setCurrent((prev) => {
      return prev === 1 ? images?.length - 2 : prev - 1;
    });
  };
  const variant = {
    normal: { opacity: 1 },
    active: { opacity: 0 },
  };
  return (
    <div className="relative max-w-[1400px] mx-10 xl:mx-0 bg-white">
      <div
        className="flex flex-row transition-all ease-in-out duration-700 gap-[1%]   "
        style={{ transform: `translateX(-${current * 100 + current}%)` }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            className="rounded-[20px]"
            src={image.url}
            alt={image.title}
            width={1400}
            height={700}
          />
        ))}
      </div>
      <div className="navigation absolute w-full h-full flex top-0 left-[0px] justify-between  ">
        <button onClick={prev} className="font-bold text-zinc-50 text-4xl p-6">
          &lt;
        </button>
        <button onClick={next} className="font-bold text-zinc-50 text-4xl p-6">
          &gt;
        </button>
      </div>
    </div>
  );
}
