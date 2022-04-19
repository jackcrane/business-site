import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import styles from "../../styles/Forms.module.css";

const Question = (props) => {
  const [uuid, setuuid] = useState(uuidv4());
  return (
    <>
      {props.q?.question ? (
        <div className="question">
          <p className={styles?.question}>{props.q?.question}</p>
          {props.q.type == "multiple" ? (
            <div className="answers">
              {props.q.options?.map((a, i) => (
                <RadioGroup
                  key={i}
                  a={a}
                  i={i}
                  questionID={uuid}
                  onAnswer={props.onAnswer}
                />
              ))}
            </div>
          ) : (
            <div className="answer">
              <input
                type="text"
                name={uuid}
                placeholder="Answer..."
                className={styles.textInput}
                onInput={(e) => {
                  props.onAnswer(e.target.value === props.q.correct);
                }}
              />
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

const RadioGroup = (props) => {
  const [uuid, setuuid] = useState(uuidv4());
  return (
    <div className="answer">
      <input
        type="radio"
        name={props.questionID}
        value={props.i}
        id={uuid}
        onInput={() => props.onAnswer(props.a.correct)}
      />
      <label htmlFor={uuid}>{props.a.label}</label>
    </div>
  );
};

export default Question;
