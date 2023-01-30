import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";

import { useAppSelector, useAppDispatch } from "../../redux/hook";
import { operations, selectors } from "../../redux/movies";
import { getMoviesSearch } from "../../API/APImovies";
import { Loader, MoviesItem, NotFound } from "../";

import styles from "./Search.module.scss";

const Search: React.FC = () => {
  const [moviesSearch, setMoviesSearch] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [endFix, setEndFix] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const genres = useAppSelector(selectors.getGenres);
  const { query } = useParams();
  const dispatch = useAppDispatch();
  const prevQuery = useRef<string | null | undefined>(null);
  const pageReff = useRef<number | null | undefined>(null);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const results = await getMoviesSearch(query!, page);

        if (results.length < 20) {
          setEndFix(false);
        }

        if (results.length > 0) {
          setMoviesSearch((prevState) => [...prevState, ...results]);
          setLoading(false);
        }

        if (results.length === 0) {
          toast.error("Not found");
          setLoading(true);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (pageReff.current === page && prevQuery.current === query) {
      return;
    }

    if (prevQuery.current !== query) {
      setMoviesSearch([]);
      setPage(1);
      setEndFix(true);
    }

    if (prevQuery.current !== query && page === 1) {
      pageReff.current = null;
    }

    if (query && pageReff.current !== page) {
      fetchFilms();
    }

    prevQuery.current = query;
    pageReff.current = page;
  }, [query, page]);

  useEffect(() => {
    if (genres.length === 0) {
      dispatch(operations.fetchGenre());
    }
  }, [dispatch, genres]);

  const showNextMovies = () => {
    if (moviesSearch.length !== 0) {
      setPage(page + 1);
    }
  };

  return (
    <div className={styles.container}>
      {!loading && (
        <InfiniteScroll
          dataLength={moviesSearch.length}
          next={showNextMovies}
          hasMore={endFix}
          scrollThreshold={1}
          loader={<Loader size={70} />}
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
      )}
      {loading && <NotFound />}
    </div>
  );
};

export default Search;
