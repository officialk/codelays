import React from 'react';
import { useTheme } from '@mui/styles';
import './Loader.css';

export const Loader = ({percent}) => {
  const theme = useTheme();
  const style ={
    backgroundColor: theme.pallete.primary,
    width: `${percent}%`
  }
  return (
    <>
      <div data-testid="loadProgressBar" className="progressBar">
        <span data-testid="loader" style={style} className="loader"></span>
      </div>
    </>
  );
};
