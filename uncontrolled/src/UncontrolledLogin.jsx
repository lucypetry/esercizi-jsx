import React, { useRef } from "react";

const UncontrolledLogin = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const rememberRef = useRef();

  const onLogin = (event) => {
    event.preventDefault();
    console.log("Username:", usernameRef.current.value);
    console.log("Password:", passwordRef.current.value);
    console.log("Remember me:", rememberRef.current.checked);
  };
  const loginWithFormData = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log("Username:", formData.get("username"));
    console.log("Password:", formData.get("password"));
    console.log("Remember me:", formData.get("remember") === "on");
  };

  return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          ref={usernameRef}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
          required
        />
      </div>
      <div>
        <label htmlFor="remember">Remember me:</label>
        <input
          type="checkbox"
          id="remember"
          name="remember"
          ref={rememberRef}
        />
      </div>

      <button type="button" onClick={onLogin}>
        Login (DOM API)
      </button>
      <button type="button" onClick={loginWithFormData}>
        Login (FormData API)
      </button>
    </form>
  );
};

export default UncontrolledLogin;
