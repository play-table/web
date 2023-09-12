import React from "react";
import styles from "../../styles/atoms/RoundButton.module.css";
const RoundButton = ({ content, onClickHandler, type }) => {
  return (
    <button
      className={
        type === "click" ? styles.round_btn_color : styles.round_btn_noColor
      }
      onClick={onClickHandler}
    >
      {content}
    </button>
  );
};

export default RoundButton;
