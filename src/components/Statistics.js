import React from "react";
import style from "../styles/Statistics.module.css";
const Statistics = (props) => {
  const { good, neutral, bad, countTotal, countPositivePercentage } = props;
  return (
    <div className={style.StatisticsBox}>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {countTotal}</span>
      <span>Positive feedback: {countPositivePercentage} %</span>
    </div>
  );
};

export default Statistics;
