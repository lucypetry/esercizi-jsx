import React from "react";

function CounterDisplay({ count }) {
  const counterStyle = {
    fontSize: "30px",
    color: "#776",
  };
  return (
    <div style={counterStyle}>
      <p> {count}</p>
    </div>
  );
}

export default CounterDisplay;
