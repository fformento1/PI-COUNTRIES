import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SearchBar = () => {
  const [buscar, setBuscar] = useState("");

  function handleChange(e) {
    setBuscar(e.target.value);
  }

  return (
    <div>
      <nav>
        <ul>
          <Link to="/home/">
            <li>Home</li>
          </Link>
          <Link to="/form">
            <li>Create activity</li>
          </Link>
          <input
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
