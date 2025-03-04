import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Hello = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const getMessage = () => {
    switch (language) {
      case "en":
        return "Hello, world!";
      case "it":
        return "Ciao, mondo!";
      case "fr":
        return "Bonjour, le monde!";
      default:
        return "Hello, World!";
    }
  };

  return (
    <div>
      <h2>{getMessage()}</h2>

      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="it">Italian</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default Hello;
