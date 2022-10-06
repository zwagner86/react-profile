import React from 'react';
import ReactDOM from 'react-dom/client';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faCircle as farFaCircle} from '@fortawesome/free-regular-svg-icons';
import {
    faAdjust,
    faBars,
    faBasketballBall,
    faBook,
    faCircle as fasFaCircle,
    faCode,
    faDumbbell,
    faEnvelope,
    faFilm,
    faGlobeAmericas,
    faGraduationCap,
    faHamburger,
    faHammer,
    faHeadphones,
    faMapMarkerAlt,
    faMobileAlt,
    faPhone,
    faStar,
    faTimes
} from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize('UA-128773850-1');
}

library.add(
    fab,
    faAdjust,
    faBars,
    faBasketballBall,
    faBook,
    farFaCircle,
    fasFaCircle,
    faCode,
    faDumbbell,
    faEnvelope,
    faFilm,
    faGlobeAmericas,
    faGraduationCap,
    faHamburger,
    faHammer,
    faHeadphones,
    faMapMarkerAlt,
    faMobileAlt,
    faPhone,
    faStar,
    faTimes
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
