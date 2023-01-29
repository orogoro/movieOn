import videoYouTube from "../../images/videoYouTube.png";

import { moviesTypes } from "../../types";
import { Video, SliderBackImages } from "../";

import styles from "./VideoMoviesDetails.module.scss";

interface VideoMoviesDetailsProps {
  videos: moviesTypes.VideosType[];
  loading: boolean;
  errorVideo: boolean;
  backImg: moviesTypes.ImagesArrayType[];
}

const VideoMoviesDetails: React.FC<VideoMoviesDetailsProps> = ({
  videos,
  loading,
  errorVideo,
  backImg,
}) => {
  const idVideos = videos[0]?.key;

  return (
    <div
      className={`${styles.containerVideo} ${!idVideos && styles.displayNone}`}
    >
      {!loading && (
        <div className={styles.iframe}>
          {!errorVideo && idVideos && <Video idVideos={idVideos} />}
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
      {backImg.length !== 0 && (
        <div className={styles.sliderBackImages}>
          <SliderBackImages images={backImg} />
        </div>
      )}
    </div>
  );
};

export default VideoMoviesDetails;
