import type { NextPage } from "next";
import NavBar from "../components/NavBar";
import SideNav from "../components/SideNav";
import Lesson from "../components/Lesson";
import Quiz from "../components/Quiz";

import styles from "../../styles/Page.module.css";

const Page: NextPage = () => {
  return (
    <div className={styles.bg}>
      <SideNav />
      <div className={styles.main}>
        <Lesson />
        <Quiz />
      </div>
    </div>
  );
};

export default Page;