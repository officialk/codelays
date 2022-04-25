import React, { useContext , useEffect } from 'react';
import './Loader.css';
import { ColorContext } from '../../Context/colorContext';

export const Loader = ({percent, update}) => {
  const { state, dispatch } = useContext(ColorContext);
  const style ={
    backgroundColor: state.color,
    width: `${percent}%`
  }
  useEffect(()=>{
    if(update){
      dispatch({
        type: 'UPDATE_COLOR_WITH_PAYLOAD',
        payload: {color: '#ffffff'}})
    }else{
      dispatch({
        type: 'UPDATE_COLOR_WITH_PAYLOAD',
        payload: {color: '#d30404'}})
    }
  }, [update])
  return (
    <>
      <div data-testid="loadProgressBar" className="progressBar">
        <span data-testid="loader" style={style} className="loader"></span>
      </div>
    </>
  );
};
