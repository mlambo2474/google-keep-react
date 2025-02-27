import "./Form.css";
import React, { useState } from "react";
import { uid } from 'uid';

const Form = (props) => {
 console.log(props)
  //THE BELOW COMMENTED CODE IS THE BEST PRATCTISE OF USING STATE
  //   const [userInput, setUserInput] = useState({
  //     title : "",
  //     text : ""
  //   })
  //  const onTitleChangeHandler = (event) => setUserInput((prevState) =>{
  //    return{
  //     ...prevState,
  //     title: event.target.value
  //    }
  //  })

  //  const onTextChangeHandler = (event) => setUserInput((prevState) =>{
  //   return {
  //     ...prevState,
  //     text: event.target.value
  //   }
  //  }
  // )

  //BUT  WILL USE THIS FOR LEARNING PURPOSES
  const {edit,selectedNote, toggleModal} = props
  const [title, setTitle] = useState((edit && selectedNote.title) || "" );
  const [text, setText] = useState((edit && selectedNote.text) || "" );
  const [isActiveForm, setIsActiveForm] = useState(edit);

  const onTitleChangeHandler = (event) => setTitle(event.target.value);
  const onTextChangeHandler = (event) => {
    setText(event.target.value);
    setIsActiveForm(true);
  }
  const handleSubmitForm = (event) => {
    event.preventDefault();
    if(!edit){
      props.addNote({
        id: uid(),
        title,
        text,
      });
   
      setIsActiveForm(false);
    }else{
      props.editNote({
        id: selectedNote.id,
        title,
        text
      });
      toggleModal();
    }
   

    setTitle("");
    setText("");
    // setUserInput({
    //   title: "",
    //   text: ""
    // })
  
  };

  const formClickHandler = () => {
    setIsActiveForm(true);
  };

  return (
    <div>
      <div className="form-container active-form" onClick={formClickHandler}>
        <form
          className={isActiveForm ? "form" : ""}
          onSubmit={handleSubmitForm}
        >
          {isActiveForm && (
            <input
              onChange={onTitleChangeHandler}
              value={title}
              type="text"
              className="note-title"
              placeholder="Title"
            />
          )}

          <input
            onChange={onTextChangeHandler}
            value={text}
            type="text"
            className="note-text"
            placeholder="Take a note..."
          />

          {isActiveForm ? (
            <div className="form-actions">
              <div className="icons">
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    add_alert
                  </span>
                  <span className="tooltip-text">Remind me</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    person_add
                  </span>
                  <span className="tooltip-text">Collaborator</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    palette
                  </span>
                  <span className="tooltip-text">Change Color</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    image
                  </span>
                  <span className="tooltip-text">Add Image</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    archive
                  </span>
                  <span className="tooltip-text">Archive</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    more_vert
                  </span>
                  <span className="tooltip-text">More</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    undo
                  </span>
                  <span className="tooltip-text">Undo</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    redo
                  </span>
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>
              <button className="close-btn" type="submit">
                close
              </button>
            </div>
          ) : (
            <div className="form-actions">
              <div className="tooltip">
                <span className="material-symbols-outlined hover">
                  check_box
                </span>
                <span className="tooltip-text">New List</span>
              </div>

              <div className="tooltip">
                <span className="material-symbols-outlined hover">brush</span>
                <span className="tooltip-text">New Drawing</span>
              </div>

              <div className="tooltip">
                <span className="material-symbols-outlined hover">image</span>
                <span className="tooltip-text">New Image</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;

{
  /* <div className="form-container  inactive-form" onClick={formClickHandler} >
<form>
 <input type="text" className="note-text" placeholder="Take a note..." />

 <div className="form-actions">

   <div className="tooltip">
     <span className="material-symbols-outlined hover">check_box</span>
     <span className="tooltip-text">New List</span>
   </div>

   <div className="tooltip">
     <span className="material-symbols-outlined hover">brush</span>
     <span className="tooltip-text">New Drawing</span>
   </div>

   <div className="tooltip">
     <span className="material-symbols-outlined hover">image</span>
     <span className="tooltip-text">New Image</span>
   </div>

 </div>
</form>
</div> */
}
