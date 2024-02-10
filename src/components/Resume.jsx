import styles from "./Resume.module.css";
import pdf from "/Amol Mote Resume.pdf";

const Resume = () => {
  return (
    <div className={styles.resumeContainer}>
      <h2 style={{ textAlign: "center" }}>RESUME</h2>
      <div style={{ textAlign: "center" }}>
        <object data={pdf} type="application/pdf" width="100%" height="500px">
          <p>
            It appears you don't have a PDF plugin for this browser. No worries,
            you can
            <a href={pdf} download={pdf}>
              download the PDF file
            </a>
            .
          </p>
        </object>
      </div>
    </div>
  );
};

export default Resume;
