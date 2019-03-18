import React from 'react';
import {
    frameworks,
    languages,
    logos,
    whatSectionDescription
} from 'personal-site-data';
import SkillTile from './SkillTile';
import './What.css';

const What = props => {
    return (
        <div className="About-section What">
            <div className="About-section-header">WHAT?</div>
            <div className="About-section-info">
                <div className="About-section-description">{whatSectionDescription}</div>
                <div className="What-languages">
                    <div className="What-languages-description">Here are some languages I have experience with:</div>
                    <div className="What-languages-list">
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
                <div className="What-frameworks">
                    <div className="What-frameworks-description">
                        And here are some frameworks, libraries, and tools I&apos;ve used:
                    </div>
                    <div className="What-frameworks-list">
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
    );
};

export default What;
