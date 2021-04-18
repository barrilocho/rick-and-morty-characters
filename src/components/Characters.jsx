import { useState, useEffect } from 'react'
import Card from './Card';
import './../stylesheets/characters.css'
const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, []);

  return (
    <div className="characters">
      {characters.map(character => (
        <Card character={character}></Card>
      ))}
    </div>
  );

}

export default Characters;