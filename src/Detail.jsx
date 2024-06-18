import { motion, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Detail({ iconClass, title, description, from, to }) {
  const pRef = useRef();

  useEffect(() => {
    const pText = pRef.current;
    const caloriesValueControl = animate(from, to, {
      duration: 3,
      delay: 0.5,
      ease: "easeOut",
      onUpdate(value) {
        pText.textContent = Math.round(value);
      },
    });

    return () => {
      caloriesValueControl.stop();
    };
  }, [from, to]);

  return (
    <div className="font-Montserrat flex flex-col justify-center items-center">
      <div className="w-full pt-10 flex justify-center items-center">
        <i className={`${iconClass} block text-7xl m-auto`}></i>
      </div>

      <h3 className="text-center text-2xl">{title}</h3>
      <p>{description}</p>
      <motion.p className="text-xl" ref={pRef}></motion.p>
    </div>
  );
}
