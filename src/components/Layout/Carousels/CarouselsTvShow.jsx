import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BASE_IMAGE, responsive } from "../../../utils/const";
import Movie from "../../Movies/Movie";
import style from "./Carousels.module.css";

const CarouselsTvShow = ({
  trendingTvShow,
  romanceTvShow,
  originalsTvShow,
  topRatedTvShow,
  actionTvShow,
  comedyTvShow,
  crimeTvShow,
  documentariesTvShow,
}) => {
  return (
    <div>
      <h2 className={style.title}>Trending</h2>
      <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
        {trendingTvShow.map((tgTvShow) => {
          return <Movie key={tgTvShow.id} poster={`${BASE_IMAGE}${tgTvShow.poster_path}`} />;
        })}
      </Carousel>
      <h2 className={style.title}>Romance</h2>
      <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
        {romanceTvShow.map((rTvShow) => {
          return <Movie key={rTvShow.id} poster={`${BASE_IMAGE}${rTvShow.poster_path}`} />;
        })}
      </Carousel>
      <h2 className={style.title}>Netflix Originals</h2>
      <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
        {originalsTvShow.map((oTvShow) => {
          return <Movie key={oTvShow.id} poster={`${BASE_IMAGE}${oTvShow.poster_path}`} />;
        })}
      </Carousel>
      <h2 className={style.title}>Popular</h2>
      <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
        {topRatedTvShow.map((trTvShow) => {
          return <Movie key={trTvShow.id} poster={`${BASE_IMAGE}${trTvShow.poster_path}`} />;
        })}
      </Carousel>
      <h2 className={style.title}>Action</h2>
      <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
        {actionTvShow.map((actTvShow) => {
          return <Movie key={actTvShow.id} poster={`${BASE_IMAGE}${actTvShow.poster_path}`} />;
        })}
      </Carousel>
      <h2 className={style.title}>Comedy</h2>
      <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
        {comedyTvShow.map((cdTvShow) => {
          return <Movie key={cdTvShow.id} poster={`${BASE_IMAGE}${cdTvShow.poster_path}`} />;
        })}
      </Carousel>
      <h2 className={style.title}>Crime</h2>
      <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
        {crimeTvShow.map((criTvShow) => {
          return <Movie key={criTvShow.id} poster={`${BASE_IMAGE}${criTvShow.poster_path}`} />;
        })}
      </Carousel>
      <h2 className={style.title}>Documentaries</h2>
      <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
        {documentariesTvShow.map((docsTvShow) => {
          return <Movie key={docsTvShow.id} poster={`${BASE_IMAGE}${docsTvShow.poster_path}`} />;
        })}
      </Carousel>
    </div>
  );
};

export default CarouselsTvShow;
