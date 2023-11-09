import React, { useState } from "react";
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
    const emptyNote = {
        title: "",
        content: ""
    };

    const [isExpanded, setIsExpanded] = useState(false);
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

    function showFullCard() {
        setIsExpanded(true);
    }

    return (
        <div>
            <form className="create-note" onSubmit={onSubmit}>
                {isExpanded && <input name="title" placeholder="Title" value={note.title} onChange={updateNote} />}
                <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content} onChange={updateNote} onClick={showFullCard} />
                <Zoom in={isExpanded}>
                    <Fab>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;

