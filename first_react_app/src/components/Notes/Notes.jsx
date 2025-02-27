import "./Notes.css";
import Note from "./Note";

const Notes = (props) => {
  //console.log(props.notes[0].id);

  const { notes, deleteNote, toggleModal, setSelectedNote } = props;

  return (
    <div className="notes">
      {notes.length === 0 && <p>Notes you add appear here</p>}
      {notes.length != 0 &&
        notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            deleteNote={deleteNote}
            toggleModal={toggleModal}
            setSelectedNote={ setSelectedNote}
          />
        ))}
      {/* {notes.length === 0 ? (
        <p>Notes you add appear here.</p>
      ) : (
        notes.map((note, index) => (
          <Note key={index} id={note.id} title={note.title} text={note.text} />
        ))
      )} */}
    </div>
  );
};
export default Notes;
