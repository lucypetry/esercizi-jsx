import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import GithubUsers from "./GithubUsers";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |<Link to="/counter">Counter</Link> |
        <Link to="/users">GitHub Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="User" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/*" element={<GithubUsers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
