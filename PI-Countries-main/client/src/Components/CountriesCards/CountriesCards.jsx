import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCountries,
  getAllActivities,
  filterByContinent,
  filterByActivity,
} from "../../Redux/actions";
import s from "./CountriesCards.module.css";
import Pagination from "../Paginado/Paginado";

export const CountriesCards = () => {
  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivities());
  }, []);

  //Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(9);

  if (currentPage === 1 && countriesPerPage !== 9) {
    setCountriesPerPage(9);
  } else if (currentPage !== 1 && countriesPerPage !== 10) {
    setCountriesPerPage(10);
  }

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries?.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Filtrados
  const [orden, setOrden] = useState("");

  function handleFilterByContinent(e) {
    setCurrentPage(1);
    dispatch(filterByContinent(e.target.value));
  }

  function handleFilterByActivity(e) {
    setCurrentPage(1);
    dispatch(filterByActivity(e.target.value));
  }

  return (
    <div className={s.div}>
      <div className={s.divSelect}>
        <select
          onChange={(e) => handleFilterByContinent(e)}
          className={s.select}
        >
          <option>All continents</option>
          <option>Africa</option>
          <option>Antarctica</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>North America</option>
          <option>Oceania</option>
          <option>South America</option>
        </select>
      </div>
      <div className={s.divSelect}>
        <select
          onChange={(e) => handleFilterByActivity(e)}
          className={s.select}
        >
          <option>All activities</option>
          {activities.map((el) => {
            return <option>{el.name}</option>;
          })}
        </select>
      </div>
      <div className={s.divPaginado}>
        <Pagination totalCountries={countries.length} paginate={paginate} />
      </div>
      <div className={s.countriesContainer}>
        {countries.length > 0 ? (
          currentCountries.map((el) => (
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
