import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../../Redux/actions";
import { useState } from "react";
import s from "../Formulario/Formulario.module.css";

export const CreateActivity = () => {
  const countries = useSelector((state) => state.countries);

  return (
    <div className={s.divContainer}>
      <form className={s.form}>
        <div>
          <label className={s.divLabel}>Name:</label>
          <input className={s.inputs} />
        </div>
        <div>
          <label className={s.divLabel}>Difficulty:</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div>
          <label className={s.divLabel}>Duration:</label>
          <input className={s.inputs} />
        </div>
        <div>
          <label className={s.divLabel}>Season:</label>
          <select>
            <option>Summer</option>
            <option>Spring</option>
            <option>Winter</option>
            <option>Autumn</option>
          </select>
        </div>
        <div>
          <label className={s.divLabel}>Countries:</label>
          <select>
            {countries.length > 0 ? (
              countries.map((el) => (
                <option id={el.id} key={el.id}>
                  {el.name}
                </option>
              ))
            ) : (
              <option>Loading...</option>
            )}
          </select>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};

export default CreateActivity;
