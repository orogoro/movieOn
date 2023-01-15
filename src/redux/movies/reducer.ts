import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import { fetchMovies, fetchGenre } from "./operations";

type MovieState = {
  data: any[];
  genres: [{ id: number; name: string }] | any;
};

const initialState: MovieState = {
  data: [],
  genres: [],
};

const moviesTrendsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.data = [...payload];
    })
    .addCase(fetchGenre.fulfilled, (state, { payload }) => {
      state.genres = [...payload];
    });
});

const moviesReducer = combineReducers({
  moviesTrendsReducer,
});

export { moviesReducer };
