import { useState } from "react";
import { Link } from "react-router-dom";

import { moviesTypes } from "../../types";
import { IMAGEURL } from "../../API/APImovies";

import noPicture from "../../images/noMovieFoto.png";

import { StarsRage } from "../";

import styles from "./MoviesItem.module.scss";

interface MoviesItemsProps {
  data: moviesTypes.MoviesItem;
  genres: moviesTypes.GenresType[];
}

const MoviesItem: React.FC<MoviesItemsProps> = ({ data, genres }) => {
  const [error, setError] = useState<boolean>(false);
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
          className={`${styles.image} ${error ? styles.errorPicture : ""}`}
          src={`${IMAGEURL}${poster_path}`}
          alt={title || original_title}
          onError={(e: React.ChangeEvent<HTMLImageElement>): void => {
            e.target.src = noPicture;
            setError(true);
          }}
        />
      </div>
      <div className={styles.containerText}>
        <h2 className={styles.title}>
          {original_title.length > 50
            ? original_title.slice(0, 45) + "..."
            : original_title}
        </h2>
        {nameGenres && (
          <div
            className={`${styles.containerGenre} ${
              original_title.length > 30 && styles.margin
            }`}
          >
            <p className={styles.genres}>{nameGenres}</p>
          </div>
        )}

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
