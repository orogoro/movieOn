import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import { fetchMovies, fetchGenre, fetchOneMovie } from "./operations";

type MovieState = {
  data: any[];
  genres: [{ id: number; name: string }] | any;
  movie: null | any;
};

const initialState: MovieState = {
  data: [],
  genres: [],
  movie: null,
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
    });
});

const moviesReducer = combineReducers({
  moviesTrendsReducer,
});

export { moviesReducer };
