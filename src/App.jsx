import React, {Fragment} from 'react';
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes
} from 'react-router-dom';
import SEOMeta from './common/meta/SEOMeta';
import Profile from './profile/Profile';
import Resume from './resume/Resume';

const redirectToHome = () => {
    return <Navigate to="/" />;
};

const App = () => {
    return (
        <Fragment>
            <SEOMeta />
            <Router>
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={<Profile />}
                    />
                    <Route
                        path="/resume"
                        exact
                        element={<Resume />}
                    />
                    <Route render={redirectToHome} />
                </Routes>
            </Router>
        </Fragment>
    );
};

export default App;
