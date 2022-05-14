import { React, useEffect, useState } from "react";
import { useStyles } from "./style";
import {reminder} from '../../config/data.json'

export const Reminder = () => {
  const [showReminder, setShowReminder] = useState(false);
  const [visibility, setVisibility] = useState("false");
  const [text, setText] = useState("");
  const [icon, setIcon] = useState("");

  const classes = useStyles();
  // comment
  const initialize = async () => {
    await wait(reminder.displayInterval);
    setShowReminder(true);
    for await(const element of reminder.list){
      setVisibility(true);
      setIcon(element.icon);
      setText(element.title);
      await wait(reminder.holdInterval - 1);
      setVisibility(false);
      await wait(1);
    };
    setShowReminder(false);
    initialize();
  };
  const wait = async (time) =>
    new Promise((resolve) => {
      setTimeout(resolve, time*1000);
    });

  useEffect(()=>{
    initialize();
  },[]);

  return (
    <>
      {showReminder && 
      <div className={`${classes.root}`}>
        <div className={`${classes.rm} ${visibility ? classes.animatedItem : ""}`}>
          <img className={`${classes.icon}`} src={icon} alt="" />
          <div
            className={ `${classes.text}`}
          >
            {text}
          </div>
        </div>
      </div>
      } 
    </>
  );
};
