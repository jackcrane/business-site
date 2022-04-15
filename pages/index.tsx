import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href={"/lesson/6258b6cb5ff526ad5657378c"}>Go to content</Link>
    </div>
  );
};

export default Home;
