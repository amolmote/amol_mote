import styles from "./AboutPage.module.css";
import image from "/no-background-image.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const AboutPage = () => {
  return (
    <div className={styles.outerContainerDesign}>
      <div className={styles.imageContainer}>
        <img src={image} />
      </div>
      <div className={styles.aboutMeText}>
        <p>
          <span className={styles.titleStyle}>
            Hi, I'm Amol – a Java Developer
          </span>
          <br /> with a knack for analytical programming and application design.
          I excel in collaborative environments and bring a passion for
          innovation to every project.
        </p>
        <div className={styles.iconContainer}>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/amol-mote-882254219/">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/amolmote">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
