import React, {Fragment} from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import SEOMeta from './common/meta/SEOMeta';
import Profile from './profile/Profile';
import Resume from './resume/Resume';

const redirectToHome = () => {
    return <Redirect to="/" />;
};

const App = () => {
    return (
        <Fragment>
            <SEOMeta />
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
        </Fragment>
    );
};

export default App;
