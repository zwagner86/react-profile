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

const PersonalProject = ({
    project: {
        name,
        url,
        description,
        tech
    }
}) => {
    return (
        <div className="PersonalProject">
            <div className="Project-header">{name}</div>
            {url &&
                <div className="Project-url">{url}</div>
            }
            <div className="Project-summary">{description}</div>
            <div className="Project-tech">
                <div className="Project-tech-label">Technologies Used:</div>
                <div className="Project-tech-list">{createTechStringFromArray(tech)}</div>
            </div>
        </div>
    );
};

PersonalProject.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string,
        description: PropTypes.string.isRequired,
        tech: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default PersonalProject;
