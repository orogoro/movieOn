import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMoviesRequest, getMoviesGenre } from "../../API/APImovies";

interface MoviesItem {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  total_pages: number;
  total_results: number;
}
interface GenresType {
  id: number;
  name: string;
}

const fetchMovies = createAsyncThunk<
  MoviesItem[],
  undefined,
  { rejectValue: any }
>("movies/fetchMovies", async (_, { rejectWithValue }: any) => {
  try {
    const response = await getMoviesRequest();
    return response as MoviesItem;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const fetchGenre = createAsyncThunk<
  GenresType[],
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

export { fetchMovies, fetchGenre };
