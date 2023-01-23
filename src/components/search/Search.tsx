import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";

import { useAppSelector } from "../../redux/hook";
import { selectors } from "../../redux/movies";
import { getMoviesSearch } from "../../API/APImovies";
import { Loader, MoviesItem } from "../";

import styles from "./Search.module.scss";

const Search: React.FC = () => {
  const [moviesSearch, setMoviesSearch] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [endFix, setEndFix] = useState<boolean>(true);
  const genres = useAppSelector(selectors.getGenres);
  const { query } = useParams();
  const prevQuery = useRef<string | null | undefined>(null);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const results = await getMoviesSearch(query!, page);

        if (results.length < 20) {
          setEndFix(false);
        }

        if (results.length > 0) {
          setMoviesSearch((prevState) => [...prevState, ...results]);
        } else {
          toast.error("Not found");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (prevQuery.current !== query) {
      setMoviesSearch([]);
      setPage(1);
      setEndFix(true);
    }

    if (query) {
      fetchFilms();
    }

    prevQuery.current = query;
  }, [query, page]);

  const showNextMovies = () => {
    setPage(page + 1);
  };

  return (
    <div className={styles.container}>
      <InfiniteScroll
        dataLength={moviesSearch.length}
        next={showNextMovies}
        hasMore={endFix}
        scrollThreshold={1}
        loader={<Loader size={70} styles={styles.loader} />}
      >
        <ul className={styles.list}>
          {moviesSearch.map((item) => (
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

export default Search;
