import React from "react";
import Heading from "../Heading/Heading";
import SubHeading from "../SubHeading/SubHeading";
import Carousel from "./Carousel";

export default function Slider() {
  return (
    <section className="pt-[200px] h-fit">
      <div className=" container mx-auto pb-[50px]">
        <Heading title="Explore <br /> more distentions" />
        <SubHeading
          title="We want to be on each of your journeys seeking the satisfaction of
          <br />
          seeing the incorruptible beauty of nature. We can help you on an"
        />
      </div>
      <div className="  mx-auto">
        <Carousel />
      </div>
    </section>
  );
}
