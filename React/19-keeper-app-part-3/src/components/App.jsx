import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

let noteId = 1;

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(title, content) {
        const newNote = {
            id: noteId++,
            title: title,
            content: content
        };

        setNotes(prevValue => {
            let newNotes = [...prevValue, newNote];

            return [...prevValue, newNote];
        });
    }

    function deleteNote(noteId) {
        setNotes(prevValue => {
            let newNotes = prevValue.filter(note => note.id != noteId);

            return newNotes;
        });
    }

    function createNote(note) {
        return (<Note key={note.id} id={note.id} title={note.title} content={note.content} deleteNote={deleteNote} />)
    }

    return (
        <div>
            <Header />
            <CreateArea addNote={addNote} />
            {notes.map(createNote)}
            <Footer />
        </div>
    );
}

export default App;
