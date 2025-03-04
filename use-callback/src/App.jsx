// src/App.js
import React, { useState } from "react";
import useCounter from "./hooks/useCounter";
import FilteredList from "./Components/Filteredlist";

const App = () => {
  const { count, increment, decrement, reset } = useCounter();

  const [list, setList] = useState([
    { id: 1, name: "Ludovica", age: 60 },
    { id: 2, name: "Gioele", age: 55 },
    { id: 3, name: "Luce", age: 67 },
    { id: 4, name: "Claudia", age: 24 },
  ]);

  return (
    <div>
      <h1>Contatore: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <FilteredList list={list} />
    </div>
  );
};

export default App;
