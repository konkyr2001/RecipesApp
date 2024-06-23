import { motion, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Detail({ image, title, description, from, to }) {
  const pRef = useRef();

  useEffect(() => {
    if (to) {
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
    }
  }, [from, to]);

  return (
    <div className="font-Montserrat flex flex-col justify-center items-center h-full pt-[35px]">
      <div className="w-full flex justify-center items-center h-1/3">
        <img
          width="110"
          className="p-1 cursor-default rounded-[50%] bg-slate-300 outline-[5px] outline-slate-100 outline"
          src={image}
          alt="img"
        />
      </div>

      <div className="text-center text-2xl h-1/3 flex justify-center items-center">
        <h3 className=" text-slate-100 drop-shadow-2xl">{title}</h3>
      </div>

      <div className="text-xl h-1/3 text-slate-100 px-10 text-center">
        <p>{description}</p>
        {to && <motion.p className="text-xl" ref={pRef}></motion.p>}
      </div>
    </div>
  );
}
