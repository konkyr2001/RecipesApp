import { useState, useEffect, useRef } from "react";
import QuestionModal from "./InformationModal/InformationModal";
import { motion } from "framer-motion";

export default function QuestionButton({ text, extraClass }) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const buttonRef = useRef();
  const iRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click is outside the modal and not on the button or icon
      if (
        !buttonRef.current.parentNode.contains(event.target) &&
        event.target !== buttonRef.current &&
        event.target !== iRef.current
      ) {
        setModalVisibility(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className={`inline-block relative ${extraClass}`}>
      <motion.button
        id="question-button"
        className="rounded-[50%] outline outline-2 outline-slate-300 w-4 h-4 flex justify-center items-center ml-2 p-[8px]"
        onClick={() => setModalVisibility((prevState) => !prevState)}
        ref={buttonRef}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <i
          id="question-icon"
          className="fa-solid fa-question text-[14px] text-slate-300"
          ref={iRef}
        ></i>
      </motion.button>
      <QuestionModal visibility={modalVisibility} message={text} />
    </div>
  );
}
