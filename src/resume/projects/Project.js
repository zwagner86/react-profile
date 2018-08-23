import React from 'react';
import PropTypes from 'prop-types';
import './Project.css';

const createTechStringFromArray = array => {
    let techString = '';

    for (let techItem of array) {
        techString += techItem + ', ';
    }

    return techString.slice(0, techString.length - 2);
};

const Project = ({
    project: {
        role,
        client,
        duration,
        summary,
        tech
    }
}) => {
    return (
        <div className="Project">
            <div className="Project-header">{role} – {client} – {duration}</div>
            <div className="Project-summary">{summary}</div>
            <div className="Project-tech">
                <div className="Project-tech-label">Technologies Used:</div>
                <div className="Project-tech-list">{createTechStringFromArray(tech)}</div>
            </div>
        </div>
    );
};

Project.propTypes = {
    project: PropTypes.shape({
        role: PropTypes.string.isRequired,
        client: PropTypes.string.isRequired
        duration: PropTypes.string.isRequired
        summary: PropTypes.string.isRequired,
        tech: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default Project;
