import React from "react";
import { SWRConfig } from "swr";
import ShowGithubUser from "./ShowGithubUser";

const App = () => {
  return (
    <SWRConfig
      value={{ fetcher: (url) => fetch(url).then((res) => res.json()) }}
    >
      <ShowGithubUser username="octocat" />
    </SWRConfig>
  );
};

export default App;
