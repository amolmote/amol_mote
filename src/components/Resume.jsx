import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <div className={styles.resumeContainer}>
      <h2 style={{ textAlign: "center" }}>RESUME</h2>
      <div style={{ textAlign: "center" }}>
        <iframe src="/Amol Mote Resume.pdf"></iframe>
      </div>
    </div>
  );
};

export default Resume;