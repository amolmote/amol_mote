import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <header className={styles.nav}>
      <nav className={styles.navContainerActions}>
        <ul>
          <li>
            <Link activeClass="active" smooth spy to="about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="work">
              WORK
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="certifications">
              CERTIFICATION
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="resume">
              RESUME
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
