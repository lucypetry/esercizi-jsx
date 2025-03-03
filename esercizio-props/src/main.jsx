import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Welcome from "./Welcome.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Welcome name="Martina" age={30} />
  </StrictMode>
);
