import starFull from "../../images/starFull.png";
import starHalf from "../../images/starHalf.png";
import starZero from "../../images/starZero.png";

import styles from "./StarsRage.module.scss";

interface StarsRageProps {
  rage: string;
}

const StarsRage: React.FC<StarsRageProps> = ({ rage }) => {
  return (
    <>
      {rage > "7" && <img className={styles.star} src={starFull} alt="star" />}
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
    </>
  );
};

export default StarsRage;
