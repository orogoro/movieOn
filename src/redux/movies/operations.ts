import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMoviesRequest,
  getMoviesGenre,
  getMovie,
  getCredits,
  getImages,
  getVideos,
  getReviews,
} from "../../API/APImovies";

import { moviesTypes } from "../../types";

const fetchMovies = createAsyncThunk<
  moviesTypes.MoviesItem[],
  number,
  { rejectValue: any }
>("movies/fetchMovies", async (page, { rejectWithValue }: any) => {
  try {
    const response = await getMoviesRequest(page);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const fetchGenre = createAsyncThunk<
  moviesTypes.GenresType[],
  undefined,
  { rejectValue: any }
>("movies/fetchGenre", async (_, { rejectWithValue }: any) => {
  try {
    const response = await getMoviesGenre();
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const fetchOneMovie = createAsyncThunk<
  moviesTypes.OneMovieType,
  string,
  { rejectValue: any }
>("movies/fetchOneMovie", async (id, { rejectWithValue }: any) => {
  try {
    const response = await getMovie(id);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const fetchCredits = createAsyncThunk<
  moviesTypes.CreditsType,
  string,
  { rejectValue: any }
>("movies/fetchCredits", async (id, { rejectWithValue }: any) => {
  try {
    const response = await getCredits(id);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const fetchImages = createAsyncThunk<
  moviesTypes.ImagesType,
  string,
  { rejectValue: any }
>("movies/fetchImages", async (id, { rejectWithValue }: any) => {
  try {
    const response = await getImages(id);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const fetchVideos = createAsyncThunk<
  moviesTypes.VideosType[],
  string,
  { rejectValue: any }
>("movies/fetchVideos", async (id, { rejectWithValue }: any) => {
  try {
    const response = await getVideos(id);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const fetchReviews = createAsyncThunk<
  moviesTypes.ReviewsType[],
  string,
  { rejectValue: any }
>("movies/fetchReviews", async (id, { rejectWithValue }: any) => {
  try {
    const response = await getReviews(id);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export {
  fetchMovies,
  fetchGenre,
  fetchOneMovie,
  fetchCredits,
  fetchImages,
  fetchVideos,
  fetchReviews,
};
