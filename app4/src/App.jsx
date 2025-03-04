import React from "react";
import { SWRConfig } from "swr";
import Chat from "./Chat";

const App = () => {
  return (
    <SWRConfig
      value={{ fetcher: (url) => fetch(url).then((res) => res.json()) }}
    >
      <Chat />
    </SWRConfig>
  );
};

export default App;
