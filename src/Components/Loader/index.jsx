import {React, useState} from 'react';
import './Loader.css';

export const Loader = ({percent}) => {
  return (
    <>
      <div data-testid="loadProgressBar" className="progressBar">
        <span data-testid="loader" style={{backgroundColor: `#d30404`, width: `${percent}%`}} className="loader"></span>
      </div>
    </>
  );
};
