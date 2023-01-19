import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../redux/hook";

import { operations, selectors } from "../../redux/movies";

import { CastItem, SliderPoster, Video, SliderBackImages } from "../";

import { IMAGEURL } from "../../API/APImovies";
import starFull from "../../images/starFull.png";
import starHalf from "../../images/starHalf.png";
import starZero from "../../images/starZero.png";
import videoYouTube from "../../images/videoYouTube.png";

import styles from "./MovieDetails.module.scss";

const MovieDetails: React.FC = () => {
  const { itemId } = useParams();
  const manualMovie = useAppSelector(selectors.getOneMovie);
  const credits = useAppSelector(selectors.getCredits);
  const posters = useAppSelector(selectors.getPosters);
  const backImg = useAppSelector(selectors.getBackImg);
  const videos = useAppSelector(selectors.getVideos);
  const loading = useAppSelector(selectors.loadingVideo);
  const errorVideo = useAppSelector(selectors.errorgVideo);
  const dispatch = useAppDispatch();
  const [imagePoster, setImagePoster] = useState<string | null>(null);

  const idVideos = videos[0]?.key;
  const releaseDate = manualMovie?.release_date.slice(0, 4);
  const rage = manualMovie?.vote_average.toFixed(1);
  const genres = manualMovie?.genres
    .map((item: { id: number; name: string }): string => item.name)
    .join(", ");
  const country = manualMovie?.production_countries
    .map((item: { id: number; name: string }): string => item.name)
    .join(", ");
  const hours = Math.trunc(manualMovie?.runtime / 60);
  const minutes = manualMovie?.runtime % 60;

  useEffect(() => {
    if (!itemId) {
      return;
    }
    dispatch(operations.fetchOneMovie(itemId));
    dispatch(operations.fetchImages(itemId));
    dispatch(operations.fetchCredits(itemId));
    dispatch(operations.fetchVideos(itemId));
  }, [dispatch, itemId]);

  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <div className={styles.containerImage}>
          {!imagePoster && (
            <img
              className={styles.image}
              src={`${IMAGEURL}${manualMovie?.poster_path}`}
              alt={manualMovie?.title}
            />
          )}
          {imagePoster && (
            <img
              className={styles.image}
              src={`${IMAGEURL}${imagePoster}`}
              alt={manualMovie?.title}
            />
          )}
          {posters && (
            <SliderPoster images={posters} setImagePoster={setImagePoster} />
          )}
        </div>
        <div className={styles.containerInformation}>
          <h1>{manualMovie?.title}</h1>
          <div className={styles.containerText}>
            <p className={styles.titleText}>Vote / Votes</p>
            <div className={styles.containerStars}>
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
          <div className={styles.containerText}>
            <p className={styles.titleText}>Year</p>
            <p className={styles.text}>{releaseDate}</p>
          </div>
          <div className={styles.containerText}>
            <p className={styles.titleText}>Original Title</p>
            <p className={styles.text}>{manualMovie?.original_title}</p>
          </div>
          <div className={styles.containerText}>
            <p className={styles.titleText}>Genre</p>
            <p className={styles.text}>{genres}</p>
          </div>
          <div className={styles.containerText}>
            <p className={styles.titleText}>Сountry</p>
            <p className={styles.text}>{country}</p>
          </div>
          <div className={styles.containerText}>
            <p className={styles.titleText}>Time</p>
            <p className={styles.text}>{`${hours} hours ${minutes} minutes`}</p>
          </div>
          <div className={styles.containerText}>
            <p className={styles.titleText}>Release</p>
            <p className={styles.text}>{manualMovie?.release_date}</p>
          </div>
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
      <div className={styles.containerVideo}>
        {!loading && (
          <div className={styles.iframe}>
            {!errorVideo && <Video idVideos={idVideos} />}
            <div
              className={`${styles.textPrevue} ${
                errorVideo ? styles.errorStyles : ""
              }`}
            >
              {errorVideo ? "Oops, something went wrong " : "Trailer"}
              <img
                className={styles.videoYouTube}
                src={videoYouTube}
                alt="videoYouTube"
              />
            </div>
          </div>
        )}
        <div className={styles.sliderBackImages}>
          <SliderBackImages images={backImg} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
