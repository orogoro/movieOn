import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import "react-toastify/dist/ReactToastify.css";

import {
  fetchMovies,
  fetchGenre,
  fetchOneMovie,
  fetchCredits,
  fetchImages,
  fetchVideos,
  fetchReviews,
} from "./operations";
import { moviesAction } from "./action";

type MovieState = {
  data: any[];
  genres: [{ id: number; name: string }] | any;
};

type MovieManualState = {
  movie: null | any;
  credits: any[];
  posters: any[];
  backImg: any[];
  reviews: any[];
  loading: boolean;
};

type VideoReducerTypes = {
  videos: any[];
  loading: boolean;
  error: boolean;
};

const initialState: MovieState = {
  data: [],
  genres: [],
};

const moviesTrendsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.data = [...state.data, ...payload];
    })
    .addCase(moviesAction, (state, { payload }) => {
      state.data = payload;
    })
    .addCase(fetchGenre.fulfilled, (state, { payload }) => {
      state.genres = [...payload];
    });
});

const initialStateManual: MovieManualState = {
  movie: null,
  credits: [],
  posters: [],
  backImg: [],
  reviews: [],
  loading: false,
};

const movieManualReducer = createReducer(initialStateManual, (builder) => {
  builder
    .addCase(fetchOneMovie.fulfilled, (state, { payload }) => {
      state.movie = payload;
      state.loading = false;
    })
    .addCase(fetchOneMovie.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchOneMovie.rejected, (state) => {
      state.loading = false;
    })
    .addCase(fetchCredits.fulfilled, (state, { payload }) => {
      state.credits = [...payload?.cast];
    })
    .addCase(fetchImages.fulfilled, (state, { payload }) => {
      state.posters = [...payload?.posters];
      state.backImg = [...payload?.backdrops];
    })
    .addCase(fetchReviews.fulfilled, (state, { payload }) => {
      state.reviews = [...payload];
    });
});

const initialStateVideos: VideoReducerTypes = {
  videos: [],
  loading: false,
  error: false,
};

const videoReducer = createReducer(initialStateVideos, (builder) => {
  builder
    .addCase(fetchVideos.fulfilled, (state, { payload }) => {
      state.videos = [...payload];
      state.loading = false;
      state.error = false;
    })
    .addCase(fetchVideos.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(fetchVideos.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
});

const moviesReducer = combineReducers({
  moviesTrendsReducer,
  movieManualReducer,
  videoReducer,
});

export { moviesReducer };
