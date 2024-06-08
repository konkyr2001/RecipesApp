import { forwardRef, useImperativeHandle, useRef } from "react";
import "./QuestionModal.css";
import { createPortal } from "react-dom";
const QuestionModal = forwardRef(function QuestionModal(props, ref) {
  const modalRef = useRef();

  useImperativeHandle(ref, function () {
    return {
      openModal() {
        modalRef.current.showModal();
      },
    };
  });

  function handleModal(event) {
    event.stopPropagation();
    modalRef.current.close();
  }

  return createPortal(
    <dialog ref={modalRef} onClick={handleModal} className="question-dialog">
      <div className="m-auto w-[500px] bg-red-500 text-center">
        <p>this is an example</p>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default QuestionModal;
