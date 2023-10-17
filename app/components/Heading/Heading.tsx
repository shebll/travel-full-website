import Image from "next/image";
import React from "react";
type props = {
  title: string;
};
function Heading({ title }: props) {
  const titleArray = title.split("<br />");
  return (
    <h1
      className="text-[50px] sm:text-[70px] md:text-[90px] lg:text-[100px]
      leading-[50px] sm:leading-[70px] md:leading-[90px] lg:leading-[100px] font-bold relative"
    >
      <Image
        src={"/images/logo.svg"}
        alt="logo image"
        width={60}
        height={60}
        className=" absolute top-[-40px] left-0 "
      />
      {titleArray.at(0)}
      <br />
      {titleArray.at(1)}
    </h1>
  );
}

export default Heading;
