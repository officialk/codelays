import { useState, CreateContext, useEffect } from "react";

const QueueContext = CreateContext();

export default function QueueContextProvider(props) {
  const [eventArray, seteventArray] = useState([]);
  const eventArrayCopy = eventArray;

  useEffect(() => {
    while (!getSize) {
      let top = peek();
      if (top) {
        dequeue();
        top();
      }
    }
  }, [eventArray]);

  function enqueue(item) {
    for (let i = 0; i < eventArray.length; i++) {
      eventArrayCopy[i] = eventArray[i];
    }
    eventArrayCopy.push(item);
    seteventArray(eventArrayCopy);
  }

  function dequeue() {
    for (let i = 0; i < eventArray.length; i++) {
      eventArrayCopy[i] = eventArray[i];
    }
    eventArrayCopy.shift();
    seteventArray(eventArrayCopy);
  }

  function peek() {
    return eventArray[0];
  }

  function getSize() {
    return eventArray.length;
  }

  const values = {
    eventArray,
    enqueue,
    dequeue,
  };
  return (
    <QueueContext.Provider value={values}>
      {props.childeren}
    </QueueContext.Provider>
  );
}
