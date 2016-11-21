import React, { PropTypes } from 'react';

const SkillTile = ({ tileData }) => {

  const showStar = () => {
    if (tileData.star) {
      return (<i className="glyphicon glyphicon-star"></i>);
    }
  };

  return (
    <div className="skill">
      <div className="skill-label">
        <div className="skill-text">
          { tileData.name } {showStar()}
        </div>
      </div>
      <div className="image-block">
        <div className="image-cell">
          <img src={tileData.logoPath} alt={tileData.name} />
        </div>
      </div>
    </div>
  )
};


SkillTile.propTypes = {
  tileData: PropTypes.object.isRequired
};

export default SkillTile;
