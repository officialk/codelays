import React, { useEffect } from 'react';
import './Loader.css';

export const Loader = ({percent, update}) => {
  const style ={
    width: `${percent}%`
  }
  useEffect(()=>{
    if(update){
      document.documentElement.style.setProperty('--bg-color', "orange");
    }else{
      document.documentElement.style.setProperty('--bg-color', "red");
    }
  },[update])
  return (
    <>
      <div data-testid="loadProgressBar" className="progressBar">
        <span data-testid="loader" style={style} className="loader"></span>
      </div>
    </>
  );
};
