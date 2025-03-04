import React from "react";
import Colors from "./Lists";
const colorArray = [
  { id: 1, name: "Black" },
  { id: 2, name: "Purple" },
  { id: 3, name: "Green" },
];
function App() {
  return (
    <div className="App">
      <h1>Color List</h1>
      <Colors colors={colorArray} />
    </div>
  );
}

export default App;
