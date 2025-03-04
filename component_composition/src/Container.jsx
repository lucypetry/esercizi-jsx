import { useState } from "react";

const Container = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="container">
      <h2
        className="cursor-pointer text-lg font-bold text-red-600"
        onClick={() => setCollapsed(!collapsed)}
      >
        {title}
      </h2>
      {!collapsed && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default Container;
