import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./components/Counter.jsx";
import LoginForm from "./components/Login.jsx";
import GithubProfile from "./components/Profile.jsx";
import Location from "./components/Location.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Counter />
    <LoginForm />
    <Location />
  </StrictMode>
);
