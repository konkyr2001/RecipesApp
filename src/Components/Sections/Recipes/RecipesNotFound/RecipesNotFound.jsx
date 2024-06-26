import ErrorImg from "../../../../Images/Sections/Recipes/close.png";
import "./RecipesNotFound.css";
import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";

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
    setOpenModal(false);
    setNotFound(false);
  }

  return createPortal(
    <dialog className="error-container z-30" ref={dialogRef}>
      <div className="cookiesContent bg-red-500" id="cookiesPopup">
        <button className="close" onClick={handleButton}>
          ✖
        </button>
        <img
          src={ErrorImg}
          alt="cookies-img"
          className="w-[50px] h-auto shadow-black shadow-md rounded-[50%]"
        />
        <h1 className="text-[35px] font-bold">Error</h1>
        <p>We couldn't find recipes with your ingredients.</p>
        <button className="accept" onClick={handleButton}>
          OK
        </button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}
