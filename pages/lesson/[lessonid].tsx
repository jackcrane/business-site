import type { NextPage } from "next";
import SideNav from "../components/SideNav";
import Lesson from "../components/Lesson";
import Quiz from "../components/Quiz";

import styles from "../../styles/Page.module.css";

const Page: NextPage = () => {
  return (
    <div className={styles.bg}>
      <SideNav />
      <div className={styles.main}>
        <Lesson className={styles.lesson} />
        {/* <div className={styles.quiz}>
          <Quiz />
        </div> */}
      </div>
    </div>
  );
};

export default Page;
