import styles from "./Resume.module.css";
import pdf from "/Amol Mote Resume.pdf";

const Resume = () => {
  return (
    <div className={styles.resumeContainer}>
      <h2 style={{ textAlign: "center" }}>RESUME</h2>
      <div style={{ textAlign: "center" }}>
        <embed src={pdf} type="application/pdf" width="100%" height="500px" />
      </div>
    </div>
  );
};

export default Resume;
