import React from 'react';
import PropTypes from 'prop-types';
import SkillBar from './SkillBar';
import './SkillsGraph.css';

const SkillsGraph = ({
    skills
}) => {
    return (
        <div className="SkillsGraph">
            <div className="SkillsGraph-guide">
                <div className="SkillsGraph-guide-empty-column" />
                <div className="SkillsGraph-guide-bar">
                    <div className="SkillsGraph-guide-bar-quarter" />
                    <div className="SkillsGraph-guide-bar-quarter" />
                    <div className="SkillsGraph-guide-bar-quarter" />
                    <div className="SkillsGraph-guide-bar-quarter" />
                </div>
            </div>
            <div className="SkillsGraph-body">
                {skills.map((skill, i) => {
                    const {
                        name,
                        rating
                    } = skill;

                    return (
                        <SkillBar
                            key={i}
                            name={name}
                            rating={rating}
                        />
                    );
                })}
            </div>
        </div>
    );
};

SkillsGraph.propTypes = {
    skills: PropTypes.shape({
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
    }).isRequired
};

export default SkillsGraph;
