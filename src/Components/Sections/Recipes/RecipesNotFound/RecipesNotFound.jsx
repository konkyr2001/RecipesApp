import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";

import errorImg from "../../../../Images/Sections/Recipes/close.png";
import "./RecipesNotFound.css";

export default function RecipesNotFound({ setNotFound }) {
  const [openModal, setOpenModal] = useState(true);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (openModal) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [openModal]);

  function handleButton() {
    console.log("useEffect")
    setOpenModal(false);
    setNotFound(false);
  }

  return createPortal(
    <dialog className="error-container z-30" ref={dialogRef}>
      <div className="errorContent bg-red-500 w-[300px] sm:w-[400px] pt-[15px] px-[8px] pb-[25px] sm:pt-[20px] sm:px-[20px] sm:pb-[30px] lg:pt-[30px] lg:px-[30px] lg:pb-[70px] lg:w-[500px]" id="cookiesPopup">
        <button className="close text-base lg:text-xl sm:mb-3 lg:mb-5" onClick={handleButton}> 
          ✖
        </button>
        <img
          src={errorImg}
          alt="cookies-img"
          className="w-[25px] mb-3 sm:mb-7 lg:mb-10 h-auto shadow-black shadow-md rounded-[50%] sm:w-[35px] lg:w-[40px]"
        />
        <h1 className="text-2xl mb-2 font-bold lg:text-[35px]">Error</h1>
        <p className="text-sm mb-5 sm:mb-7 sm:text-base lg:text-lg">We couldn't find recipes with your ingredients.</p>
        <button className="sm:mb-3 lg:mb-0 text-sm sm:text-base accept p-[6px] lg:p-[12px]" onClick={handleButton}>
          OK
        </button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}
