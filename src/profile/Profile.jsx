import React, {Component} from 'react';
import ReactGA from 'react-ga';
import Menu from '../common/menu/Menu';
import About from './about/About';
import Summary from './summary/Summary';
import './Profile.css';

export default class Profile extends Component {
    componentDidMount() {
        if (process.env.NODE_ENV === 'production') {
            ReactGA.set({page: window.location.pathname});
            ReactGA.pageview(window.location.pathname);
        }
    }

    render() {
        return (
            <div className="Profile">
                <Menu />
                <Summary />
                <About />
            </div>
        );
    }
}
