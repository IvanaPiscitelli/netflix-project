import React, { useEffect, useState } from "react";
import { fetchMovies } from "./utils/axios";
import { BASE_IMAGE, requests, responsive } from "./utils/const";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Movie from "./components/Movies/Movie";

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const dataTrending = await fetchMovies(requests.fetchTrending);
      setTrendingMovies(dataTrending.results);

      const dataRomance = await fetchMovies(requests.fetchRomanceMovies);
      console.log(dataRomance.results);
      setRomanceMovies(dataRomance.results);
    }
    getMovies();
  }, []);

  return (
    <main>
      <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
        {trendingMovies.map((trendingMovie) => {
          return <Movie key={trendingMovie.id} poster={`${BASE_IMAGE}${trendingMovie.poster_path}`} />;
        })}
      </Carousel>
      <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
        {romanceMovies.map((romanceMovie) => {
          return <Movie key={romanceMovie.id} poster={`${BASE_IMAGE}${romanceMovie.poster_path}`} />;
        })}
      </Carousel>

      <Carousel responsive={responsive} infinite customTransition="transform 330ms ease-out 50ms">
        {romanceMovies.map((romanceMovie) => {
          return <Movie key={romanceMovie.id} poster={`${BASE_IMAGE}${romanceMovie.poster_path}`} />;
        })}
      </Carousel>
    </main>
  );
}

export default App;
