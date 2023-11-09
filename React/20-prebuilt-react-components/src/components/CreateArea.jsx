import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
    const emptyNote = {
        title: "",
        content: ""
    };

    const [note, setNote] = useState(emptyNote);

    function updateNote(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            const newNote = {
                ...prevNote,
                [name]: value
            };;

            return newNote;
        });
    }

    function onSubmit(event) {
        event.preventDefault();
        props.addNote(note);

        //Clear data for next entry
        setNote(emptyNote);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="title" placeholder="Title" value={note.title} onChange={updateNote} />
                <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={updateNote} />
                <Fab>
                    <AddIcon />
                </Fab>
            </form>
        </div>
    );
}

export default CreateArea;

