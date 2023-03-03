import React from "react";
import style from "./Movie.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Movie = () => {
  return (
    <section className={style.slider}>
      <button className={style["slider-prev"]}>
        <FaArrowLeft />
      </button>

      <div className={style["inner-slider"]}>
        <div className={style["slider-item"]}>
          <img src="" alt="movies cover" />
        </div>
      </div>

      <div className={style["inner-slider"]}>
        <div className={style["slider-item"]}>
          <img src="" alt="movies cover" />
        </div>
      </div>

      <div className={style["inner-slider"]}>
        <div className={style["slider-item"]}>
          <img src="" alt="movies cover" />
        </div>
      </div>

      <button className={style["slider-next"]}>
        <FaArrowRight />
      </button>
    </section>
  );
};

export default Movie;
