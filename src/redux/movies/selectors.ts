import { RootState } from "../store";

export const getMovies = (state: RootState) =>
  state.movies.moviesTrendsReducer.data;

export const getGenres = (state: RootState) =>
  state.movies.moviesTrendsReducer.genres;

export const getOneMovie = (state: RootState) =>
  state.movies.moviesTrendsReducer.movie;

export const getCredits = (state: RootState) =>
  state.movies.moviesTrendsReducer.credits;

export const getImages = (state: RootState) =>
  state.movies.moviesTrendsReducer.images;
