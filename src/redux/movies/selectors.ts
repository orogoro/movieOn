import { RootState } from "../store";

export const getMovies = (state: RootState) =>
  state.movies.moviesTrendsReducer.data;

export const getGenres = (state: RootState) =>
  state.movies.moviesTrendsReducer.genres;

export const getOneMovie = (state: RootState) =>
  state.movies.movieManualReducer.movie;

export const getCredits = (state: RootState) =>
  state.movies.movieManualReducer.credits;

export const getPosters = (state: RootState) =>
  state.movies.movieManualReducer.posters;

export const getBackImg = (state: RootState) =>
  state.movies.movieManualReducer.backImg;

export const getReviews = (state: RootState) =>
  state.movies.movieManualReducer.reviews;

export const getLoadingManual = (state: RootState) =>
  state.movies.movieManualReducer.loading;

export const getVideos = (state: RootState) => state.movies.videoReducer.videos;

export const loadingVideo = (state: RootState) =>
  state.movies.videoReducer.loading;

export const errorgVideo = (state: RootState) =>
  state.movies.videoReducer.error;
