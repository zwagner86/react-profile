import React, {Component} from 'react';
import ReactGA from 'react-ga';
import ProfileInfo from './profile-info/ProfileInfo';
import Skills from './skills/Skills';
import './Profile.css';

export default class Profile extends Component {
    componentDidMount() {
        if (process.env.CONTEXT === 'production') {
            ReactGA.set({page: window.location.pathname});
            ReactGA.pageview(window.location.pathname);
        }
    }

    render() {
        return (
            <div className="Profile">
                <ProfileInfo />
                <Skills />
            </div>
        );
    }
}
