import notFound from "../../images/notFound.png";

import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={notFound} alt="notFound" />
      <h1 className={styles.title}>Not found</h1>
    </div>
  );
};

export default NotFound;
