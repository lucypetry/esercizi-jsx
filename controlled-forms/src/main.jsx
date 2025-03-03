import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import InteractiveWelcome from "./InteractiveWelcome.jsx";
import Login from "./Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InteractiveWelcome />
    <Login />
  </StrictMode>
);
