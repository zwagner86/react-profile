import React from 'react';
import PropTypes from 'prop-types';
import './CompanyPosition.css';

const CompanyPosition = ({
    position: {
        role,
        dates
    }
}) => {
    return (
        <div className="CompanyPosition">
            <div className="CompanyPosition-name">{role}</div>
            <div className="CompanyPosition-divider">--</div>
            <div className="CompanyPosition-date">{dates}</div>
        </div>
    );
};

CompanyPosition.propTypes = {
    position: PropTypes.shape({
        role: PropTypes.string.isRequired,
        dates: PropTypes.string.isRequired
    })
};

export default CompanyPosition;
