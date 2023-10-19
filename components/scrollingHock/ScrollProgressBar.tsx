"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const currentProgress = (scrollY / maxScroll) * 100;
      setScrollProgress(currentProgress);
    };

    const handleScroll = () => {
      calculateScrollProgress();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({ width: `${scrollProgress}%` });
  }, [scrollProgress, controls]);

  return (
    <motion.div
      initial={{ width: "0%" }}
      animate={controls}
      className="scroll-progress-bar"
    />
  );
};

export default ScrollProgressBar;
