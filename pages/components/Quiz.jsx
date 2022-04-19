import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Question from "./Question";
import styles from "../../styles/Quiz.module.css";

const Quiz = (props) => {
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

  const [questionStates, setQuestionStates] = useState({});

  const onAnswer = (correct, i) => {
    let cqs = questionStates;
    cqs[i] = correct;
    setQuestionStates(cqs);
  };

  return (
    <section className={styles.main}>
      {content.quiz ? (
        <>
          <h1>Test your understanding</h1>
          <hr />
          {content.quiz.map((e, i) => (
            <div key={i}>
              <Question q={e} key={i} onAnswer={(d) => onAnswer(d, i)} />
            </div>
          ))}
          <p>
            <button className={styles.submit}>Grade</button>
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default Quiz;
