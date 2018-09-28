import React from 'react';
import PropTypes from 'prop-types';
import CompanyPosition from './CompanyPosition';
import './CompanyWorkExperience.css';

const CompanyWorkExperience = ({
    info: {
        name,
        location
    },
    positions
}) => {
    return (
        <div className="CompanyWorkExperience">
            <div className="CompanyWorkExperience-positions">
                {positions.map((position, i) => {
                    return (
                        <CompanyPosition
                            key={i}
                            position={position}
                        />
                    );
                })}
            </div>
            <div className="CompanyWorkExperience-location">{location}</div>
            <div className="CompanyWorkExperience-name">{name}</div>
            <div className="CompanyWorkExperience-location-mobile">{location}</div>
        </div>
    );
};

CompanyWorkExperience.propTypes = {
    info: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired
    }).isRequired,
    positions: PropTypes.arrayOf(
        PropTypes.shape({
            role: PropTypes.string.isRequired,
            dates: PropTypes.string.isRequired
        })
    ).isRequired
};

export default CompanyWorkExperience;
