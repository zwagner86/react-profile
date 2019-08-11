import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './InterestItem.css';

const InterestItem = ({
    name,
    faIconName
}) => {
    return (
        <div className="InterestItem">
            <FontAwesomeIcon
                className="InterestItem-icon"
                icon={faIconName}
                size="2x"
                fixedWidth
            />
            <div className="InterestItem-name">{name}</div>
        </div>
    );
};

InterestItem.propTypes = {
    name: PropTypes.string.isRequired,
    faIconName: PropTypes.string.isRequired
};

export default InterestItem;
