import React, { useState } from "react";
import "../styles/listview.css";

const ListView = ({ numbers, onReset, onDelete }) => {
  const [isAsc, setIsAsc] = useState(true);

  const sortedNumbers = [...numbers].sort((a, b) =>
    isAsc ? a - b : b - a
  );

  return (
    <div className="list-container">
      <div className="list-header">
        <h2>Numbers List</h2>
        <div className="list-buttons">
          <button onClick={onReset} className="reset-btn">Reset</button>
          <button
            onClick={() => setIsAsc(!isAsc)}
            className="sort-btn"
          >
            Sort {isAsc ? "↓" : "↑"}
          </button>
        </div>
      </div>
      <ul className="number-list">
        {sortedNumbers.map((num, index) => (
          <li className="number-item">
            <span>{num}</span>
            <button onClick={() => onDelete(num)} className="delete-btn">✕</button>
          </li>
        ))}
      </ul>
      <div className="total-count">
        Total numbers: {numbers.length}
      </div>
    </div>
  );
};

export default ListView;
