import React, { useState } from "react";

function App() {
    let currentTime = new Date().toLocaleTimeString();

    const [time, setTime] = useState(currentTime);

    function showTime() {
        currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
    }

    return (
        <div className="container">
            <h1>{time}</h1>
            <button onClick={showTime}>Get Time</button>
        </div>
    );
}

export default App;
