import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";

import SliderItem from "./sliderItem/SliderItem";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./SliderBackImages.module.scss";

type SliderType = {
  height: number;
  aspect_ratio: number;
  file_path: string;
  iso_639_1: string | null;
  vote_average: number;
  vote_count: number;
  width: number;
};

interface SliderProps {
  images: SliderType[];
}

const SliderBackImages: React.FC<SliderProps> = ({ images }) => {
  return (
    <Swiper
      className={styles.container}
      spaceBetween={30}
      slidesPerView={3}
      modules={[Navigation, A11y]}
      navigation
    >
      {images.map(({ file_path }) => (
        <SwiperSlide key={file_path}>
          <SliderItem image={file_path} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderBackImages;
