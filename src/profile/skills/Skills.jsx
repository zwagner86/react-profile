import React from 'react';
import {
    frameworks,
    languages,
    logos,
    companies,
    whatSectionDescription
} from 'personal-site-data';
import SkillTile from './SkillTile';
import './Skills.css';

const Skills = () => {
    return (
        <div className="Skills">
            <div className="Skills-inner">
                <div className="Skills-section">
                    <div className="Skills-section-header">WHO?</div>
                    <div className="Skills-section-info">
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
                    </div>
                    <div className="Skills-section-info">
                        <div className="Skills-section-description">
                            I also made versions of this page using Vue and ReasonML!  You can get to those using the menu.  They really aren&apos;t any different.  I just wanted to be able to compare the frameworks firsthand.
                        </div>
                    </div>
                </div>
                <div className="Skills-section">
                    <div className="Skills-section-header">WHAT?</div>
                    <div className="Skills-section-info">
                        <div className="Skills-section-description">{whatSectionDescription}</div>
                        <div className="Skills-languages">
                            <div className="Skills-languages-description">Here are some languages I have experience with:</div>
                            <div className="Skills-languages-list">
                                {languages.map(({star, name, logoName}) => {
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
                                {frameworks.map(({star, name, logoName}) => {
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
                    {companies.map(company => {
                        const {
                            name,
                            location,
                            fromDate,
                            toDate,
                            url,
                            title
                        } = company;

                        return (
                            <div
                                key={name}
                                className="Skills-section-info"
                            >
                                <div>
                                    <a
                                        className="Skills-section-employer-link"
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {name}
                                    </a>
                                </div>
                                <div>{fromDate} - {toDate}</div>
                                <div>{location}</div>
                                <div>{title}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;
