import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./LightDarkMode.css";
import lightSvg from "./img/brightness-high.svg";
import darkSvg from "./img/moon-stars.svg";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function LightDarkMode() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  useEffect(() => {
    console.log(isOn);
  }, [isOn]);

  return (
    <motion.div
      className="switch inline-block relative z-10"
      data-ison={isOn}
      onClick={toggleSwitch}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img
        src={lightSvg}
        alt="light mode"
        className="light-dark-svg absolute left-[6.7px] z-20"
      />
      <img
        src={darkSvg}
        alt="dark mode"
        className="light-dark-svg absolute right-[7px] z-20"
      />
      <motion.div className="handle" layout transition={spring} />
    </motion.div>
  );
}
