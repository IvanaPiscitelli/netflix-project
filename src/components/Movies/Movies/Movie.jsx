import React from "react";
import style from "./Movie.module.css";

const Movie = ({ poster }) => {
  return (
    <div className={style.card}>
      <img src={poster} alt="movies cover" className={style["product--image"]} />
    </div>
  );
};

export default Movie;
