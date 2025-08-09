import React, { useState } from "react";
import Counter from "./components/Counter";
import ListView from "./components/ListView";

function App() {
  const [numbers, setNumbers] = useState([]);

  const handleAdd = (num) => {
    if (!numbers.includes(num)) {
      setNumbers([...numbers, num]);
    }
  };

  const handleReset = () => setNumbers([]);
  const handleDelete = (num) =>
    setNumbers(numbers.filter((n) => n !== num));

  return (
    <div className="app-container">
      <Counter onAdd={handleAdd} />
      <ListView
        numbers={numbers}
        onReset={handleReset}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
