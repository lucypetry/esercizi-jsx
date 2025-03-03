import React from "react";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";

function App() {
  const handleLogin = (state) => {
    console.log("Login state:", state);
  };

  return (
    <div>
      <h1>My App</h1>
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
