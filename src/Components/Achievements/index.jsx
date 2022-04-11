import { React } from 'react';
import './Achievements.css';

export const Achievements = ({achievement, achievementTitle, image, description}) => {
  return (
    <>
      {achievement && (<div data-testid="testAchievements" className='achievement'>
          <img id='achievement-img' src={image} alt="" />
          <div className='achievement-text'>
            <span className="ach-span1">{achievementTitle}</span>
            <span className='ach-span2'>{description}</span>
          </div> 
      </div>)}
    </>
  );
};
