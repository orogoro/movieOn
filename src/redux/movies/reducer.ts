import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import { fetchMovies } from "./operations";

type MovieState = {
  data: any[];
};

const initialState: MovieState = {
  data: [],
};

const moviesTrendsReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
    state.data = [...payload];
  });
});

const moviesReducer = combineReducers({
  moviesTrendsReducer,
});

export { moviesReducer };
