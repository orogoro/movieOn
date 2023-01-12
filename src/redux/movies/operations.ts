import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMoviesRequest } from "../../API/APImovies";

const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getMoviesRequest();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export { fetchMovies };
