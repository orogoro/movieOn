import { useCallback, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hook";

import { getMovies, getGenres } from "../../redux/movies/selectors";
import {
  fetchMovies,
  fetchGenre,
  fetchOneMovie,
} from "../../redux/movies/operations";

import { MoviesItem } from "../";

import styles from "./Movies.module.scss";

const Movies: React.FC = () => {
  const moviesList = useAppSelector(getMovies);
  const genres = useAppSelector(getGenres);
  const dispatch = useAppDispatch();

  const getById = useCallback(
    (id: number): void => {
      dispatch(fetchOneMovie(id));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenre());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {moviesList.map((item) => (
          <MoviesItem
            key={item.id}
            data={item}
            genres={genres}
            getById={getById}
          />
        ))}
      </ul>
    </div>
  );
};

export default Movies;
