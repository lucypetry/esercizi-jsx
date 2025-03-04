import React from "react";
import useForm from "../hooks/useForm";

const LoginForm = () => {
  const { values, handleChange } = useForm({ username: "", password: "" });

  return (
    <form>
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      />
    </form>
  );
};

export default LoginForm;
