import { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      console.log({ data });
      setCharacters(data.results);
    })();
  }, []);

  const renderCharacters = () => {
    return characters.map((character, i) => {
      return (
        <div key={i}>
          <h1>{character.name}</h1>
        </div>
      );
    });
  };

  console.log({ characters });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola comunidad GDSC</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {characters.length > 0 && renderCharacters()}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
