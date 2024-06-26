import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./LightDarkMode.css";

import lightSvg from "../../../Images/Header/lightMode.svg";
import darkSvg from "../../../Images/Header/darkMode.svg";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function LightDarkMode() {
  const [isOn, setIsOn] = useState(localStorage.getItem("darkMode") === "true");

  const toggleSwitch = () => setIsOn(!isOn);

  useEffect(() => {
    const welcomeSection = document.getElementById("welcome-section");
    const welcomeWave = document.getElementById("welcome-wave");
    const welcomeMixTitle = document.getElementById("welcome-mix-title");
    if (isOn) {
      localStorage.setItem("darkMode", true);
      welcomeSection.classList.remove("welcome-section");
      welcomeSection.classList.add("welcome-section-darkMode");
      // welcomeWave.classList.remove("welcome-wave");
      // welcomeWave.classList.add("welcome-wave-darkMode");
    } else {
      localStorage.setItem("darkMode", false);
      welcomeSection.classList.add("welcome-section");
      welcomeSection.classList.remove("welcome-section-darkMode");
      // welcomeWave.classList.add("welcome-wave");
      // welcomeWave.classList.remove("welcome-wave-darkMode");
    }
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
