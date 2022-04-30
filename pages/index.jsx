import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/lessons");
      const data = await response.json();
      setLessons(data);
    })();
  }, []);

  return (
    <>
      <div className={styles.lowlights}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <header className={styles.container}>
        <nav>
          <img src="/logo.png" alt="logo" />
        </nav>
        <div className={styles.titleblock}>
          <h1>
            Financial Education
            <br />
            for the rest of us
          </h1>
        </div>
        <div className={styles.links}>
          {lessons.map((lesson) => (
            <Link href={`/lesson/${lesson.id}`}>
              <p>{lesson.title}</p>
            </Link>
          ))}
        </div>
      </header>
    </>
  );
};

export default Home;
