import axios from "axios";

export async function fetchContent(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}
