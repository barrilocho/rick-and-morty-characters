import { useState, useEffect } from 'react'
import Card from './Card';
const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, []);

  return (
    <div className="Characters">
      {characters.map(character => (
        <Card name={character.name}></Card>
      ))}
    </div>
  );
}

export default Characters;