import { motion } from "framer-motion";

import "./InformationModal.css";
import { useEffect, useRef } from "react";

export default function InformationButton({ visibility, message, buttonRef }) {
  const modalRef = useRef(null);

  function elementInViewport(el) {
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    console.log(el.getBoundingClientRect().left);
    console.log(el.getBoundingClientRect().right);
    console.log("width: ",width);
    const total = el.getBoundingClientRect().left + Math.round(width/2);
    console.log("total: ", total);
    console.log("window.scrollX: ",window.innerWidth);
    if (total > window.innerWidth) {
      console.log("distance to be made: ", total-window.innerWidth);
      modalRef.current.style.left = `-${total-window.innerWidth}px`;

    }
  
    // while(el.offsetParent) {
    //   el = el.offsetParent;
    //   top += el.offsetTop;
    //   left += el.offsetLeft;
    // }
  
    // return (
    //   top >= window.scrollX &&
    //   left >= window.scrollY &&
    //   (top + height) <= (window.scrollY + window.innerHeight) &&
    //   (left + width) <= (window.scrollX + window.innerWidth)
    // );
  }

  useEffect(() => {
    if (visibility) {
      if (elementInViewport(modalRef.current)) {
        console.log("mpike");
      } else {
        console.log("den mpike")
      }
    }
    
  }, [visibility]);
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
        <div ref={modalRef} className="min-w-[210px] rounded-xl absolute left-1/2 -translate-x-1/2 py-2 px-2 text-[14px] font-Montserrat font-normal">
          <p style={{ textShadow: "black 0px 0px 0px" }}>{message}</p>
        </div>
      </div>
    </motion.dialog>
  );
}