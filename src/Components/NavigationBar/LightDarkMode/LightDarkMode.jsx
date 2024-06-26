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
    const welcomeWave = document.getElementById("welcome-wave-fill");
    const detailsSection = document.getElementById("website-details-section");
    const ingredientSection = document.getElementById("ingredients-section");
    const recipeSection = document.getElementById("recipes-section");
    const footer = document.getElementById("footer");
    if (isOn) {
      localStorage.setItem("darkMode", true);
      welcomeSection.classList.remove("welcome-section-lightMode");
      welcomeSection.classList.add("welcome-section-darkMode");

      welcomeWave.style.fill = "url(#gradient-Dark)";

      detailsSection.classList.remove("website-details-section-lightMode");
      detailsSection.classList.add("website-details-section-darkMode");

      ingredientSection.classList.remove("ingredients-section-lightMode");
      ingredientSection.classList.add("ingredients-section-darkMode");

      footer.classList.remove("footer-lightMode");
      footer.classList.add("footer-darkMode");

      recipeSection.classList.remove("recipes-section-lightMode");
      recipeSection.classList.add("recipes-section-darkMode");
    } else {
      localStorage.setItem("darkMode", false);
      welcomeSection.classList.add("welcome-section-lightMode");
      welcomeSection.classList.remove("welcome-section-darkMode");

      welcomeWave.style.fill = "url(#gradient)";

      detailsSection.classList.add("website-details-section-lightMode");
      detailsSection.classList.remove("website-details-section-darkMode");

      ingredientSection.classList.add("ingredients-section-lightMode");
      ingredientSection.classList.remove("ingredients-section-darkMode");

      footer.classList.add("footer-lightMode");
      footer.classList.remove("footer-darkMode");

      recipeSection.classList.add("recipes-section-lightMode");
      recipeSection.classList.remove("recipes-section-darkMode");
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
