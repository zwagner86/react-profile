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
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

library.add(faEnvelope, faGlobeAmericas, faMapMarkerAlt, faPhone, faStar);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
