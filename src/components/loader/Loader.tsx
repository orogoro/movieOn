import HashLoader from "react-spinners/HashLoader";

import styles from "./Loader.module.scss";

interface loaderProps {
  size: number;
}

const Loader: React.FC<loaderProps> = ({ size }) => {
  return (
    <div className={styles.container}>
      <HashLoader color={"#f27c32"} size={size} />
    </div>
  );
};

export default Loader;
