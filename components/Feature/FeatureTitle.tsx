"use client";
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useFeatureStore } from "./Store";

type props = {
  title: string;
  paragraph: string;
  index: number;
  id: string;
};
function FeatureTitle({ title, paragraph, index, id }: props) {
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { margin: "-30% 0% -70% 0%" });
  const setFeatureInView = useFeatureStore((state) => state.setInViewFeature);
  const idFeatureInView = useFeatureStore((state) => state.inViewFeature);
  const paragraphArray = paragraph.split("..");

  useEffect(() => {
    if (isInView) {
      setFeatureInView(id);
    }
    if (!isInView && idFeatureInView === id) {
      setFeatureInView(null);
    }
  }, [id, idFeatureInView, isInView, setFeatureInView]);
  return (
    <div
      ref={textRef}
      className={`py-[10rem] flex justify-center items-start gap-10 flex-col   ${
        isInView ? "text-gray-900" : "text-gray-500"
      }`}
    >
      <div className="flex justify-center items-start flex-col gap-1">
        <p>0{index + 1}</p>
        <h1 className="text-8xl font-bold">{title}</h1>
      </div>
      <p className="text-2xl font-medium ">{paragraphArray[0]}.</p>
      <p className="text-2xl font-medium ">{paragraphArray[1]}</p>
    </div>
  );
}

export default FeatureTitle;
