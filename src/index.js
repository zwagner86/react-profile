import React from 'react';
import ReactDOM from 'react-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faGlobeAmericas,
    faMapMarkerAlt,
    faPhone,
    faStar
} from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize('UA-128773850-1');
}

library.add(fab, faEnvelope, faGlobeAmericas, faMapMarkerAlt, faPhone, faStar);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
