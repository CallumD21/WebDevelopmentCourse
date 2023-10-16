import React, { useState } from "react";

function InputArea(props) {
    const [listItem, setListItem] = useState("");

    function captureInput(event) {
        setListItem(event.target.value);
    }

    function onAdd() {

        props.addListItem(listItem);

        //Clear input
        setListItem("");
    }

    return (
        <div className="form">
            <input type="text" onChange={captureInput} value={listItem} />
            <button onClick={onAdd}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;