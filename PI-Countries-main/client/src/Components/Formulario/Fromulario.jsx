import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../../Redux/actions";
import { useState } from "react";
import s from "../Formulario/Formulario.module.css";

export const CreateActivity = () => {
  const countries = useSelector((state) => state.countries);
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState("");
  const [season, setSeason] = useState("");
  const [selectCountries, setSelectCountries] = useState([]);
  const [errorName, setErrorName] = useState("");
  const [errorDifficulty, setErrorDifficulty] = useState("");
  const [errorDuration, setErrorDuration] = useState("");
  const [errorSeason, setErrorSeason] = useState("");
  const [errorSelectCountries, setErrorSelectCountries] = useState("");

  const handleName = (name) => {
    setName(name);
  };

  const handleDifficulty = (difficulty) => {
    setDifficulty(difficulty);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleSeason = (season) => {
    setSeason(season);
  };

  const handleSelectCountries = (countries) => {
    if (selectCountries.length === 0) {
      setSelectCountries([...selectCountries, countries]);
    } else {
      let countriesFiltrados = selectCountries.filter((e) => e === countries);
      if (countriesFiltrados.length === 0) {
        setSelectCountries([...selectCountries, countries]);
      }
    }
  };

  const handleDelete = (country) => {
    let countriesFiltrados = selectCountries.filter((el) => el !== country);
    setSelectCountries(countriesFiltrados);
  };

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (
      errorName === "" &&
      errorDifficulty === "" &&
      errorDuration === "" &&
      errorSeason === "" &&
      errorSelectCountries === "" &&
      name !== "" &&
      difficulty !== "" &&
      duration !== "" &&
      season !== "" &&
      selectCountries.length > 0
    ) {
      let inputsOrdenado = {
        name: name,
        dificultad: difficulty,
        duracion: Number(duration),
        temporada: season,
        countries: selectCountries,
      };
      dispatch(createActivity(inputsOrdenado));
    } else {
      alert("You must complete all fields!");
    }
  }

  return (
    <div className={s.divContainer}>
      <form className={s.form} onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label className={s.divLabel}>Name:</label>
          <input
            className={s.inputs}
            value={name}
            onChange={(e) => {
              handleName(e.target.value);
              if (
                /^[A-Za-z\s]+$/g.test(e.target.value.trim()) ||
                e.target.value === ""
              ) {
                setErrorName("");
              } else {
                setErrorName("Only letters.");
              }
            }}
          />
        </div>
        <span>{errorName}</span>
        <div>
          <label className={s.divLabel}>Difficulty:</label>
          <select
            value={difficulty}
            onChange={(e) => {
              if (e.target.value === "-") {
                setErrorDifficulty("You must select a number between 1 and 5");
              } else {
                setErrorDifficulty("");
                handleDifficulty(e.target.value);
              }
            }}
          >
            <option>-</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <span>{errorDifficulty}</span>
        <div>
          <label className={s.divLabel}>Duration:</label>
          <input
            className={s.inputs}
            value={duration}
            onChange={(e) => {
              handleDuration(e.target.value);
              if (
                (/^\d+$/.test(e.target.value) &&
                  e.target.value > 0 &&
                  e.target.value < 73) ||
                e.target.value === ""
              ) {
                setErrorDuration("");
              } else {
                setErrorDuration(
                  "Only positive numbers and between 0 and 72 hours"
                );
              }
            }}
          />
          <span className={s.font}>HS.</span>
        </div>
        <span>{errorDuration}</span>
        <div>
          <label className={s.divLabel}>Season:</label>
          <select
            value={season}
            onChange={(e) => {
              if (e.target.value === "-") {
                setErrorSeason("You must select a season.");
              } else {
                setErrorSeason("");
                handleSeason(e.target.value);
              }
            }}
          >
            <option>-</option>
            <option>Summer</option>
            <option>Spring</option>
            <option>Winter</option>
            <option>Autumn</option>
          </select>
        </div>
        <span>{errorSeason}</span>
        <div>
          <label className={s.divLabel}>Countries code:</label>
          <select
            onChange={(e) => {
              if (e.target.value === "-") {
                setErrorSelectCountries("You must select a country.");
              } else {
                setErrorSelectCountries("");
                handleSelectCountries(e.target.value);
              }
            }}
          >
            <option>-</option>
            {countries.length > 0 ? (
              countries.map((el) => (
                <option id={el.id} key={el.id} value={el.id}>
                  {el.name}
                </option>
              ))
            ) : (
              <option>Loading...</option>
            )}
          </select>
          <div>
            {selectCountries.map((el) => (
              <div key={el}>
                <span>{el}</span>
                <button onClick={() => handleDelete(el)}>X</button>
              </div>
            ))}
          </div>
        </div>
        <span>{errorSelectCountries}</span>
        <div>
          <input type="submit" value="Send"></input>
        </div>
      </form>
    </div>
  );
};

export default CreateActivity;
