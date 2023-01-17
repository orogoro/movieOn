import styles from "./CastItem.module.scss";

interface CastItemProps {
  name: string;
  id: number;
  index: boolean;
}

const CastItem: React.FC<CastItemProps> = ({ name, id, index }) => {
  return (
    <>
      <a
        className={styles.link}
        href={`https://www.themoviedb.org/person/${id}`}
        target="blank"
      >
        {name}
      </a>
      {!index ? ", " : ""}
    </>
  );
};
export default CastItem;
