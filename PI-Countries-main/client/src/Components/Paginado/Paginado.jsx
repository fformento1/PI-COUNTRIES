import React from "react";
import s from "../Paginado/Paginado.module.css";

export const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={s.nav}>
      <ul className={s.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={s.listas}>
            <p onClick={() => paginate(number)}>{number}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
