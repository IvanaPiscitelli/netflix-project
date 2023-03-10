const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const requests = {
  fetchTrendingMovies: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendingTvShow: `${BASE_URL}/trending/tv/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginalsMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentariesMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  fetchDocumentariesTvShow: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=99`,
  fetchRomanceTvShow: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchNetflixOriginalsTvShow: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedTvShow: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionTvShow: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10759`,
  fetchComedyTvShow: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchCrimeTvShow: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=80`,
};

export const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1600 },
    items: 7,
    slidesToSlide: 2,
  },
  largeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1600, min: 1450 },
    items: 6,
    slidesToSlide: 2,
  },
  bigDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1450, min: 1291 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1291, min: 1041 },
    items: 4,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1041, min: 781 },
    items: 3,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 781, min: 531 },
    items: 2,
    slidesToSlide: 2,
  },
  miniMobile: {
    breakpoint: { max: 531, min: 0 },
    items: 1,
    slidesToSlide: 2,
  },
};
