import { RootState } from "../store";

export const getMovies = (state: RootState) =>
  state.movies.moviesTrendsReducer.data;
export const getGenres = (state: RootState) =>
  state.movies.moviesTrendsReducer.genres;
