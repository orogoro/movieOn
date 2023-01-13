import axios from "axios";

export const movies = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
const API_KEY = "?api_key=a8a4168eeeb623f39ee02028275e7a3e";

async function getMoviesRequest(): Promise<any | undefined> {
  try {
    let response = await movies.get(`/trending/movie/day${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
    if (axios.isCancel(error)) {
      return Promise.reject();
    } else {
      console.log("Error", error);
      return;
    }
  }
}

export { getMoviesRequest };