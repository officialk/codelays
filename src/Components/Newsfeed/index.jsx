import { React } from 'react';
import './Newsfeed.css';

export const Newsfeed = ({news}) => {
  return (
    <>
        <div className="newsBar">
            <marquee className="news" behavior="scroll" direction="left">{news}</marquee>
        </div>
    </>
  );
};