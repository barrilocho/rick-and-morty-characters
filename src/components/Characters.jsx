import { useState, useEffect } from 'react'
import Card from './Card';
import './../stylesheets/characters.css'
const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await response.json();
    setCharacters(data.results);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  const goToDetails = (character) => {
    console.log('jajajaja', character);
  }

  return (
    <div className="characters">
      {characters.map(character => (
        <div onClick={() => goToDetails(character)} key={character.id}>
          <Card character={character}></Card>
        </div>
      ))}
    </div>
  );

}

export default Characters;