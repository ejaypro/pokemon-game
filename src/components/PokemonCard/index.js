import { useState } from "react";
import style from "./styles.module.css";
import CardBackImage from "./assets/card-back-side.jpg";

const PokemonCard = ({ values, img, id, name, type }) => {
  const [isActive, setActive] = useState(false);
  const flipCard = () => {
    setActive(!isActive);
  };
  return (
    <div className={style.root} onClick={flipCard}>
      <div className={`${style.pokemonCard} ${isActive && style.active}`}>
        <div className={style.cardFront}>
          <div className={[style.wrap, style.front].join(" ")}>
            <div className={[style.pokemon, style[type]].join(" ")}>
              <div className={style.values}>
                <div className={[style.count, style.top].join(" ")}>
                  {values.top}
                </div>
                <div className={[style.count, style.right].join(" ")}>
                  {values.right}
                </div>
                <div className={[style.count, style.bottom].join(" ")}>
                  {values.bottom}
                </div>
                <div className={[style.count, style.left].join(" ")}>
                  {values.left}
                </div>
              </div>
              <div className={style.imgContainer}>
                <img src={img} alt={name} />
              </div>
              <div className={style.info}>
                <span className={style.number}>#{id}</span>
                <h3 className={style.name}>{name}</h3>
                <small className={style.type}>
                  Type: <span>{type}</span>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className={style.cardBack}>
          <div className={[style.wrap, style.back].join(" ")}>
            <img src={CardBackImage} alt="Сard Backed" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
