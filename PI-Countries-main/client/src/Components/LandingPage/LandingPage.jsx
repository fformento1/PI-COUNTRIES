import React from "react";
import { Link } from "react-router-dom";
import s from "../LandingPage/LandingPage.module.css";

export const LandingPage = () => {
  return (
    <div className={s.div}>
      <div className={s.divContenedorHeader}>
        <div className={s.divHeader}>
          <button className={s.button}>
            <Link to="/home" className={s.fontHome}>
              HOME
            </Link>
          </button>
        </div>
      </div>
      <div className={s.divMain}>
        <div className={s.divLogosEmpresas}>
          <div className={s.divContenedorLogos}>
            <h2 className={s.fontHome1}>
              Plan your trip in the following links
            </h2>
            <a href="https://www.despegar.com.ar/" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Despegar.com_logo.svg/1280px-Despegar.com_logo.svg.png"
                className={s.img}
              />
            </a>
            <a href="https://almundo.com.ar/" target="_blank">
              <img
                src="http://www.sitemarca.com/wp-content/uploads/2017/12/Logo-Almundo-The-Travellers-Community-1024x326.png"
                className={s.img}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={s.divFooter}>
        <footer>
          <div className={s.divFooter}>
            <h3>By Fernanda Formento</h3>
            <a href="https://github.com/fformento1" target="_blank">
              <img
                src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png"
                className={s.imgFooter}
              />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
