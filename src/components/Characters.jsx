import { useState, useEffect, useReducer } from 'react'
import Card from './Card';
import './../stylesheets/characters.css';

const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
}
const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: favorite });
  }

  const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await response.json();
    setCharacters(data.results);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  const goToDetails = (character) => {

  }

  return (
    <div className="characters">
      {favorites.favorites.map(favorite => (
        <div onClick={() => goToDetails(favorite)} key={favorite.id}>
          <Card character={favorite}></Card>
        </div>
      ))}
      {characters.map(character => (
        <div onClick={() => goToDetails(character)} key={character.id}>
          <Card character={character}></Card>
          <button type="button" onClick={() => { handleClick(character) }}>Add Favorite </button>
        </div>
      ))}
    </div>
  );

}

export default Characters;