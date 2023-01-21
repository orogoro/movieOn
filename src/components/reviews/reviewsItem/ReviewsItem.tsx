import { useState } from "react";

import { moviesTypes } from "../../../types";
import { IMAGEURL } from "../../../API/APImovies";

import avatar from "../../../images/avatar.png";
import up from "../../../images/up.png";
import down from "../../../images/down.png";

import styles from "./ReviewsItem.module.scss";

interface ReviewsItemProps {
  item: moviesTypes.ReviewsType;
}

const ReviewsItem: React.FC<ReviewsItemProps> = ({ item }) => {
  const [active, setActive] = useState<boolean>(false);

  const date = new Date(item.created_at);
  const yyyy = date.getFullYear();
  let mm =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  let dd = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const formattedToday = dd + "." + mm + "." + yyyy;

  const handleClick = (): void => {
    if (active) {
      setActive(false);
      return;
    }
    setActive(true);
  };

  console.log(item.content.length);

  return (
    <li className={styles.container}>
      <div className={styles.containerImage}>
        <img
          className={styles.image}
          src={`${IMAGEURL}${item.author_details.avatar_path}`}
          alt={`avatar_${item.author}`}
          onError={(e: React.ChangeEvent<HTMLImageElement>): void => {
            e.target.src = avatar;
          }}
        />
      </div>
      <div className={styles.containerInfo}>
        <div className={styles.containerTitle}>
          <h3 className={styles.title}>{item.author}</h3>
          <p>{formattedToday}</p>
        </div>
        <div className={styles.containerText}>
          <p className={`${styles.text} ${active ? styles.active : ""}`}>
            {item.content}
          </p>
          {item.content.length > 450 && (
            <div
              className={`${styles.buttonHidden} ${
                active ? styles.activeBTN : ""
              } `}
              onClick={handleClick}
            >
              {active ? (
                <img className={styles.down} src={up} alt="up" />
              ) : (
                <img className={styles.down} src={down} alt="down" />
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default ReviewsItem;
