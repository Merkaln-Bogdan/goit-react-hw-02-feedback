import React from "react";
import style from "../styles/Statistics.module.css";

const FeedbackOptions = ({ OnGood, OnNeutral, OnBad }) => (
  <div className={style.Statistics}>
    <button className={style.StatisticsButton} type="button" onClick={OnGood}>
      Good
    </button>
    <button
      className={style.StatisticsButton}
      type="button"
      onClick={OnNeutral}
    >
      Neutral
    </button>
    <button className={style.StatisticsButton} type="button" onClick={OnBad}>
      Bad
    </button>
  </div>
);
export default FeedbackOptions;
