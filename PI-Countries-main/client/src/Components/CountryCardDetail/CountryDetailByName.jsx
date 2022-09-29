import React from "react";
import { getCountryByName } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CountryCard from "../CountryCard/CountryCard";
import s from "../CountryCardDetail/CountryDetailByName.module.css";

export const CountryDetailByName = () => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("name");
  console.log(name);
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryByName(name));
  }, [countries]);

  if (typeof countries.error === "string") {
    return (
      <div className={s.divContenedor}>
        <div className={s.div}>
          <p>Country not found</p>
          <img
            src="https://previews.123rf.com/images/yupiramos/yupiramos1802/yupiramos180224348/96038438-ilustraci%C3%B3n-de-dibujos-animados-de-planeta-triste-tierra.jpg"
            alt="Country image"
            className={s.img}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={s.countryContainer}>
        {countries.length > 0 ? (
          countries.map((el) => (
            <CountryCard
              name={el.name}
              flags={el.flags}
              continents={el.continents}
              id={el.id}
              key={el.id}
            />
          ))
        ) : (
          <h1>Cargando</h1>
        )}
      </div>
    );
  }
};

export default CountryDetailByName;
