"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const phrases = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  "veniam similique sunt id rerum, earum enim labore.",
  "excepturi facere voluptates eum cupiditate et impedit.",
];
function Text2() {
  const animate = {
    initial: {
      y: "120%",
      transition: {
        duration: 1.05,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    animate: (i: number) => ({
      y: "0",
      transition: {
        duration: 1.05,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.17 * i,
      },
    }),
  };
  const divRef = useRef(null);
  const isInView = useInView(divRef, { margin: "-40%" });
  console.log(isInView);
  return (
    <section className="container mx-auto p-20 flex flex-col gap-20 bg-white h-[80vh] justify-center ">
      <div ref={divRef} className="">
        {phrases.map((phrase, index) => (
          <div className="overflow-hidden max-w-[100%] mx-auto" key={index}>
            <motion.p
              variants={animate}
              initial={"initial"}
              animate={isInView ? "animate" : "initial"}
              custom={index}
              className="text-5xl font-bold m-2"
            >
              {phrase}
            </motion.p>
          </div>
        ))}
      </div>
      <div ref={divRef} className="">
        {phrases.map((phrase, index) => (
          <div className="overflow-hidden max-w-[100%] mx-auto" key={index}>
            <motion.p
              variants={animate}
              initial={"initial"}
              animate={isInView ? "animate" : "initial"}
              custom={index}
              className="text-5xl font-bold m-2"
            >
              {phrase}
            </motion.p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Text2;
