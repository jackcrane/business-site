import type { NextPage } from "next";
import styles from "../../styles/SideNav.module.css";

const SideNav: NextPage = (props) => {
  return (
    <nav className={styles.nav}>
      <span>😀</span>
      <span>😃</span>
      <span>😄</span>
      <span>😁</span>
    </nav>
  );
};

export default SideNav;
