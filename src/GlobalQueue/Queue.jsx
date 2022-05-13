import React, { useState, useContext } from "react";
import QueueContext from "../contexts/QueueContext";

const Queue = () => {
  const { eventArray, enqueue, dequeue } = useContext(QueueContext);
  return <div>Queue</div>;
};

export default Queue;
