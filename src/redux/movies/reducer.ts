import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  fetchMovies,
  fetchGenre,
  fetchOneMovie,
  fetchCredits,
  fetchImages,
  fetchVideos,
} from "./operations";

type MovieState = {
  data: any[];
  genres: [{ id: number; name: string }] | any;
  movie: null | any;
  credits: any[];
  posters: any[];
  backImg: any[];
};

type VideoReducerTypes = {
  videos: any[];
  loading: boolean;
};

const initialState: MovieState = {
  data: [],
  genres: [],
  movie: null,
  credits: [],
  posters: [],
  backImg: [],
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
      state.credits = [...payload?.cast];
    })
    .addCase(fetchImages.fulfilled, (state, { payload }) => {
      state.posters = [...payload?.posters];
      state.backImg = [...payload?.backdrops];
    });
});

const initialStateVideos: VideoReducerTypes = {
  videos: [],
  loading: false,
};

const videoReducer = createReducer(initialStateVideos, (builder) => {
  builder
    .addCase(fetchVideos.fulfilled, (state, { payload }) => {
      state.videos = [...payload];
      state.loading = false;
    })
    .addCase(fetchVideos.pending, (state) => {
      state.loading = true;
    });
});

const moviesReducer = combineReducers({
  moviesTrendsReducer,
  videoReducer,
});

export { moviesReducer };
