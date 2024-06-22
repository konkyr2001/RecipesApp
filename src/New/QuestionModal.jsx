import React from "react";
import "./QuestionModal.css";
import { motion } from "framer-motion";

export default function QuestionModal({ visibility, message }) {
  return (
    <motion.dialog
      id="question-modal"
      className="question-modal block bg-inherit absolute left-[6px] top-6 z-40"
      variants={{
        open: { scale: 1, opacity: 1 },
        close: { scale: 0, opacity: 0 },
      }}
      animate={visibility ? "open" : "close"}
      open={visibility}
    >
      <div>
        <div className="triangle"></div>
        <div className="min-w-[210px] rounded-xl absolute left-1/2 -translate-x-1/2 py-2 px-2 text-[14px] font-Montserrat font-normal">
          <p style={{ textShadow: "black 0px 0px 0px" }}>{message}</p>
        </div>
      </div>
    </motion.dialog>
  );
}
