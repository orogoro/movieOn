import axios from "axios";

export const BASEURL = "https://api.themoviedb.org/3";
export const IMAGEURL = "https://image.tmdb.org/t/p/w780/";

const API_KEY = "?api_key=a8a4168eeeb623f39ee02028275e7a3e";

export const movies = axios.create({
  baseURL: `${BASEURL}`,
});

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
async function getMoviesGenre(): Promise<any | undefined> {
  try {
    let response = await movies.get(
      `/genre/movie/list${API_KEY}&language=en-US`
    );
    return response.data.genres;
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
async function getMovie(id: number): Promise<any | undefined> {
  try {
    let response = await movies.get(`/movie/${id}${API_KEY}&language=en-US`);
    return response.data;
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

export { getMoviesRequest, getMoviesGenre, getMovie };
