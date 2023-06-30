import React, {
  useState,
  useEffect,
} from 'react';
import "./pokemon.css";
import { Detail } from '../interface';

interface IProps {
  viewDetail: Detail;
  setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
  abilities: 
    | {
        name: string;
        ability: string;
      }[] 
    | undefined;
  name: string;
  id: number;
  image: string;
}

const PokemonList:React.FC<IProps> = (props) => {
  const {
    name,
    id, 
    image,
    abilities,
    viewDetail,
    setViewDetail,
  } = props;

  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(id === viewDetail?.id);
  }, [id, viewDetail]);

  const closeDetail = () => {
    setViewDetail({
      id: 0,
      isOpened: false,
    });
  };

  return (
    <div>
      {isSelected ? (
        <section className="pokemon-list-detailed">
          <div className="detail-container">
            <p className="detail-close" onClick={closeDetail}>
              X
            </p>
            
            <div className="detail-info">
              <img 
                src={image}
                alt="pokemon"
                className="detail-img"
              />
              <p className="detail-name">
                {name}
              </p>
            </div>

            <div className="detail-skill">
              <p className="detail-ability">
                Ability: 
              </p>
              {abilities?.map((ab:any) => {
                return (
                  <div>
                    {ab.ability.name}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="pokemon-list-container">
          <p className="pokemon-name">
            {name}
          </p>
          <img src={image} alt="pokemon" />
        </section>
      )}
    </div>
  )
}

export default PokemonList