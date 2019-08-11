import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './SkillMeterItem.css';

const range = [0, 1, 2, 3, 4];

const SkillMeterItem = ({
    name,
    rating
}) => {
    return (
        <div className="SkillMeterItem">
            <div className="SkillMeterItem-name">{name}</div>
            <div className="SkillMeterItem-rating">
                {range.map(item => {
                    // default to empty circle
                    let icon = ['far', 'circle'];

                    // solid, full circle
                    if ((rating >= (Number(item) * 1) + 0.5)) {
                        icon = 'circle';
                    }

                    // half circle
                    if ((rating >= (Number(item) * 1) + 0.5 && rating < (Number(item) * 1) + 1)) {
                        icon = 'adjust';
                    }

                    return (
                        <FontAwesomeIcon
                            key={`${item}`}
                            className="SkillMeterItem-icon"
                            icon={icon}
                            fixedWidth
                        />
                    );
                })}
            </div>
        </div>
    );
};

SkillMeterItem.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

export default SkillMeterItem;
