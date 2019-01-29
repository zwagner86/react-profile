import React, {Component} from 'react';
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

        return (
            <div className={classname}>
                <div className="Menu-toggle">
                    <button
                        className="Menu-toggle-button"
                        onClick={this._onMenuToggle}
                    >
                        <FontAwesomeIcon
                            className="Menu-toggle-icon"
                            icon="bars"
                            size="3x"
                        />
                    </button>
                </div>
                <div className="Menu-links">
                    <ul>
                        <li>
                            <a href="#">Menu-1</a>
                        </li>
                        <li>
                            <a href="#">Menu-2</a>
                        </li>
                        <li>
                            <a href="#">Menu-3</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
