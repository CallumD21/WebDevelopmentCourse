import React, { useState } from "react";

function App() {

    const [name, setName] = useState("");
    const [displayName, setDisplayName] = useState("");

    function captureNameChange(event) {
        setName(event.target.value);
    }

    function submitName(event) {
        setDisplayName(name);

        event.preventDefault();
    }

    return (
        <div className="container">
            <form onSubmit={submitName}>
                <h1>Hello {displayName}</h1>
                <input type="text" placeholder="What's your name?" onChange={captureNameChange} value={name} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
