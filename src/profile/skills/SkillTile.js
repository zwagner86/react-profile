import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './SkillTile.css';

const SkillTile = ({
    tileData: {
        star,
        name,
        logoPath
    }
}) => {
    return (
        <div className="SkillTile">
            <div className="SkillTile-label">
                <div className="SkillTile-text">
                    {name}&nbsp;
                    {star &&
                        <FontAwesomeIcon
                            className="SkillTile-icon-star"
                            icon="star"
                        />
                    }
                </div>
            </div>
            <div className="SkillTile-image-block">
                <div className="SkillTile-image-cell">
                    <img
                        className="SkillTile-image"
                        src={logoPath}
                        alt={name}
                    />
                </div>
            </div>
        </div>
    );
};

SkillTile.propTypes = {
    tileData: PropTypes.shape({
        star: PropTypes.bool,
        name: PropTypes.string,
        logoPath: PropTypes.string,
    }).isRequired
};

export default SkillTile;
