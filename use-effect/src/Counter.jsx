import { useState, useEffect } from "react";

const Counter = ({ initialValue = 0, increment = 1 }) => {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log(`Counter value: ${counter}`);
  }, [counter]);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + increment)}>Increment</button>
    </div>
  );
};

export default Counter;
