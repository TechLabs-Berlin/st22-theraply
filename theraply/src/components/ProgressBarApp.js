import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

function ProgressBarApp() {
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 10000);
    }, []);

    return (
        <div className="App">
            <ProgressBar bgcolor={"#0E0E73"} completed={completed} />
        </div>
    );
}

export default ProgressBarApp;
