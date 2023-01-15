import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hook";

import { getMovies, getGenres } from "../../redux/movies/selectors";
import { fetchMovies, fetchGenre } from "../../redux/movies/operations";

import { MoviesItem } from "../";

import styles from "./Movies.module.scss";

const Movies: React.FC = () => {
  const moviesList = useAppSelector(getMovies);
  const genres = useAppSelector(getGenres);
  const dispatch = useAppDispatch();
  //   console.log(genres);

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenre());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {moviesList.map((item) => (
          <MoviesItem key={item.id} data={item} genres={genres} />
        ))}
      </ul>
    </div>
  );
};

export default Movies;
