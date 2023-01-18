import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMoviesRequest,
  getMoviesGenre,
  getMovie,
  getCredits,
  getImages,
  getVideos,
} from "../../API/APImovies";

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

interface CreditsType {
  id: number;
  cast: any[];
  crew: any[];
}

interface ImagesArrayType {
  height: number;
  aspect_ratio: number;
  file_path: string;
  iso_639_1: string | null;
  vote_average: number;
  vote_count: number;
  width: number;
}

interface ImagesType {
  id: number;
  backdrops: ImagesArrayType[];
  posters: ImagesArrayType[];
  logos: ImagesArrayType[];
}

interface VideosType {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: true;
  published_at: string;
  site: string;
  size: number;
  type: string;
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
    return response as GenresType;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const fetchOneMovie = createAsyncThunk<any, string, { rejectValue: any }>(
  "movies/fetchOneMovie",
  async (id, { rejectWithValue }: any) => {
    try {
      const response = await getMovie(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const fetchCredits = createAsyncThunk<
  CreditsType,
  string,
  { rejectValue: any }
>("movies/fetchCredits", async (id, { rejectWithValue }: any) => {
  try {
    const response = await getCredits(id);
    return response as CreditsType;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const fetchImages = createAsyncThunk<ImagesType, string, { rejectValue: any }>(
  "movies/fetchImages",
  async (id, { rejectWithValue }: any) => {
    try {
      const response = await getImages(id);
      return response as ImagesType;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const fetchVideos = createAsyncThunk<
  VideosType[],
  string,
  { rejectValue: any }
>("movies/fetchVideos", async (id, { rejectWithValue }: any) => {
  try {
    const response = await getVideos(id);
    return response as VideosType;
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
};
