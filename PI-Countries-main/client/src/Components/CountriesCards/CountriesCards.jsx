import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCountries,
  getAllActivities,
  filterByContinent,
  filterByActivity,
  orderByName,
  orderByPopulation,
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

  const [orden, setOrden] = useState("");
  //Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(9);

  if (currentPage === 1 && countriesPerPage !== 9) {
    setCountriesPerPage(9);
  } else if (currentPage !== 1 && countriesPerPage !== 10) {
    setCountriesPerPage(10);
  }

  if (countries.error) {
    return <div>Country not found</div>;
  }
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries?.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Filtrados

  function handleFilterByContinent(e) {
    setCurrentPage(1);
    dispatch(filterByContinent(e.target.value));
  }

  function handleFilterByActivity(e) {
    setCurrentPage(1);
    dispatch(filterByActivity(e.target.value));
  }

  function handleSortName(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(orderByName(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleSortPopulation(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(orderByPopulation(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
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
        <select onChange={(e) => handleSortName(e)} className={s.select}>
          <option>Name</option>
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
        <select onChange={(e) => handleSortPopulation(e)} className={s.select}>
          <option>Population</option>
          <option>Lower population</option>
          <option>Higher population</option>
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
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default CountriesCards;
