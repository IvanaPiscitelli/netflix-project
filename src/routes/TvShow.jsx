import React, { useEffect, useState } from "react";
import CarouselsTvShow from "../components/Layout/Carousels/CarouselsTvShow";
import { fetchContent } from "../utils/axios";
import { requests } from "../utils/const";

const TvShow = () => {
  const [trendingTvShow, setTrendingTvShow] = useState([]);
  const [romanceTvShow, setRomanceTvShow] = useState([]);
  const [originalsTvShow, setOriginalsTvShow] = useState([]);
  const [topRatedTvShow, setTopRatedTvShow] = useState([]);
  const [actionTvShow, setActionTvShow] = useState([]);
  const [comedyTvShow, setComedyTvShow] = useState([]);
  const [crimeTvShow, setCrimeTvShow] = useState([]);
  const [documentariesTvShow, setDocumentariesTvShow] = useState([]);

  useEffect(() => {
    async function getTvShow() {
      const dataTrending = await fetchContent(requests.fetchTrending);
      setTrendingTvShow(dataTrending.results);

      const dataRomance = await fetchContent(requests.fetchRomanceTvShow);
      setRomanceTvShow(dataRomance.results);

      const dataOriginals = await fetchContent(requests.fetchNetflixOriginalsTvShow);
      setOriginalsTvShow(dataOriginals.results);

      const dataTopRated = await fetchContent(requests.fetchTopRatedTvShow);
      setTopRatedTvShow(dataTopRated.results);

      const dataAction = await fetchContent(requests.fetchActionTvShow);
      setActionTvShow(dataAction.results);

      const dataComedy = await fetchContent(requests.fetchComedyTvShow);
      setComedyTvShow(dataComedy.results);

      const dataCrime = await fetchContent(requests.fetchCrimeTvShow);
      setCrimeTvShow(dataCrime.results);

      const dataDocumentaries = await fetchContent(requests.fetchDocumentariesTvShow);
      setDocumentariesTvShow(dataDocumentaries.results);
    }
    getTvShow();
  }, []);

  return (
    <div>
      <CarouselsTvShow
        trendingTvShow={trendingTvShow}
        romanceTvShow={romanceTvShow}
        originalsTvShow={originalsTvShow}
        topRatedTvShow={topRatedTvShow}
        actionTvShow={actionTvShow}
        comedyTvShow={comedyTvShow}
        crimeTvShow={crimeTvShow}
        documentariesTvShow={documentariesTvShow}
      />
    </div>
  );
};

export default TvShow;
