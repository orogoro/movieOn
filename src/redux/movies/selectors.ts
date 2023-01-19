import { RootState } from "../store";

export const getMovies = (state: RootState) =>
  state.movies.moviesTrendsReducer.data;

export const getGenres = (state: RootState) =>
  state.movies.moviesTrendsReducer.genres;

export const getOneMovie = (state: RootState) =>
  state.movies.moviesTrendsReducer.movie;

export const getCredits = (state: RootState) =>
  state.movies.moviesTrendsReducer.credits;

export const getPosters = (state: RootState) =>
  state.movies.moviesTrendsReducer.posters;

export const getBackImg = (state: RootState) =>
  state.movies.moviesTrendsReducer.backImg;

export const getVideos = (state: RootState) => state.movies.videoReducer.videos;

export const loadingVideo = (state: RootState) =>
  state.movies.videoReducer.loading;

export const errorgVideo = (state: RootState) =>
  state.movies.videoReducer.error;
