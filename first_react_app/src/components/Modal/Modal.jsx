import React, {useState} from "react";
import "./Modal.css";
import Form from "../Form/Form";

const Modal = (props) => {
  const { isModalOpen, toggleModal, selectedNote, editNote} = props;

  const [hasCursor, setHasCursor] = useState(false)


   const closeModalHandler = ()=> !hasCursor &&  toggleModal();
   const handleMouseOverModal = () => setHasCursor(true);
   const handleMouseOutModal= () => setHasCursor(false);

  return (
    <div className={`modal ${isModalOpen ? "open-modal" : ""}`} onClick={closeModalHandler}>
      <div className="modal-content" onMouseOver={handleMouseOverModal} onMouseOut={handleMouseOutModal}>
        <Form  selectedNote={selectedNote}   toggleModal={toggleModal} editNote={editNote} edit />
      </div>
    </div>
  );
};

export default Modal;
