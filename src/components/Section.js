import React from "react";
import style from "../styles/Statistics.module.css";

const Section = (props) => {
  return (
    <div className={style.SectionTitle}>
      {props.title}
      {props.children}
    </div>
  );
};
export default Section;
