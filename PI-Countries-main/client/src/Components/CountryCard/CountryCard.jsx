import React from "react";
import { Link } from "react-router-dom";
import s from "./CountryCard.module.css";

export const CountryCard = (props) => {
  return (
    <div>
      <Link to={`/detail/${props.id}`} className={s.link}>
        <div className={s.div}>
          <span className={s.fontHome}>{props.name}</span>
          <img src={props.flags} alt="Flag image." className={s.img} />
          <p className={s.fontHome}>{props.continents}</p>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
