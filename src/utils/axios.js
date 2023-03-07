import axios from "axios";

export async function fetchMovies(url) {
  const response = await axios.get(url);
  return response.data;
}
