import styles from "./MoviesItem.module.scss";

import { IMAGEURL } from "../../API/APImovies";

interface MoviesItemsProps {
  data: {
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
  };
  genres: [
    {
      id: number;
      name: string;
    }
  ];
}

const MoviesItem: React.FC<MoviesItemsProps> = ({ data, genres }) => {
  const {
    poster_path,
    original_title,
    title,
    release_date,
    vote_average,
    genre_ids,
  } = data;
  const releaseDate = release_date.slice(0, 4);
  const rage = vote_average.toFixed(1);
  const getGenres = genres.filter((item) => {
    return genre_ids.find((it) => item.id === it);
  });

  return (
    <li className={styles.item}>
      <div className={styles.containerImage}>
        <img
          className={styles.image}
          src={`${IMAGEURL}${poster_path}`}
          alt={title || original_title}
        />
      </div>
      <div className={styles.containerText}>
        <p>{original_title}</p>

        <div className={styles.containerGenre}>
          {getGenres.map(({ id, name }) => (
            <p key={id}>{name}</p>
          ))}
        </div>
        <div className={styles.containerRage}>
          <p>{releaseDate}</p>
          <p>{rage}</p>
        </div>
      </div>
    </li>
  );
};

export default MoviesItem;
