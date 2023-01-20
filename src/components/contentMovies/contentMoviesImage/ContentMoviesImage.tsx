import { useState } from "react";

import { moviesTypes } from "../../../types";
import { SliderPoster } from "../../";

import { IMAGEURL } from "../../../API/APImovies";

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
  );
};

export default ContentMoviesImage;
