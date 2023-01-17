import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  fetchMovies,
  fetchGenre,
  fetchOneMovie,
  fetchCredits,
  fetchImages,
} from "./operations";

type MovieState = {
  data: any[];
  genres: [{ id: number; name: string }] | any;
  movie: null | any;
  credits: any[];
  images: any[];
};

const initialState: MovieState = {
  data: [],
  genres: [],
  movie: null,
  credits: [],
  images: [],
};

const moviesTrendsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.data = [...payload];
    })
    .addCase(fetchGenre.fulfilled, (state, { payload }) => {
      state.genres = [...payload];
    })
    .addCase(fetchOneMovie.fulfilled, (state, { payload }) => {
      state.movie = payload;
    })
    .addCase(fetchCredits.fulfilled, (state, { payload }) => {
      state.credits = [...payload.cast];
    })
    .addCase(fetchImages.fulfilled, (state, { payload }) => {
      state.images = [...payload];
    });
});

const moviesReducer = combineReducers({
  moviesTrendsReducer,
});

export { moviesReducer };
