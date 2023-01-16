import { IMAGEURL } from "../../API/APImovies";
import starFull from "../../images/starFull.png";
import starHalf from "../../images/starHalf.png";
import starZero from "../../images/starZero.png";

import styles from "./MoviesItem.module.scss";

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
  getById(id: number): void;
}

const MoviesItem: React.FC<MoviesItemsProps> = ({ data, genres, getById }) => {
  const {
    poster_path,
    original_title,
    title,
    release_date,
    vote_average,
    genre_ids,
    id,
  } = data;
  const releaseDate = release_date.slice(0, 4);
  const rage = vote_average.toFixed(1);
  const getGenres = genres.filter((item) => {
    return genre_ids.find((it) => item.id === it);
  });
  const nameGenres =
    getGenres.length > 3
      ? getGenres
          .slice(0, 3)
          .map((item) => item.name)
          .concat(["Other"])
          .join(", ")
      : getGenres.map((item) => item.name).join(", ");

  return (
    <li className={styles.item} onClick={() => getById(id)}>
      <div className={styles.containerImage}>
        <img
          className={styles.image}
          src={`${IMAGEURL}${poster_path}`}
          alt={title || original_title}
        />
      </div>
      <div className={styles.containerText}>
        <h2 className={styles.title}>{original_title}</h2>

        <div className={styles.containerGenre}>
          <p className={styles.genres}>{nameGenres}</p>
        </div>
        <div className={styles.containerRage}>
          <p>{releaseDate}</p>
          <div className={styles.containerStar}>
            <p className={styles.rage}>{rage !== "0.0" ? rage : "No rate"}</p>
            {rage > "7" && (
              <img className={styles.star} src={starFull} alt="star" />
            )}
            {rage < "7" && rage > "2" && rage !== "0.0" && (
              <img className={styles.star} src={starHalf} alt="star" />
            )}
            {rage < "2" && (
              <img
                className={`${styles.star} ${styles.backgraund}`}
                src={starZero}
                alt="star"
              />
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default MoviesItem;
