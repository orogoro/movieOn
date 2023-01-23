import { createAction } from "@reduxjs/toolkit";

const moviesAction = createAction<[]>("movies/MoviesAction");

export { moviesAction };
