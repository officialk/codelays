import React from 'react';
import './Loader.css';

export const Loader = ({color, percent}) => {
  return (
    <>
      <div data-testid="loadProgressBar" className="progressBar">
        <span data-testid="loader" style={{backgroundColor: `${color}`, width: `${percent}%`}} className="loader"></span>
      </div>
    </>
  );
};
