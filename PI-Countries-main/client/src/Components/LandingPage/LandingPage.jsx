import React from "react";
import { Link } from "react-router-dom";
import s from "../LandingPage/LandingPage.module.css";

export const LandingPage = () => {
  return (
    <div className={s.div}>
      <Link to="/home">
        <button className={s.button}>Home</button>
      </Link>
      <div>
        <footer>
          <div>
            <h1>Plan your trip in the following links</h1>
            <a href="https://www.despegar.com.ar/" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Despegar.com_logo.svg/1280px-Despegar.com_logo.svg.png"
                className={s.button}
              />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
