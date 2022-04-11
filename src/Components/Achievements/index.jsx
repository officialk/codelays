import { React, useState, useEffect } from 'react';
import './Achievements.css';

export const Achievements = ({ title, image, description}) => {
  const [achievement,setAchievement] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      if(achievement){
        setAchievement(false);
        }
    }, 10000);
  }, []);
  return (
    <>
      {achievement && (<div data-testid="testAchievements" className='achievement'>
          <img id='achievement-img' src={image} alt="" />
          <div className='achievement-text'>
            <span className="ach-span1">{title}</span>
            <span className='ach-span2'>{description}</span>
          </div> 
      </div>)}
    </>
  );
};
