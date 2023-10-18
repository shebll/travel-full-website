import Image from "next/image";
import React from "react";
import Heading from "../Heading/Heading";
import SubHeading from "../SubHeading/SubHeading";

function Hero() {
  return (
    <div className="container mx-auto flex justify-between gap-28 py-[100px] flex-col xl:flex-row  items-center">
      <div className="hero bottom-[-30%]"></div>
      <div className="flex-1 flex gap-16  xl:gap-10 flex-col">
        <Heading
          title="Putuk Truno <br />
          Camp Area"
        />
        <SubHeading
          title="We want to be on each of your journeys seeking the satisfaction of
          <br />
          seeing the incorruptible beauty of nature. We can help you on an
          <br />
          adventure around the world in just one app"
        />
        <div className="flex flex-col md:flex-row  justify-center lg:justify-start  items-center gap-8">
          <div className="flex flex-row gap-2">
            <Image
              src={"/images/star.svg"}
              alt="star image"
              width={30}
              height={20}
            />
            <Image
              src={"/images/star.svg"}
              alt="star image"
              width={30}
              height={20}
            />
            <Image
              src={"/images/star.svg"}
              alt="star image"
              width={30}
              height={20}
            />
            <Image
              src={"/images/star.svg"}
              alt="star image"
              width={30}
              height={20}
            />
            <Image
              src={"/images/star.svg"}
              alt="star image"
              width={30}
              height={20}
            />
          </div>
          <p className="text-2xl">
            <span className="font-bold text-2xl ">198k </span>
            Excellent Reviews
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 items-center justify-center lg:justify-start  ">
          <button className="btn prim w-full lg:w-fit"> Download App</button>
          <button className="btn sec flex flex-row gap-2 items-center w-full lg:w-fit justify-center">
            <Image
              src={"/images/play.svg"}
              alt="star image"
              width={20}
              height={20}
            />
            How we work?
          </button>
        </div>
      </div>
      <div className="relative flex flex-1 items-start justify-start">
        <div className="bg-[#292C27] relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 text-white text-lg">
          <div className="flex justify-between flex-col">
            <div className="flex justify-between ">
              <p className="text-gray-400">Location</p>
              <Image
                src={"/images/close.svg"}
                alt="star image"
                width={30}
                height={30}
              />
            </div>
            <div className=" font-bold text-xl">Aguas Calientes</div>
          </div>
          <div className="flex justify-between">
            <div className="">
              <p className="text-gray-400">Distance</p>
              <p className=" font-bold text-xl">173.28 mi</p>
            </div>
            <div className="">
              <p className="text-gray-400">Elevation</p>
              <p className=" font-bold text-xl">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
