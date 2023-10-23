"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
const text =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia  eveniet fugit quisquam distinctio voluptatibus deleniti consequuntur  nulla vel, reprehenderit doloribus eum voluptas molestias vero, unde  voluptatum amet voluptates veritatis consectetur?";

export default function TextAnimation() {
  const refs = useRef<HTMLSpanElement[]>([]);
  const divRef = useRef(null);
  const pRef = useRef(null);

  const createAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: divRef.current,
        start: "top center",
        end: "bottom center",
        markers: true,
        scrub: true,
      },
    });
    tl.to(refs.current, {
      opacity: 1,
      stagger: 0.6,
    });
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  });
  const splitWords = (phrase: string) => {
    let body: React.JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      body.push(
        <span
          className="opacity-0"
          ref={(e) => {
            refs.current.push(e!);
          }}
          key={word + "_" + i}
        >{`${word} `}</span>
      );
    });
    return body;
  };
  return (
    <section className="container mx-auto">
      <div ref={divRef} className="h-[400vh] ">
        <div className="text-7xl sticky top-[0] left-0 h-screen ">
          <div className="relative w-full h-full flex items-center justify-center">
            <p
              ref={pRef}
              className="absolute flex flex-wrap text-gray-300 opacity-1"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              eveniet fugit quisquam distinctio voluptatibus deleniti
              consequuntur nulla vel, reprehenderit doloribus eum voluptas
              molestias vero, unde voluptatum amet voluptates veritatis
              consectetur?
            </p>
            <p className="absolute opacity-1">{splitWords(text)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
