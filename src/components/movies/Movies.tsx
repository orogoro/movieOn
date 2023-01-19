import { useEffect, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hook";
import InfiniteScroll from "react-infinite-scroll-component";
import { nanoid } from "nanoid";

import { operations, selectors, action } from "../../redux/movies";

import { MoviesItem, Loader } from "../";

import styles from "./Movies.module.scss";

const Movies: React.FC = () => {
  const moviesList = useAppSelector(selectors.getMovies);
  const genres = useAppSelector(selectors.getGenres);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const pageLoaded = useRef<number | null>(null);

  useEffect(() => {
    if (page === pageLoaded.current) {
      return;
    }
    pageLoaded.current = page;

    if (page === 1 && moviesList.length !== 0) {
      dispatch(action.moviesAction([]));
    }

    if (genres.length === 0) {
      dispatch(operations.fetchGenre());
    }

    dispatch(operations.fetchMovies(page));
  }, [dispatch, genres, moviesList, page]);

  const showNextMovies = () => {
    setPage(page + 1);
  };

  return (
    <div className={styles.container}>
      <InfiniteScroll
        dataLength={moviesList.length}
        next={showNextMovies}
        hasMore={moviesList.length < 20 ? false : true}
        scrollThreshold={1}
        loader={<Loader size={70} styles={styles.loader} />}
      >
        <ul className={styles.list}>
          {moviesList.map((item) => (
            <MoviesItem
              key={`${item.id}_${nanoid()}`}
              data={item}
              genres={genres}
            />
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default Movies;
