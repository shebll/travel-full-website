import React from "react";
type props = {
  title: string;
};
function SubHeading({ title }: props) {
  const pArray = title.split("<br />");
  return (
    <p
      className="text-gray-500 text-md md:text-lg
    text-center  xl:text-start"
    >
      {pArray.map((para) => (
        <>
          {para} <br />
        </>
      ))}
    </p>
  );
}

export default SubHeading;
