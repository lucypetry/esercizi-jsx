import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageProvider } from "./LanguageContext.jsx";
import Hello from "./Hello.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <Hello />
    </LanguageProvider>
  </StrictMode>
);
