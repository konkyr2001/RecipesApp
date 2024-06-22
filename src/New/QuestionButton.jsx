import { useState, useEffect, useRef } from "react";
import QuestionModal from "./QuestionModal";

export default function QuestionButton({ text }) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const buttonRef = useRef();
  const iRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      const modal = document.getElementById("question-modal");

      // Check if the click is outside the modal and not on the button or icon
      if (
        modal &&
        !modal.contains(event.target) &&
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
    <div className="inline-block relative">
      <button
        id="question-button"
        className="rounded-[50%] outline outline-2 outline-slate-400 w-4 h-4 flex justify-center items-center ml-2"
        onClick={() => setModalVisibility((prevState) => !prevState)}
        ref={buttonRef}
      >
        <i
          id="question-icon"
          className="fa-solid fa-question text-[13px]"
          ref={iRef}
        ></i>
      </button>
      <QuestionModal visibility={modalVisibility} message={text} />
    </div>
  );
}
