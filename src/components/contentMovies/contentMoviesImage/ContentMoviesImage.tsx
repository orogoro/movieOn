import { useState } from "react";

import { moviesTypes } from "../../../types";
import { SliderPoster } from "../../";

import { IMAGEURL } from "../../../API/APImovies";
import noPicture from "../../../images/noPicture.png";

import styles from "./ContentMoviesImage.module.scss";

interface ContentMoviesImageProps {
  manualMovie: moviesTypes.OneMovieType;
  posters: moviesTypes.ImagesArrayType[];
}

const ContentMoviesImage: React.FC<ContentMoviesImageProps> = ({
  manualMovie,
  posters,
}) => {
  const [imagePoster, setImagePoster] = useState<string | null>(null);

  return (
    <div className={styles.containerImage}>
      {!imagePoster && (
        <img
          className={styles.image}
          src={`${IMAGEURL}${manualMovie?.poster_path}`}
          alt={manualMovie?.title}
          onError={(e: React.ChangeEvent<HTMLImageElement>): void => {
            e.target.src = noPicture;
          }}
        />
      )}
      {imagePoster && (
        <img
          className={styles.image}
          src={`${IMAGEURL}${imagePoster}`}
          alt={manualMovie?.title}
          onError={(e: React.ChangeEvent<HTMLImageElement>): void => {
            e.target.src = noPicture;
          }}
        />
      )}
      {posters && (
        <SliderPoster images={posters} setImagePoster={setImagePoster} />
      )}
    </div>
  );
};

export default ContentMoviesImage;
