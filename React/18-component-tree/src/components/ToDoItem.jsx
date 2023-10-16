import React from "react";
import { useState } from "react";

function ToDoItem(props) {
    const [lineThrough, setLineThrough] = useState(false);

    function toggleLineThrough() {
        setLineThrough(prevValue => !prevValue);
    }

    const listItemStyle = {
        textDecoration: lineThrough ? "line-through" : "none"
    };

    return (
        <li style={listItemStyle} onClick={toggleLineThrough}>{props.item}</li>
    );
}

export default ToDoItem;
