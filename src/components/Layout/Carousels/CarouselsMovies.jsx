import React, { Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BASE_IMAGE, responsive } from "../../../utils/const";
import Movie from "../../Movies/Movie";
import style from "./Carousels.module.css";

const CarouselsMovies = ({
  trendingMovies,
  romanceMovies,
  originalsMovies,
  topRatedMovies,
  actionMovies,
  comedyMovies,
  horrorMovies,
  documentariesMovies,
}) => {
  return (
    <div>
      {trendingMovies?.length > 0 && (
        <Fragment>
          <h2 className={style.title}>Trending Movies</h2>
          <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
            {trendingMovies.map((trendingMovie) => {
              return <Movie key={trendingMovie.id} poster={`${BASE_IMAGE}${trendingMovie.poster_path}`} />;
            })}
          </Carousel>
        </Fragment>
      )}

      {romanceMovies?.length > 0 && (
        <Fragment>
          <h2 className={style.title}>Romance</h2>
          <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
            {romanceMovies.map((romanceMovie) => {
              return <Movie key={romanceMovie.id} poster={`${BASE_IMAGE}${romanceMovie.poster_path}`} />;
            })}
          </Carousel>
        </Fragment>
      )}

      {originalsMovies?.length > 0 && (
        <Fragment>
          <h2 className={style.title}>Netflix Originals Movies</h2>
          <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
            {originalsMovies.map((originalsMovie) => {
              return <Movie key={originalsMovie.id} poster={`${BASE_IMAGE}${originalsMovie.poster_path}`} />;
            })}
          </Carousel>
        </Fragment>
      )}

      {topRatedMovies?.length > 0 && (
        <Fragment>
          <h2 className={style.title}>Popular Movies</h2>
          <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
            {topRatedMovies.map((topRatedMovie) => {
              return <Movie key={topRatedMovie.id} poster={`${BASE_IMAGE}${topRatedMovie.poster_path}`} />;
            })}
          </Carousel>
        </Fragment>
      )}

      {actionMovies?.length > 0 && (
        <Fragment>
          <h2 className={style.title}>Action</h2>
          <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
            {actionMovies.map((actionMovie) => {
              return <Movie key={actionMovie.id} poster={`${BASE_IMAGE}${actionMovie.poster_path}`} />;
            })}
          </Carousel>
        </Fragment>
      )}

      {comedyMovies?.length > 0 && (
        <Fragment>
          <h2 className={style.title}>Comedy</h2>
          <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
            {comedyMovies.map((comedyMovie) => {
              return <Movie key={comedyMovie.id} poster={`${BASE_IMAGE}${comedyMovie.poster_path}`} />;
            })}
          </Carousel>
        </Fragment>
      )}

      {horrorMovies?.length > 0 && (
        <Fragment>
          <h2 className={style.title}>Horror</h2>
          <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
            {horrorMovies.map((horrorMovie) => {
              return <Movie key={horrorMovie.id} poster={`${BASE_IMAGE}${horrorMovie.poster_path}`} />;
            })}
          </Carousel>
        </Fragment>
      )}

      {documentariesMovies?.length > 0 && (
        <Fragment>
          <h2 className={style.title}>Documentaries</h2>
          <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
            {documentariesMovies.map((documentariesMovie) => {
              return <Movie key={documentariesMovie.id} poster={`${BASE_IMAGE}${documentariesMovie.poster_path}`} />;
            })}
          </Carousel>
        </Fragment>
      )}
    </div>
  );
};

export default CarouselsMovies;
