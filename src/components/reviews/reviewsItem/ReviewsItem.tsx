import { moviesTypes } from "../../../types";

interface ReviewsItemProps {
  item: moviesTypes.ReviewsType;
}

const ReviewsItem: React.FC<ReviewsItemProps> = ({ item }) => {
  return (
    <li>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h3>{item.author}</h3>
        <p></p>
      </div>
    </li>
  );
};

export default ReviewsItem;
