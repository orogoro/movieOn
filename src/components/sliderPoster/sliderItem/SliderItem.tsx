import { IMAGEURL } from "../../../API/APImovies";

import styles from "./SliderItem.module.scss";

interface SliderItemProps {
  image: string;
  onClick: (url: string) => void;
}

const SliderItem: React.FC<SliderItemProps> = ({ image, onClick }) => {
  return (
    <img
      className={styles.image}
      src={`${IMAGEURL}${image}`}
      alt="foto"
      onClick={() => onClick(image)}
    />
  );
};

export default SliderItem;
