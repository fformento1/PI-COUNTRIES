import React from "react";
import { Link } from "react-router-dom";
import s from "../LandingPage/LandingPage.module.css";
import imgDespegar from "../../Despegar.png";
import imgAlmundo from "../../AlMundo.png";
import imgGitHub from "../../LogoGITHUB.png";

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
              <img src={imgDespegar} className={s.img} />
            </a>
            <a href="https://almundo.com.ar/" target="_blank">
              <img src={imgAlmundo} className={s.img} />
            </a>
          </div>
        </div>
      </div>
      <div className={s.divFooter}>
        <footer>
          <div className={s.divFooter}>
            <h3>By Fernanda Formento</h3>
            <a href="https://github.com/fformento1" target="_blank">
              <img src={imgGitHub} className={s.imgFooter} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
