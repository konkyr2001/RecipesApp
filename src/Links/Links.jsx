import { useState, useEffect } from "react";
import Link from "./Link";

export default function Links() {
  const [visibleButton, setVisibleButton] = useState("0");

  useEffect(() => {
    const handleScroll = () => {
      // window width and height
      const top = document.documentElement.scrollTop;
      const bottom = top + document.documentElement.clientHeight;

      // div width and height
      const ingredientsTop = searchIngredientsSection.offsetTop;
      const ingredientsBottom =
        ingredientsTop + searchIngredientsSection.offsetHeight;

      const averageScreenHeight = Math.round((top + bottom) / 2);

      // check if average window height is bigger than div height and swap
      if (averageScreenHeight > ingredientsBottom) {
        setVisibleButton("1");
      } else {
        setVisibleButton("0");
      }
    };

    const searchIngredientsSection = document.getElementById(
      "ingredients-section"
    );
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleButton(buttonValue) {
    if (buttonValue === "0") {
      if (visibleButton === "1") setVisibleButton("0");
    } else {
      if (visibleButton === "0") setVisibleButton("1");
    }
  }

  return (
    <span className="fixed right-2 top-1/2 translate-y-[-1/2] z-20 mr-3">
      <ul className="flex justify-center items-center flex-col">
        <li className="mb-1">
          <Link
            section="ingredients-section"
            // handleButton={() => handleButton("0")}
            visibleButton={visibleButton}
            buttonValue="0"
          />
        </li>
        <li className="mt-1">
          <Link
            section="recipes-section"
            // handleButton={() => handleButton("1")}
            visibleButton={visibleButton}
            buttonValue="1"
          />
        </li>
      </ul>
    </span>
  );
}
