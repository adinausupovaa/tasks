import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function sum() {
    setCount(count + 1);
  }
  function minus() {
    setCount(count - 1);
  }
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <p>Вы нажали {count} раза!</p>
    </div>
  );
};

export default Counter;
