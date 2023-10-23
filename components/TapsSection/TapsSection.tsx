"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function TapsSection() {
  const [cardNum, setCardNum] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const refDD = useRef<HTMLDivElement>(null);
  const divRef1 = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);
  const divRef3 = useRef<HTMLDivElement>(null);
  const card1 = useInView(divRef1, { margin: "-50% 0% -50% 0%" });
  const card2 = useInView(divRef2, { margin: "-50% 0% -50% 0%" });
  const card3 = useInView(divRef3, { margin: "-50% 0% -50% 0%" });

  console.log(card1);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start start", "end end"],
  });
  const scrollYProgressValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );
  const { scrollYProgress: s2 } = useScroll({
    target: refDD,
    offset: ["end start", "end end"],
  });
  const s22 = useTransform(s2, [1, 0], ["0px", "100px"]);
  const s221 = useTransform(s2, [1, 0], ["100%", "92%"]);

  return (
    <motion.div
      ref={refDD}
      style={{ borderRadius: s22, width: s221 }}
      className="  bg-blue-950 text-white rounded-3xl mx-auto "
    >
      <section className=" max-w-[1200px] mx-auto">
        <div className="flex gap-10">
          <div className="flex-1">
            <div className="flex h-screen sticky inset-0 items-center">
              <div className="max-w-[70%] flex gap-10 flex-col">
                <h1 className="text-7xl font-bold">
                  Create at the speed of thought.
                </h1>
                <p>
                  Focus on your getting your thoughts out and crafting the best
                  message while Chronicle does the heavy lifting for you
                </p>
              </div>
            </div>
          </div>
          <div ref={divRef} className="flex-1 h-[700vh] relative">
            <div
              ref={divRef1}
              className="z-[-1000] absolute h-[calc(100%/3)] top-[0px]"
            ></div>
            <div
              ref={divRef2}
              className="z-[-1000] absolute h-[calc(100%/3)] top-[calc((100%/3)*1)]"
            ></div>
            <div
              ref={divRef3}
              className="z-[-1000] absolute h-[calc(100%/3)] top-[calc((100%/3)*2)]"
            ></div>

            <div className="flex h-screen sticky top-0 left-0 w-full items-center">
              <div className="absolute h-full top-0 left-0 w-full flex items-center pr-16 justify-center">
                <div
                  className={` box w-full bg-gray-100 text-black aspect-square  rounded-3xl  flex  justify-center items-center transition-all duration-[0.8s] ease-in-out ${
                    card1 == false
                      ? "scale-[0.6] opacity-0 translate-y-[250px] invisible "
                      : "scale-[1] opacity-1 translate-y-[0%] visible"
                  }`}
                >
                  card-1
                </div>
              </div>
              <div className="absolute h-full top-0 left-0 w-full flex items-center pr-16 justify-center">
                <div
                  className={`box w-full  bg-gray-100 text-black  aspect-square  rounded-3xl flex  justify-center items-center  transition-all duration-[0.8s] ease-in-out ${
                    card2 == false
                      ? "scale-[0.6] opacity-0 translate-y-[250px] invisible"
                      : "scale-[1] opacity-1 translate-y-[0%] visible"
                  }`}
                >
                  card-2
                </div>
              </div>
              <div className="absolute h-full top-0 left-0 w-full flex items-center pr-16 justify-center">
                <div
                  className={`box  w-full bg-gray-100 text-black  aspect-square  rounded-3xl flex  justify-center items-center transition-all duration-[0.8s] ease-in-out ${
                    card3 == false
                      ? "scale-[0.6] opacity-0 translate-y-[250px] invisible"
                      : "scale-[1] opacity-1 translate-y-[0%] visible"
                  }`}
                >
                  card-3
                </div>
              </div>
              <div className="absolute top-[50%] right-0 -translate-y-[50%] flex flex-col items-center gap-2">
                <span className="text-[12px] opacity-40">0 1</span>
                <div className="w-[4px] h-[400px] bg-[#232323] relative rounded-full overflow-hidden">
                  <motion.span
                    className="absolute top-0 left-0 w-full bg-[#A594FD] rounded-full"
                    transition={{ delay: 0.1 }}
                    style={{ height: scrollYProgressValue }}
                  ></motion.span>
                </div>
                <span className="text-[12px] opacity-40">0 3</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default TapsSection;
