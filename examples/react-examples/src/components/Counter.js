import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const incrementCount = () => {
    setCount((previousCount) => previousCount + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={decrementCount}>
        <span>-</span>
      </button>
      <span>{count}</span>
      <button onClick={incrementCount}>
        <span>+</span>
      </button>
    </div>
  );
};

export default Counter;
