import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../redux/hook";
import { operations, selectors } from "../../redux/movies";

import { Reviews, ContentMovies, VideoMoviesDetails } from "../";

import styles from "./MovieDetails.module.scss";

const MovieDetails: React.FC = () => {
  const { itemId } = useParams();
  const manualMovie = useAppSelector(selectors.getOneMovie);
  const credits = useAppSelector(selectors.getCredits);
  const posters = useAppSelector(selectors.getPosters);
  const backImg = useAppSelector(selectors.getBackImg);
  const videos = useAppSelector(selectors.getVideos);
  const loadingManual = useAppSelector(selectors.getLoadingManual);
  const loading = useAppSelector(selectors.loadingVideo);
  const errorVideo = useAppSelector(selectors.errorgVideo);
  const reviews = useAppSelector(selectors.getReviews);
  const dispatch = useAppDispatch();
  const getFetch = useRef<string | null>(null);

  useEffect(() => {
    if (!itemId) {
      return;
    }
    if (getFetch.current === itemId) {
      return;
    }

    dispatch(operations.fetchOneMovie(itemId));
    dispatch(operations.fetchImages(itemId));
    dispatch(operations.fetchCredits(itemId));
    dispatch(operations.fetchVideos(itemId));
    dispatch(operations.fetchReviews(itemId));

    getFetch.current = itemId;
  }, [dispatch, itemId]);

  return (
    <div className={styles.container}>
      {!loadingManual && (
        <>
          <ContentMovies
            manualMovie={manualMovie}
            credits={credits}
            posters={posters}
          />
          <VideoMoviesDetails
            videos={videos}
            loading={loading}
            errorVideo={errorVideo}
            backImg={backImg}
          />
          {reviews.length !== 0 && <Reviews reviews={reviews} />}
        </>
      )}
    </div>
  );
};

export default MovieDetails;
