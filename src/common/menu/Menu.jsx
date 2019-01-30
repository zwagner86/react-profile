import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Menu.css';

export default class Menu extends Component {
    state = {
        isMenuOpen: false
    };

    _onMenuToggle = () => {
        this.setState((prevState, props) => {
            return {
                isMenuOpen: !prevState.isMenuOpen
            };
        });
    }

    render() {
        const {
            isMenuOpen
        } = this.state;
        const classname = `Menu${isMenuOpen ? ' Menu-is-open' : ''}`;
        const iconName = (isMenuOpen) ? 'times' : 'bars';

        return (
            <div className={classname}>
                <div className="Menu-toggle">
                    <button
                        className="Menu-toggle-button"
                        onClick={this._onMenuToggle}
                    >
                        <FontAwesomeIcon
                            className="Menu-toggle-icon"
                            icon={iconName}
                            size="3x"
                        />
                    </button>
                </div>
                <div className="Menu-links">
                    <NavLink
                        to="/"
                        className="Menu-link"
                        activeClassName="Menu-link-active"
                        exact
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/resume"
                        className="Menu-link"
                        activeClassName="Menu-link-active"
                        exact
                    >
                        Resume
                    </NavLink>
                    <div className="Menu-link-divider-block">
                        <div className="Menu-link-divider">
                            <span>Other Site Versions</span>
                        </div>
                    </div>
                    <a
                        href="https://vue.zacharywagner.net"
                        className="Menu-link"
                    >
                        Vue
                    </a>
                </div>
            </div>
        );
    }
}
