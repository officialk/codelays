import {React, useState} from 'react';
import './Loader.css';

export const Loader = ({percent}) => {
  const [color, setColor] = useState("#d30404");
  return (
    <>
      <div data-testid="loadProgressBar" className="progressBar">
        <span data-testid="loader" style={{backgroundColor: `${color}`, width: `${percent}%`}} className="loader"></span>
      </div>
    </>
  );
};
