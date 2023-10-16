import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

    const [toDoList, setToDoList] = useState([]);

    function addListItem(listItem) {
        setToDoList((prevValue) => {
            return [...prevValue, listItem];
        });
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
            <InputArea
                addListItem={addListItem} />
            <div>
                <ul>
                    {toDoList.map(createListItem)}
                </ul>
            </div>
        </div>
    );
}

export default App;
