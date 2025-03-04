import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GithubUser from "./GithubUser.jsx";
import GithubUsers from "./Githubusers.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GithubUser />
    <GithubUsers />
  </StrictMode>
);
