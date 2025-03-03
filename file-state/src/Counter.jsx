import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialValue = 0, incrementAmount = 1 }) {
  const [counter, setCounter] = useState(initialValue);
  const increment = () => {
    setCounter((prevCounter) => prevCounter + incrementAmount);
  };
  const decrement = () => {
    setCounter((prevCounter) => prevCounter - incrementAmount);
  };
  const reset = () => {
    setCounter(initialValue);
  };
  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
