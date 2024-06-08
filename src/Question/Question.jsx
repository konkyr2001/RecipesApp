import React, { useState, useRef } from "react";
import "./Question.css";
import { motion } from "framer-motion";
import QuestionModal from "./QuestionModal";

export default function Question() {
  const [isAnimating, setIsAnimating] = useState(false);
  const modalRef = useRef();

  function handleClick() {
    setIsAnimating(true); // Set state to true to add the animate-ping class
    setTimeout(() => {
      setIsAnimating(false); // Set state to false after a short delay to remove the animate-ping class
    }, 1000); // Adjust the delay as needed to match the duration of the animation
    modalRef.current.openModal();
  }

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.2 }}
      className={`opacity-100`}
    >
      <i className="fa-solid fa-question text-[25px]"></i>
      <QuestionModal ref={modalRef} />
    </motion.button>
  );
}
