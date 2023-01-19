import { createAction } from "@reduxjs/toolkit";

const moviesAction = createAction<[]>("movies/fetchMoviesAction");

export { moviesAction };
