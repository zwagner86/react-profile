import React from 'react';
import ReactDOM from 'react-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
    faBars,
    faEnvelope,
    faGlobeAmericas,
    faMapMarkerAlt,
    faPhone,
    faStar,
    faTimes
} from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize('UA-128773850-1');
}

library.add(
    fab,
    faBars,
    faEnvelope,
    faGlobeAmericas,
    faMapMarkerAlt,
    faPhone,
    faStar,
    faTimes
);

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
