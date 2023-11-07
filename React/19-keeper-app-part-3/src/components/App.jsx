import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

let noteId = 1;

function createNote(note) {
    return (<Note key={note.id} title={note.title} content={note.content} />)
}

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

            return newNotes;
        });
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
