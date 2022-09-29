import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "../SearchBar/SearchBar.module.css";

export const SearchBar = () => {
  const [buscar, setBuscar] = useState("");

  function handleChange(e) {
    setBuscar(e.target.value);
  }

  return (
    <div className={s.div}>
      <nav>
        <ul className={s.ul}>
          <Link to="/home/" className={s.fontHome}>
            <li className={s.li}>Home</li>
          </Link>
          <Link to="/form" className={s.fontHome}>
            <li className={s.li}>Create activity</li>
          </Link>
          <input
            className={s.li2}
            placeholder="Search by name"
            value={buscar}
            onChange={(e) => {
              if (
                /^[A-Za-z\s]+$/g.test(e.target.value.trim()) ||
                e.target.value === ""
              ) {
                handleChange(e);
              }
            }}
          />
          <Link to={`/detailByName?name=${buscar}`}>
            <button>Search</button>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default SearchBar;
