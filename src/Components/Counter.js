import React, { useContext, useState } from "react";
import QueueContext from "../contexts/QueueContext";

const Counter = () => {
  const { eventArray, enqueue, dequeue } = useContext(QueueContext);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={() => enqueue(handleIncrement)}>-</button>
      <span>count: {count}</span>
      <button onClick={() => enqueue(handleDecrement)}>+</button>
    </div>
  );
};

export default Counter;
