import React from "react";
import { useParams } from "react-router-dom";
import GithubUser from "./GithubUser";

const ShowGithubUser = () => {
  let { username } = useParams();
  return <GithubUser username={username} />;
};

export default ShowGithubUser;
