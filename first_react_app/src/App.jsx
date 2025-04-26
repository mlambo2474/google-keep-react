import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

let NOTES = [];

const App = () => {
  //passing data down using props

  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => id !== note.id);
    });
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => {
      return !prevState;
    });
  };

  const editNote =(editedNote)=>{
    setNotes(prevNotes =>{
    const newArray = prevNotes.map(note =>{
        if (editedNote.id == note.id) {
          console.log("before", note)
          note.title = editedNote.title;
          note.text = editedNote.text;
        }
        console.log("after", note)
        return note;
     })
     return newArray;
    });
      
  }

  console.log("allnotes",notes)

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          editNote={editNote}
        />
      )}
      
    </div>
  );
};

export default App;
