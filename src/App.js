import React from "react";
import Profile from "./profile/Profile";
import Skills from "./skills/Skills";
import "./App.css";

const App = () => {
    return (
        <div className="App container profile">
            <Profile />
            <Skills />
        </div>
    );
};

export default App;
