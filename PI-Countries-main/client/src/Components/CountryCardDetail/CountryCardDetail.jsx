import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { getCountry } from "../../Redux/actions";

export const CountryCardDetail = () => {
  const { id } = useParams();
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountry(id));
  }, []);

  return (
    <div>
      <span>Name: {country.name}</span>
      <img src={country.flags} alt="Flag image." />
      <p>Continent: {country.continents}</p>
      <p>Country code: {country.id}</p>
      <p>Capital: {country.capital}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Area: {country.area} km2.</p>
      <p>Population: {country.population}</p>
      <p>
        Activities:{" "}
        {country.activities?.length === 0
          ? "There are no activities related to this country."
          : country.activities?.map((el) => (
              <div>
                <span>{el.name}</span>
                <span>{el.dificultad}</span>
                <span>{el.duracion}</span>
                <span>{el.temporada}</span>
              </div>
            ))}
      </p>
    </div>
  );
};

export default CountryCardDetail;
