import { Link } from "react-router-dom";

import { moviesTypes } from "../../types";
import { IMAGEURL } from "../../API/APImovies";

import noPicture from "../../images/noPicture.png";

import { StarsRage } from "../";

import styles from "./MoviesItem.module.scss";

interface MoviesItemsProps {
  data: moviesTypes.MoviesItem;
  genres: moviesTypes.GenresType[];
}

const MoviesItem: React.FC<MoviesItemsProps> = ({ data, genres }) => {
  const {
    poster_path,
    original_title,
    title,
    release_date,
    vote_average,
    genre_ids,
    id,
  } = data;
  const releaseDate = release_date?.slice(0, 4);
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
    <Link className={styles.item} to={`/Movies/${id}`}>
      <div className={styles.containerImage}>
        <img
          className={styles.image}
          src={`${IMAGEURL}${poster_path}`}
          alt={title || original_title}
          onError={(e: React.ChangeEvent<HTMLImageElement>): void => {
            e.target.src = noPicture;
          }}
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
            <StarsRage rage={rage} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MoviesItem;
