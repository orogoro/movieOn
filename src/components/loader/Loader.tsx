import HashLoader from "react-spinners/HashLoader";

interface loaderProps {
  size: number;
  styles: string;
}

const Loader: React.FC<loaderProps> = ({ size, styles }) => {
  return (
    <div className={styles}>
      <HashLoader
        color={"#f27c32"}
        //   loading={loading}
        size={size}
      />
    </div>
  );
};

export default Loader;
