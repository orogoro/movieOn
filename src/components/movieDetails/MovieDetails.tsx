import { useEffect } from "react";
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
  const loading = useAppSelector(selectors.loadingVideo);
  const errorVideo = useAppSelector(selectors.errorgVideo);
  const reviews = useAppSelector(selectors.getReviews);
  const dispatch = useAppDispatch();

  //dodelat zaprosy
  useEffect(() => {
    if (!itemId) {
      return;
    }
    dispatch(operations.fetchOneMovie(itemId));
    dispatch(operations.fetchImages(itemId));
    dispatch(operations.fetchCredits(itemId));
    dispatch(operations.fetchVideos(itemId));
    dispatch(operations.fetchReviews(itemId));
  }, [dispatch, itemId]);

  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default MovieDetails;
