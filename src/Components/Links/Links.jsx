import { useState, useEffect } from "react";

import Link from "./Link";
import "./css/LinksDark.css";

export default function Links() {
  const [visibleButton, setVisibleButton] = useState("0");

  useEffect(() => {
    const handleScroll = () => {
      // window width and height
      const top = Math.round(document.documentElement.scrollTop);

      // // div width and height
      const welcomeTop = welcomeSection.offsetTop;
      const websiteDetailsTop = websiteDetailsSection.offsetTop;
      const ingredientsTop = ingredientsSection.offsetTop;
      const recipesTop = recipesSection.offsetTop;

      if (recipesTop <= top) {
        setVisibleButton("3");
      } else if (ingredientsTop <= top) {
        setVisibleButton("2");
      } else if (websiteDetailsTop <= top) {
        setVisibleButton("1");
      } else if (welcomeTop <= top) {
        setVisibleButton("0");
      }
    };

    const welcomeSection = document.getElementById("welcome-section");
    const websiteDetailsSection = document.getElementById(
      "website-details-section"
    );
    const ingredientsSection = document.getElementById("ingredients-section");
    const recipesSection = document.getElementById("recipes-section");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <span
      className="fixed right-2 top-1/2 translate-y-[-1/2] z-20 mr-0 lg:mr-3"
      id="links"
    >
      <ul className="flex justify-center items-center flex-col">
        <li>
          <Link
            section="welcome-section"
            visibleButton={visibleButton}
            buttonValue="0"
          />
        </li>
        <li className="mt-1">
          <Link
            section="website-details-section"
            visibleButton={visibleButton}
            buttonValue="1"
          />
        </li>
        <li className="mt-1">
          <Link
            section="ingredients-section"
            visibleButton={visibleButton}
            buttonValue="2"
          />
        </li>
        <li className="mt-1">
          <Link
            section="recipes-section"
            visibleButton={visibleButton}
            buttonValue="3"
          />
        </li>
      </ul>
    </span>
  );
}
