import React, { useEffect, useState } from "react";
import { fetchMovies } from "./utils/axios";
import { requests } from "./utils/const";
import Carousels from "./components/Layout/Carousels";

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [originalsMovies, setOriginalsMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [documentariesMovies, setDocumentariesMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const dataTrending = await fetchMovies(requests.fetchTrending);
      setTrendingMovies(dataTrending.results);

      const dataRomance = await fetchMovies(requests.fetchRomanceMovies);
      setRomanceMovies(dataRomance.results);

      const dataOriginals = await fetchMovies(requests.fetchNetflixOriginals);
      setOriginalsMovies(dataOriginals.results);

      const dataTopRated = await fetchMovies(requests.fetchTopRated);
      setTopRatedMovies(dataTopRated.results);

      const dataAction = await fetchMovies(requests.fetchActionMovies);
      setActionMovies(dataAction.results);

      const dataComedy = await fetchMovies(requests.fetchComedyMovies);
      setComedyMovies(dataComedy.results);

      const dataHorror = await fetchMovies(requests.fetchHorrorMovies);
      setHorrorMovies(dataHorror.results);

      const dataDocumentaries = await fetchMovies(requests.fetchDocumentaries);
      setDocumentariesMovies(dataDocumentaries.results);
    }
    getMovies();
  }, []);

  return (
    <main>
      <Carousels
        trendingMovies={trendingMovies}
        romanceMovies={romanceMovies}
        originalsMovies={originalsMovies}
        topRatedMovies={topRatedMovies}
        actionMovies={actionMovies}
        comedyMovies={comedyMovies}
        horrorMovies={horrorMovies}
        documentariesMovies={documentariesMovies}
      />
    </main>
  );
}

export default App;
