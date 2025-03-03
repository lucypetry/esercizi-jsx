import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MouseClicker from "./MouseClicker.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MouseClicker />
  </StrictMode>
);
