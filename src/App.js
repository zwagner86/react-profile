import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import Profile from "./profile/Profile";
import Resume from "./resume/Resume";
import "./App.css";

const redirectToHome = () => {
    return <Redirect to="/" />;
};

const App = () => {
    return (
        <Router>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={Profile}
                />
                <Route
                    path="/resume"
                    exact
                    component={Resume}
                />
                <Route render={redirectToHome} />
            </Switch>
        </Router>
    );
};

export default App;
