import ErrorImg from "../img/close.png";
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
    <dialog className="error-container" ref={dialogRef}>
      <div className="cookiesContent bg-red-500" id="cookiesPopup">
        <button className="close" onClick={handleButton}>
          ✖
        </button>
        <img src={ErrorImg} alt="cookies-img" />
        <p>
          We use cookies for improving user experience, analytics and marketing.
        </p>
        <button className="accept" onClick={handleButton}>
          That's fine!
        </button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}
