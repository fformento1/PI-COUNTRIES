import React from "react";
import { getCountryByName } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CountryCard from "../CountryCard/CountryCard";

export const CountryDetailByName = () => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("name");
  console.log(name);
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryByName(name));
  }, []);

  if (typeof countries.error === "string") {
    return (
      <div>
        <p>Country not found</p>
      </div>
    );
  } else {
    return (
      <div>
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
