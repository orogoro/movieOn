import { IMAGEURL } from "../../../API/APImovies";

import styles from "./SliderItem.module.scss";

interface SliderItemProps {
  image: string;
}

const SliderItem: React.FC<SliderItemProps> = ({ image }) => {
  return (
    <img className={styles.image} src={`${IMAGEURL}${image}`} alt="foto" />
  );
};

export default SliderItem;
