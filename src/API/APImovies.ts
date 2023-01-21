import axios from "axios";

import { moviesTypes } from "../types";

export const BASEURL = "https://api.themoviedb.org/3";
export const IMAGEURL = "https://image.tmdb.org/t/p/w780/";

const API_KEY = "?api_key=a8a4168eeeb623f39ee02028275e7a3e";

export const movies = axios.create({
  baseURL: `${BASEURL}`,
});

async function getMoviesRequest(
  page: number
): Promise<moviesTypes.MoviesItem[] | undefined> {
  try {
    let response = await movies.get(
      `/trending/movie/day${API_KEY}&page=${page}`
    );
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
async function getMoviesGenre(): Promise<moviesTypes.GenresType[] | undefined> {
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
async function getMovie(
  id: string
): Promise<moviesTypes.OneMovieType | undefined> {
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

async function getCredits(
  id: string
): Promise<moviesTypes.CreditsType | undefined> {
  try {
    let response = await movies.get(
      `/movie/${id}/credits${API_KEY}&language=en-US`
    );
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
async function getImages(
  id: string
): Promise<moviesTypes.ImagesType | undefined> {
  try {
    let response = await movies.get(`/movie/${id}/images${API_KEY}`);
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

async function getVideos(
  id: string
): Promise<moviesTypes.VideosType[] | undefined> {
  try {
    let response = await movies.get(`/movie/${id}/videos${API_KEY}`);
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

async function getReviews(
  id: string
): Promise<moviesTypes.ReviewsType[] | undefined> {
  try {
    let response = await movies.get(
      `/movie/${id}/reviews${API_KEY}&language=en-US`
    );
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

export {
  getMoviesRequest,
  getMoviesGenre,
  getMovie,
  getCredits,
  getImages,
  getVideos,
  getReviews,
};
