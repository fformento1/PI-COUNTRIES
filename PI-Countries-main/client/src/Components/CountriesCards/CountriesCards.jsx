import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries, getAllActivities } from "../../Redux/actions";
import s from "./CountriesCards.module.css";

export const CountriesCards = () => {
  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivities());
  }, []);

  return (
    <div>
      <div className={s.div}>
        {countries.length > 0 ? (
          countries.map((el) => (
            <CountryCard
              name={el.name}
              flags={el.flags}
              continents={el.continents}
              id={el.id}
            />
          ))
        ) : (
          <h1>Cargando</h1>
        )}
      </div>
    </div>
  );
};

export default CountriesCards;
