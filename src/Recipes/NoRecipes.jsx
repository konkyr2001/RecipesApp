import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./NoRecipes.css";

export default function NoRecipes() {
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const [constraints, setConstraints] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  useEffect(() => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();

      const boxWidth = boxRef.current.getBoundingClientRect().width;
      const boxHeight = boxRef.current.getBoundingClientRect().height;

      const heightSize = Math.round(
        containerRect.height / 2 - boxHeight / 2 - 45
      );
      const widthSize = Math.round(containerRect.width / 2 - boxWidth / 2 - 15);

      setConstraints({
        top: -heightSize,
        bottom: heightSize,
        left: -widthSize,
        right: widthSize,
      });

      // const div = document.createElement("div");

      // div.style.width = containerRect.width;
      // div.style.height = containerRect.height;

      // div.style.width = containerRect.width + "px";
      // div.style.height = containerRect.height + "px";
      // div.style.backgroundColor = "red";
      // div.style.position = "absolute";
      // div.style.zIndex = "5";
      // document.getElementById("no-recipes").appendChild(div);
    }
  }, [containerRef]);

  return (
    <div
      id="no-recipes"
      className="no-recipes example-container w-full h-[100vh] flex justify-center items-center relative flex-col"
      ref={containerRef}
    >
      <h1 className="text-[30px] font-semibold absolute top-[10%]">
        Oops, it looks like there are no recipes 😭
      </h1>
      <h2 className="text-[25px] absolute top-[20%]">
        But look there is a square! I wonder what it does 🤭
      </h2>
      <motion.div
        ref={boxRef}
        className="bg-blue-300 h-[150px] w-[150px] rounded-[30px] z-10"
        initial={{ opacity: 0, x: -100, scale: 0.3 }}
        // exit={{ opacity: 0, x: -100, scale: 0.3 }}
        whileInView={{ opacity: 1, x: 0, y: 0, scale: 0.6 }}
        drag
        dragConstraints={constraints}
        whileHover={{ scale: 0.8 }}
        whileTap={{ scale: 0.4 }}
      />
      <motion.div
        ref={boxRef}
        className="bg-red-300 h-[150px] w-[150px] rounded-[30px] z-10"
        initial={{ opacity: 0, x: 100, scale: 0.3 }}
        // exit={{ opacity: 0, x: -100, scale: 0.3 }}
        whileInView={{ opacity: 1, x: 0, y: 0, scale: 0.6 }}
      />
    </div>
  );
}
