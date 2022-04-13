import { React } from 'react';
import './Newsfeed.css';

export const Newsfeed = ({news}) => {
  return (
    <>
        <div data-testid="newsBar" className="newsBar">
            <marquee data-testid="news" className="news" behavior="scroll" direction="left">{news}</marquee>
        </div>
    </>
  );
};