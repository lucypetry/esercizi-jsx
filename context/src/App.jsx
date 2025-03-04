const App = () => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={language}>
      <div>
        <label>Select Language: </label>
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
        <Hello />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
