import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

let noteId = 1;

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        const newNote = {
            id: noteId++,
            title: note.title,
            content: note.content
        };

        setNotes(prevNotes => {
            let newNotes = [...prevNotes, newNote];

            return [...prevNotes, newNote];
        });
    }

    function deleteNote(noteId) {
        setNotes(prevNotes => {
            let newNotes = prevNotes.filter(note => note.id != noteId);

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
