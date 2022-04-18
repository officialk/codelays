import { React } from 'react';
import './CreditsList.css';

export const CreditsList = ({credits}) => {
  return (
    <>
        <div data-testid="creditsList" className="CreditsList">
            <marquee data-testid="credits" className="Credits" behavior="scroll" direction="up">{credits}</marquee>
        </div>
    </>
  );
};