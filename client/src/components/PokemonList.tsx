import React from 'react';
import "./pokemon.css";

interface IProps {
  name: string;
  id: number;
  image: string;
}

const PokemonList:React.FC<IProps> = (props) => {
  const {
    name,
    id, 
    image,
  } = props;

  return (
    <div>
      <section className="pokemon-list-container">
        <p className="pokemon-name">
          {name}
        </p>
        <img src={image} alt="pokemon" />
      </section>
    </div>
  )
}

export default PokemonList