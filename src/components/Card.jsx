
import './../stylesheets/card.css';

const Card = ({character}) => {
  return (
    <div className="card">
      <img className="card-image" src={character.image} alt=""/>
      <h3>{character.name}</h3>
      <p>{character.species}</p>
      <p>{character.created}</p>
      <p>{character.gender}</p>
      <p className="id">{character.id}</p>
    </div>
  );
}

export default Card;