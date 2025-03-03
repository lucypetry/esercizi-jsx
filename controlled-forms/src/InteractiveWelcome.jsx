import React, { useState } from "react";

function Welcome({ nome }) {
  return <p>Welcome, {nome}!</p>;
}

function InteractiveWelcome() {
  const [nome, setNome] = useState("");

  const handleChange = (e) => {
    setNome(e.target.value);
  };

  return (
    <div>
      <input type="text" value={nome} onChange={handleChange} />
      <Welcome nome={nome} />
    </div>
  );
}

export default InteractiveWelcome;
