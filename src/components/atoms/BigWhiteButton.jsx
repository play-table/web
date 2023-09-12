import React from "react";
import styles from "../../styles/atoms/BigWhiteButton.module.css";
const BigWhiteButton = ({ content, onClickHandler }) => {
  return (
    <button className={styles.big_white_btn} onClick={onClickHandler}>
      {content}
    </button>
  );
};

export default BigWhiteButton;
