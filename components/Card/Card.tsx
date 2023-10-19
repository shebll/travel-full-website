"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

function Card() {
  const devRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: devRef,
    offset: ["center end", "end center"],
  });
  const scrollYProgressValue = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  return (
    <div ref={devRef} className="flex justify-center items-center card mt-20 ">
      <motion.div style={{ rotateX: scrollYProgressValue }} className="">
        <Image
          src={"/images/card.png"}
          className="rounded-3xl shadow-2xl"
          width={1400}
          height={1000}
          alt="asd"
        />
      </motion.div>
    </div>
  );
}

export default Card;
