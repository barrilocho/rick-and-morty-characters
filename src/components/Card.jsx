
import './../stylesheets/card.css';

const Card = ({character}) => {
  return (
    <div className="card">
      <img className="card-image" src={character.image} alt=""/>
      <h4>{character.name}</h4>
      <p>{character.species}</p>
      <p>{character.created}</p>
      <p>{character.gender}</p>
    </div>
  );
}

export default Card;