import React from 'react';
import PropTypes from 'prop-types';
import InterestItem from './InterestItem';
import './InterestsList.css';

const InterestsList = ({
    interests
}) => {
    return (
        <div className="InterestsList">
            {interests.map((interest, i) => {
                const {
                    name,
                    faIconName
                } = interest;

                return (
                    <InterestItem
                        key={`${name}${i}`}
                        name={name}
                        faIconName={faIconName}
                    />
                );
            })}
        </div>
    );
};

InterestsList.propTypes = {
    interests: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            faIconName: PropTypes.string.isRequired
        })
    ).isRequired
};

export default InterestsList;
