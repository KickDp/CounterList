import React, { useState } from "react";
import "../styles/counter.css";

const Counter = ({ onAdd }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleAdd = () => {
    if (count > 0) {
      onAdd(count);
      setCount(0);
    }
  };

  return (
    <div className="counter-container">
      <h2 className="counter-title">Counter & List App</h2>
      <div className="counter-controls">
        <button onClick={decrement} className="counter-btn">-</button>
        <span className="counter-value">{count}</span>
        <button onClick={increment} className="counter-btn">+</button>
      </div>
      <button onClick={handleAdd} className="add-btn">
        Add to List
      </button>
    </div>
  );
};

export default Counter;
