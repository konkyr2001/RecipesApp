import QuestionModal from "./QuestionModal";
import { useState } from "react";

export default function QuestionButton({ text }) {
  const [caloriesQuestionVisibility, setCaloriesQuestionVisibility] =
    useState(false);
  return (
    <div className="inline-block relative">
      <button
        className="rounded-[50%] outline outline-2 outline-slate-400 w-4 h-4 flex justify-center items-center ml-2"
        onClick={() => setCaloriesQuestionVisibility((prevState) => !prevState)}
      >
        <i className="fa-solid fa-question text-[13px]"></i>
      </button>
      <QuestionModal visibility={caloriesQuestionVisibility} message={text} />
    </div>
  );
}
