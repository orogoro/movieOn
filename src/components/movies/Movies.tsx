import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hook";

import { getMovies } from "../../redux/movies/selectors";
import { fetchMovies } from "../../redux/movies/operations";

// import styles from "./Movies.module.scss";

const Movies: React.FC = () => {
  const movies = useAppSelector(getMovies);
  const dispatch = useAppDispatch();
  console.log(movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return null;
};

export default Movies;
