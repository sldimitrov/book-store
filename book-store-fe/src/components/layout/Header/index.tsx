import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/library">
          Library
        </Link>
        <Link className={styles.link} to="/contacts">
          Contacts
        </Link>
      </ul>
    </nav>
  );
}
