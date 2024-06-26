import "./RandomFood.css";
import { useState, useRef, useEffect } from "react";
import { foods, size } from "./RandomFoodObjects";
import { motion } from "framer-motion";

export default function RandomFood() {
  const [random, setRandom] = useState(Math.floor(Math.random() * size));
  const [boxVisibility, setBoxVisibility] = useState(false);
  const iRef = useRef();
  const modalRef = useRef();
  const [iconPressed, setIconPressed] = useState(false);

  useEffect(() => {
    window.onclick = (event) => {
      if (boxVisibility) {
        if (
          !modalRef.current.contains(event.target) &&
          event.target != iRef.current
        ) {
          setBoxVisibility(false);
        }
      }
    };
  }, [boxVisibility]);

  function handleRandomFood() {
    setBoxVisibility((prevState) => !prevState);
  }

  function handleNext() {
    setIconPressed(true);
    setTimeout(() => {
      setIconPressed(false);
    }, 200);
    setRandom((prevState) => {
      var newRandom;
      do {
        newRandom = Math.floor(Math.random() * size);
      } while (prevState === newRandom);
      return newRandom;
    });
  }

  return (
    <motion.div
      animate={{ scale: iconPressed ? 0.8 : 1 }}
      className="randomFood-container relative z-10"
    >
      <motion.i
        ref={iRef}
        onClick={handleRandomFood}
        className={`cursor-pointer text-[25px] fa-solid fa-bowl-food m-0 ${
          boxVisibility ? "visibleFood" : "hiddenFood"
        }`}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
      ></motion.i>
      <motion.div
        variants={{
          open: { scale: 1, opacity: 1 },
          closed: { scale: 0, opacity: 0 },
        }}
        animate={boxVisibility ? "open" : "closed"}
        ref={modalRef}
        className={`cursor-default box absolute right-0 ${
          boxVisibility ? "showBox" : "hideBox"
        }`}
      >
        <motion.button
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          onClick={handleNext}
          className="absolute right-[13px] bg-red-400 rounded-md w-7"
        >
          <i className="fa-solid fa-chevron-right pt-1"></i>
        </motion.button>
        <h5>{foods[random].title}</h5>
        <p>{foods[random].information}</p>
      </motion.div>
    </motion.div>
  );
}
