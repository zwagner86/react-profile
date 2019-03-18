import React from 'react';
import PropTypes from 'prop-types';
import './Company.css';

const Company = ({
    company: {
        name,
        location,
        fromDate,
        toDate,
        url,
        title
    }
}) => {
    return (
        <div className="About-section-info Company">
            <div>
                <a
                    className="Company-employer-link"
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
};

Company.propTypes = {
    company: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        fromDate: PropTypes.string.isRequired,
        toDate: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired
};

export default Company;
