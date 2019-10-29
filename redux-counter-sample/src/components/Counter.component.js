import React from "react";
import "./Counter.css";

const Counter = ({ number, onIncrement, onDecrement }) => {
  return (
    <div
      className="counter"
      onClick={onIncrement}
      onContextMenu={e => {
        e.preventDefault();
        onDecrement();
      }}
    >
      {number}
    </div>
  );
};

export default Counter;
