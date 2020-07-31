import React from "react";
import style from "../styles/Statistics.module.css";
import PropTypes from "prop-types";
const Statistics = (props) => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <div className={style.StatisticsBox}>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
      <span>Positive feedback: {positivePercentage} %</span>
    </div>
  );
};

export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
