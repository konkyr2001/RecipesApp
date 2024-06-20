import "./QuestionModal.css";
import { motion } from "framer-motion";

export default function QuestionModal({ visibility, message }) {
  return (
    <motion.dialog
      className="question-modal block bg-inherit absolute left-[6px] top-6 z-40"
      variants={{
        open: { scale: 1, opacity: 1 },
        close: { scale: 0, opacity: 0 },
      }}
      animate={visibility ? "open" : "close"}
      open
    >
      <div className="triangle"></div>
      <div className="bg-green-400 min-w-[230px] rounded-xl absolute left-1/2 -translate-x-1/2 py-2 px-4">
        <p style={{ textShadow: "black 0px 0px 0px" }}>{message}</p>
      </div>
    </motion.dialog>
  );
}
