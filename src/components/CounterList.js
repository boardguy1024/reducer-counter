import React from "react";
import Counter from "./Counter";
import { List } from "immutable";
import "./CounterList.css";

const CounterList = ({ counters, onIncrement, onDecrement, onSetColor }) => {
  const counterList = counters.map((counter, i) => (
    <Counter
      key={i}
      index={i}
      {...counter.toJS()}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onSetColor={onSetColor}
    />
  ));

  return <div className="CounterList">{counterList}</div>;
};

export default CounterList;
