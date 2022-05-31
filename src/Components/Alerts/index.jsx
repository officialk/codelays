import React, { useState, useEffect } from 'react';
import { useStyles } from "./style";
import { alerts } from '../../config/data.json'
import { useTransition } from 'react-spring';
import { animated } from 'react-spring';

export const Alerts = ({ open }) => {
  const [visible, setVisible] = useState(open);
  const transition = useTransition(visible, {
    from: { opacity: 0, marginTop: '-147px' },
    enter: { opacity: 1, marginTop: '0px' },
    leave: { opacity: 0, marginTop: '-147px' },
  });
  const classes = useStyles();
  useEffect(() => {
    setVisible(open);
  }, );
  
  return (
    <>
    {transition(( style, item ) => 
      item && 
      <animated.div style={style} className={`${classes.root}`} data-testid="loadAlerts" > 
          <img className={`${classes.alertsUserImg}`} src={alerts.userImage} alt="" />
          <div className={`${classes.alertsText}`}>
              <span className={`${classes.alertsTextSpan}`}>{alerts.userName}</span>
              <span className={`${classes.alertsTextSpan}`}>{alerts.description}</span>
          </div>
      </animated.div>
    )} 
    </>
  );
};