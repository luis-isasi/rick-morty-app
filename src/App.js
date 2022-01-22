import { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    })();
  }, []);

  console.log({ characters });

  const renderCharacters = () => {
    return characters.map((character, i) => {
      return (
        <div className="card" key={i}>
          <div className="card-title">
            <h3>Nombre: {character.name}</h3>
            <h3>Genero: {character.gender}</h3>
            <h3>Estado: {character.status}</h3>
          </div>
          <figure className="card-figure">
            <img src={character.image} alt={character.name} />
          </figure>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Hola comunidad GDSC</p>
        {characters.length > 0 && renderCharacters()}
      </header>
    </div>
  );
}

export default App;
