import React from 'react';
import './Alerts.css';

export const Alerts = ({ open }) => {
  const style = {
    backgroundColor: "var(--primary)",
  };
  
  let userImage = "https://images.unsplash.com/photo-1551143899-e3d08acc5b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
  let userName = "Howling_hood";
  let description = "Attacked your village and did 400 Damage!";

    return (
    <>
      {open && <div style={style} className="Alerts" data-testid="loadAlerts" >
          <img id='alerts-userImg' src={userImage} alt="" />
          <div className='Alerts-text'>
              <span>{userName}</span>
              <span>{description}</span>
          </div>
      </div>}
    </>
  );
};