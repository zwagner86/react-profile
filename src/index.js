import React from 'react';
import ReactDOM from 'react-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
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

if (process.env.CONTEXT === 'production') {
    ReactGA.initialize('UA-123791717-1');
}

library.add(faEnvelope, faGlobeAmericas, faMapMarkerAlt, faPhone, faStar);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
