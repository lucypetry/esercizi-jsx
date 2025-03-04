import React from "react";
import { Routes, Route } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GithubuserList";

const GithubUsers = () => {
  return (
    <Routes>
      <Route index element={<p>Add a user and select it</p>} />
      <Route path=":username" element={<ShowGithubUser />} />
    </Routes>
  );
};

export default GithubUsers;
