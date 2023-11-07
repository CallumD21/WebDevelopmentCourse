import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function createNote(note) {
    return (<Note key={note.id} title={note.title} content={note.content} />)
}

function App() {
    let initialState = [
        {
            id: 1,
            title: "Note title",
            content: "Note content"
        }
    ];
    const [notes, setNotes] = useState(initialState);

    return (
        <div>
            <Header />
            <CreateArea />
            {notes.map(createNote)}
            <Footer />
        </div>
    );
}

export default App;
