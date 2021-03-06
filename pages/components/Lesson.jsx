import styles from "../../styles/Lesson.module.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

const Lesson = (props) => {
  const router = useRouter();
  const [content, setContent] = useState({});
  useEffect(() => {
    (async () => {
      if (router.query.lessonid) {
        const d = await fetch(`/api/lesson/${router.query.lessonid}/content`);
        const j = await d.json();
        setContent(j);
      }
    })();
  }, [router]);

  return (
    <article className={styles.main}>
      {content.author ? (
        <>
          <div className={styles.titleBlock}>
            <h1>{content.title}</h1>
            <h2>
              {content.author} \ {new Date(content.timestamp).toDateString()}
            </h2>
          </div>
          <ReactMarkdown className={styles.text}>{content.text}</ReactMarkdown>
        </>
      ) : (
        <>
          <p>Loading...</p>
        </>
      )}
    </article>
  );
};

export default Lesson;
