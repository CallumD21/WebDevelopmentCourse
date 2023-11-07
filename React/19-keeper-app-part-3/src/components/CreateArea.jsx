import React, { useState } from "react";

function CreateArea(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function updateTitle(event) {
        setTitle(event.target.value);
    }

    function updateContent(event) {
        setContent(event.target.value);
    }

    function onSubmit(event) {
        event.preventDefault();
        props.addNote(title, content);

        //Clear data for next entry
        setTitle("");
        setContent("");
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="title" placeholder="Title" value={title} onChange={updateTitle} />
                <textarea name="content" placeholder="Take a note..." rows="3" value={content} onChange={updateContent} />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;

