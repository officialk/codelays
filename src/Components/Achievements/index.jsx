import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Achievements.css';

export const Achievements = ({achievement, achievementTitle, image, description}) => {
  return (
    <>
      {achievement && (<div className='achievement'>
          <img id='achievement-img' src={image} alt="" />
          <div className='achievement-text'>
            <span className="ach-span1">{achievementTitle}</span>
            <span className='ach-span2'>{description}</span>
          </div>
      </div>)}
    </>
  );
};

Achievements.propTypes = {
  achievement: PropTypes.bool,
  achievementTitle: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

Achievements.defaultProps = {
  achievement: true,
  achievementTitle: "Achievement Unlocked",
  image: null,
  description: null,
};
