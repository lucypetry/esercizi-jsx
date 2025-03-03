import { useState, useEffect } from "react";

const Counter = ({ initialValue, increment }) => {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log("Valore corrente del contatore:", counter);
  }, [counter]);

  return (
    <div>
      <h2>Contatore: {counter}</h2>
      <button onClick={() => setCounter(counter + increment)}>
        Incrementa
      </button>
    </div>
  );
};

const Orologio = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <h2>Ora corrente: {time}</h2>;
};

const App = () => {
  return (
    <div>
      <Counter initialValue={0} increment={1} />
      <Orologio />
    </div>
  );
};

export default App;
