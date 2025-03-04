import React, { useState } from "react";

function Login() {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const buttonStyle = {
    backgroundColor: password.length < 8 ? "red" : "green",
    color: "white",
    borderRadius: "10px",
    padding: "5px 5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Digit your password"
      />
      <button style={buttonStyle}>Login</button>
    </div>
  );
}

export default Login;
