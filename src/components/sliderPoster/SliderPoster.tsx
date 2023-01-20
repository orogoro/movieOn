import { useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";

import { moviesTypes } from "../../types";

import SliderItem from "./sliderItem/SliderItem";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./SliderPoster.module.scss";

interface SliderProps {
  images: moviesTypes.ImagesArrayType[];
  setImagePoster: (url: string) => void;
}

const SliderPoster: React.FC<SliderProps> = ({ images, setImagePoster }) => {
  const getImageUrl = useCallback(
    (url: string): void => {
      setImagePoster(url);
    },
    [setImagePoster]
  );

  return (
    <Swiper
      className={styles.container}
      spaceBetween={-70}
      slidesPerView={3}
      modules={[Navigation, A11y]}
      navigation
    >
      {images.map(({ file_path }) => (
        <SwiperSlide key={file_path}>
          <SliderItem image={file_path} onClick={getImageUrl} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderPoster;
