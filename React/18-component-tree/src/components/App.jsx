import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {

    const [listItem, setListItem] = useState("");
    const [toDoList, setToDoList] = useState([]);

    function captureInput(event) {
        setListItem(event.target.value);
    }

    function addListItem() {
        setToDoList((prevValue) => {
            return [...prevValue, listItem];
        });

        //Clear input
        setListItem("");
    }

    function createListItem(item, index) {
        return (
            <ToDoItem
                key={index}
                item={item} />
        );
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input type="text" onChange={captureInput} value={listItem} />
                <button onClick={addListItem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {toDoList.map(createListItem)}
                </ul>
            </div>
        </div>
    );
}

export default App;
