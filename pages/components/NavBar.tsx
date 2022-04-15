import type { NextPage } from "next";
import styles from "../../styles/NavBar.module.css";

const NavBar: NextPage = (props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.all}>
        <span>Business</span>
        <div className={styles.navright}>
          <span>About</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
