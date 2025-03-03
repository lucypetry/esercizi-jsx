import React from "react";
import AlertClock from "./AlertClock";

function App() {
  const handleClick = () => {
    alert(`Current time: ${new Date().toLocaleTimeString()}`);
  };

  return (
    <div>
      <h1>Click the button to see the time</h1>
      <AlertClock onClick={handleClick} />
    </div>
  );
}

export default App;
