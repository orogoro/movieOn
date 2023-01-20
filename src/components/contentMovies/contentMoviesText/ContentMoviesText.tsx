import styles from "./ContentMoviesText.module.scss";

interface ContentMoviesTextProps {
  title: string;
  content: string;
}

const ContentMoviesText: React.FC<ContentMoviesTextProps> = ({
  title,
  content,
}) => {
  return (
    <div className={styles.containerText}>
      <p className={styles.titleText}>{title}</p>
      <p className={styles.text}>{content}</p>
    </div>
  );
};

export default ContentMoviesText;
