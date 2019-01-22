import React, {Component} from 'react';
import axios from 'axios';
import skillData from './skill-data';
import SkillTile from './SkillTile';
import * as logos from "./assets/logos";
import './Skills.css';

export default class Skills extends Component {
    state = {
        isLoading: true,
        frameworks: null,
        languages: null
    };

    componentDidMount() {
        axios.get('/.netlify/functions/skills')
            .then(response => {
                // handle success
                console.log(response);
                const {
                    data: {
                        data: {
                            frameworks,
                            languages
                        }
                    }
                } = response;

                this.setState({
                    frameworks,
                    languages,
                    isLoading: false
                });
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }



    render() {
        const {
            isLoading,
            frameworks,
            languages
        } = this.state;

        return (
            <div className="Skills">
                <div className="Skills-inner">
                    <div className="Skills-section">
                        <div className="Skills-section-header">WHO?</div>
                        <div className="Skills-section-info">
                            {(isLoading)
                                ? (
                                    <div>Loading...</div>
                                ) : (
                                    <div className="Skills-section-description">
                                        <span>Hey, what&apos;s up? My full name is </span>
                                        <span className="Skills-section-highlight">Zachary </span>
                                        <span>but you can call me </span>
                                        <span className="Skills-section-highlight">Zach</span>
                                        <span>. I am a </span>
                                        <span className="Skills-section-highlight">Software Engineer </span>
                                        <span>with </span>
                                        <span className="Skills-section-highlight">full-stack experience</span>
                                        <span>, but a passion for working in the </span>
                                        <span className="Skills-section-highlight">front-end</span>
                                        <span>. For example, I made this page so I could play around with </span>
                                        <span className="Skills-section-highlight">React</span>!
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="Skills-section">
                        <div className="Skills-section-header">WHAT?</div>
                        <div className="Skills-section-info">
                            <div className="Skills-section-description">{skillData.whatDescription}</div>
                            <div className="Skills-languages">
                                <div className="Skills-languages-description">Here are some languages I have experience with:</div>
                                <div className="Skills-languages-list">
                                    {skillData.languages.map(({star, name, logoName}) => {
                                        const tileData = {
                                            star,
                                            name,
                                            logo: logos[logoName]
                                        };

                                        return (
                                            <SkillTile
                                                key={name}
                                                tileData={tileData}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="Skills-frameworks">
                                <div className="Skills-frameworks-description">
                                    And here are some frameworks, libraries, and tools I&apos;ve used:
                                </div>
                                <div className="Skills-frameworks-list">
                                    {skillData.frameworks.map(({star, name, logoName}) => {
                                        const tileData = {
                                            star,
                                            name,
                                            logo: logos[logoName]
                                        };

                                        return (
                                            <SkillTile
                                                key={name}
                                                tileData={tileData}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Skills-section">
                        <div className="Skills-section-header">WHERE?</div>
                        <div className="Skills-section-info">
                            <div>
                                <a
                                    className="Skills-section-employer-link"
                                    href="https://www.spothero.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    SpotHero
                                </a>
                            </div>
                            <div>December 2016 - Present</div>
                            <div>Chicago, IL</div>
                            <div>Front End Engineer</div>
                        </div>
                        <div className="Skills-section-info">
                            <div className="Skills-section-employer-link">
                                <a
                                    className="Skills-section-employer-link"
                                    href="https://www.slalom.com/locations/chicago"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Slalom Consulting
                                </a>
                            </div>
                            <div>December 2012 - December 2016</div>
                            <div>Chicago, IL</div>
                            <div>Senior Software Engineer</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
