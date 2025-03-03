import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Age from "./Age.jsx";
import Message from "./Message.jsx";
import Welcome from "./Welcome.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Age />
    <Message />
    <Welcome name="John" age={30} />
    <Welcome name="Alice" age={17} />
  </StrictMode>
);
