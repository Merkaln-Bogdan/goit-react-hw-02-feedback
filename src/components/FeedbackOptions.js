import React from "react";
import style from "../styles/Statistics.module.css";
import { v4 as uuidv4 } from "uuid";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={style.Statistics}>
      {options.map((element) => (
        <button
          className={style.StatisticsButton}
          type="button"
          name={element.name}
          key={uuidv4()}
          onClick={() => onLeaveFeedback(element)}
        >
          {element}
        </button>
      ))}
    </div>
  );
}
export default FeedbackOptions;
