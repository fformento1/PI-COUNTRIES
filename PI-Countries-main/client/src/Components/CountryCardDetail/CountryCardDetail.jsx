import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCountry } from "../../Redux/actions";
import s from "../CountryCardDetail/CountryCardDetail.module.css";

export const CountryCardDetail = () => {
  const { id } = useParams();
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountry(id));
  }, []);

  return (
    <div className={s.divContainer}>
      <div className={s.div}>
        <span className={s.fontHome}>Name: {country.name}</span>
        <p className={s.fontHome}>Continent: {country.continents}</p>
        <p className={s.fontHome}>Country code: {country.id}</p>
        <p className={s.fontHome}>Capital: {country.capital}</p>
        <p className={s.fontHome}>Subregion: {country.subregion}</p>
        <p className={s.fontHome}>Area: {country.area} km2.</p>
        <p className={s.fontHome}>Population: {country.population}</p>
      </div>
      <div className={s.divFlag}>
        <img src={country.flags} alt="Flag image." className={s.img} />
      </div>
      <div className={s.div}>
        <p className={s.divActivity}>Activities </p>
        {country.activities?.length === 0
          ? "There are no activities related to this country."
          : country.activities?.map((el) => (
              <div>
                <p className={s.fontHome}>Name: {el.name}</p>
                <p className={s.fontHome}>Difficulty: {el.dificultad}</p>
                <p className={s.fontHome}>Duration: {el.duracion}</p>
                <p className={s.fontHome}>Season: {el.temporada}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default CountryCardDetail;
