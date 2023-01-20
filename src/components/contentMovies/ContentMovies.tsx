import { moviesTypes } from "../../types";
import { CastItem, StarsRage } from "../";
import ContentMoviesText from "./contentMoviesText/ContentMoviesText";
import ContentMoviesImage from "./contentMoviesImage/ContentMoviesImage";

import styles from "./ContentMovies.module.scss";

interface ContentMoviesProps {
  manualMovie: moviesTypes.OneMovieType;
  posters: moviesTypes.ImagesArrayType[];
  credits: moviesTypes.CastTypes[];
}

const ContentMovies: React.FC<ContentMoviesProps> = ({
  manualMovie,
  posters,
  credits,
}) => {
  const releaseDate = manualMovie?.release_date.slice(0, 4);
  const rage = manualMovie?.vote_average.toFixed(1);
  const genres = manualMovie?.genres
    .map((item): string => item.name)
    .join(", ");
  const country = manualMovie?.production_countries
    .map((item): string => item.name)
    .join(", ");
  const hours = Math.trunc(manualMovie?.runtime / 60);
  const minutes = manualMovie?.runtime % 60;

  return (
    <div className={styles.containerContent}>
      <ContentMoviesImage manualMovie={manualMovie} posters={posters} />

      <div className={styles.containerInformation}>
        <h1>{manualMovie?.title}</h1>

        <div className={styles.containerText}>
          <p className={styles.titleText}>Vote / Votes</p>
          <div className={styles.containerStars}>
            <StarsRage rage={rage} />
            <p className={styles.rate}>
              {rage !== "0.0" ? rage : "No rate"}{" "}
              <span className={styles.spanCount}>
                /{" "}
                {manualMovie?.vote_count !== 0
                  ? manualMovie?.vote_count
                  : "No count"}{" "}
              </span>
            </p>
          </div>
        </div>

        <ContentMoviesText title="Year" content={releaseDate} />
        <ContentMoviesText
          title="Original Title"
          content={manualMovie?.original_title}
        />
        <ContentMoviesText title="Genre" content={genres} />
        <ContentMoviesText title="Сountry" content={country} />
        <ContentMoviesText
          title="Time"
          content={`${hours} hours ${minutes} minutes`}
        />
        <ContentMoviesText
          title="Release"
          content={manualMovie?.release_date}
        />

        <div className={`${styles.containerText} ${styles.alineItemStart}`}>
          <p className={styles.titleText}>Cast</p>
          <div className={styles.containerCast}>
            {credits.slice(0, 20).map(({ id, name }, index) => (
              <CastItem
                key={id}
                name={name}
                id={id}
                index={index === credits.slice(0, 20).length - 1}
              />
            ))}
          </div>
        </div>

        <p className={styles.overview}>{manualMovie?.overview}</p>
      </div>
    </div>
  );
};

export default ContentMovies;
