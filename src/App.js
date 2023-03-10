import React, { useEffect, useState } from "react";
import CarouselsMovies from "./components/Layout/Carousels/CarouselsMovies";
import CarouselsTvShow from "./components/Layout/Carousels/CarouselsTvShow";
import Header from "./components/Layout/Header/Header";
import { fetchContent } from "./utils/axios";
import { requests } from "./utils/const";

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTvShow, setTrendingTvShow] = useState([]);
  const [originalsMovies, setOriginalsMovies] = useState([]);
  const [originalsTvShow, setOriginalsTvShow] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedTvShow, setTopRatedTvShow] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const dataTrendingMovies = await fetchContent(requests.fetchTrendingMovies);
      setTrendingMovies(dataTrendingMovies.results);

      const dataTrendingTvShow = await fetchContent(requests.fetchTrendingTvShow);
      setTrendingTvShow(dataTrendingTvShow.results);

      const dataOriginalsMovies = await fetchContent(requests.fetchNetflixOriginalsMovies);
      setOriginalsMovies(dataOriginalsMovies.results);

      const dataOriginalsTvShow = await fetchContent(requests.fetchNetflixOriginalsTvShow);
      setOriginalsTvShow(dataOriginalsTvShow.results);

      const dataTopRatedMovies = await fetchContent(requests.fetchTopRatedMovies);
      setTopRatedMovies(dataTopRatedMovies.results);

      const dataTopRatedTvShow = await fetchContent(requests.fetchTopRatedTvShow);
      setTopRatedTvShow(dataTopRatedTvShow.results);
    }
    getMovies();
  }, []);

  return (
    <main>
      <Header />
      <CarouselsMovies
        trendingMovies={trendingMovies}
        originalsMovies={originalsMovies}
        topRatedMovies={topRatedMovies}
      />
      <CarouselsTvShow
        trendingTvShow={trendingTvShow}
        originalsTvShow={originalsTvShow}
        topRatedTvShow={topRatedTvShow}
      />
    </main>
  );
}

export default App;
