import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import ChatApp from "./Chat";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChatApp />
  </StrictMode>
);
