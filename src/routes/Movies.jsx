import { useEffect, useState } from "react";
import CarouselsMovies from "../components/Layout/Carousels/CarouselsMovies";
import Header from "../components/Layout/Header/Header";
import { fetchContent } from "../utils/axios";
import { requests } from "../utils/const";

const Movies = () => {
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
      const dataTrending = await fetchContent(requests.fetchTrendingMovies);
      setTrendingMovies(dataTrending.results);

      const dataRomance = await fetchContent(requests.fetchRomanceMovies);
      setRomanceMovies(dataRomance.results);

      const dataOriginals = await fetchContent(requests.fetchNetflixOriginalsMovies);
      setOriginalsMovies(dataOriginals.results);

      const dataTopRated = await fetchContent(requests.fetchTopRatedMovies);
      setTopRatedMovies(dataTopRated.results);

      const dataAction = await fetchContent(requests.fetchActionMovies);
      setActionMovies(dataAction.results);

      const dataComedy = await fetchContent(requests.fetchComedyMovies);
      setComedyMovies(dataComedy.results);

      const dataHorror = await fetchContent(requests.fetchHorrorMovies);
      setHorrorMovies(dataHorror.results);

      const dataDocumentaries = await fetchContent(requests.fetchDocumentariesMovies);
      setDocumentariesMovies(dataDocumentaries.results);
    }
    getMovies();
  }, []);

  return (
    <div>
      <Header />
      <CarouselsMovies
        trendingMovies={trendingMovies}
        romanceMovies={romanceMovies}
        originalsMovies={originalsMovies}
        topRatedMovies={topRatedMovies}
        actionMovies={actionMovies}
        comedyMovies={comedyMovies}
        horrorMovies={horrorMovies}
        documentariesMovies={documentariesMovies}
      />
    </div>
  );
};

export default Movies;
