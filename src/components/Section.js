import React from "react";
import style from "../styles/Statistics.module.css";

const Section = (props) => {
  return (
    <div className={style.SectionTitle}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};
export default Section;
