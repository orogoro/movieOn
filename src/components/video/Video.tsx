import styles from "./Video.module.scss";

interface VideoProps {
  idVideos: string;
}

const Video: React.FC<VideoProps> = ({ idVideos }) => {
  return (
    <div className={styles.iframe}>
      <iframe
        title="myFrame"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${idVideos}`}
        frameBorder={0}
        allowFullScreen
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default Video;
