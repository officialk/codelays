import { React, useState, useEffect } from 'react';
import './Achievements.css';

export const Achievements = () => {
  let title = "Achievement Unlocked";
  let image = "https://images.unsplash.com/photo-1551143899-e3d08acc5b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
  let description = "Get it on steam";
  
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
      {achievement && (<div data-testid="testAchievements" className="achievement" >
          <img id='achievement-img' src={image} alt="" />
          <div className='achievement-text'>
            <span className="ach-span1">{title}</span>
            <span className='ach-span2'>{description}</span>
          </div> 
      </div>)}
    </>
  );
};
